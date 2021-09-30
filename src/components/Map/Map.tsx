import { useRef, useEffect } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import MapProps from "./Map.types";
import "mapbox-gl/dist/mapbox-gl.css";

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;
mapboxgl.accessToken = REACT_APP_MAPBOX_ACCESS_TOKEN || "";

export default function Map({ mapCenter = [0.0, 0.0] }: MapProps) {
  const mapContainer: any = useRef(null);
  const map: any = useRef(null);

  // Initialize Map
  useEffect(() => {
    if (map.current) return;
    setTimeout(() => {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: mapCenter,
        zoom: 10,
      });
      new mapboxgl.Marker({ color: "#dc2626" }).setLngLat(mapCenter).addTo(map.current);
    }, 350);
  });

  // Update Map Center + Marker
  useEffect(() => {
    if (!map.current) return;
    map.current.setCenter(mapCenter);
    new mapboxgl.Marker({ color: "#dc2626" }).setLngLat(mapCenter).addTo(map.current);
  }, [mapCenter]);

  return (
    <MapContainer>
      <div ref={mapContainer} className="map" />
    </MapContainer>
  );
}

const MapContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .map {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border-radius: 0.5rem;
  }
`;

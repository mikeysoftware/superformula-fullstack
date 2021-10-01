import { useState, ChangeEvent, MouseEvent, FormEvent, useEffect } from "react";
import styled from "styled-components";
import useDebounceState from "../../../hooks/useDebounceState";
import { useQuery, useMutation } from "@apollo/client";
import { User } from "../../../graphql/schema.types";
import { getLocationInformation } from "../../../graphql/queries";
import { updateUser } from "../../../graphql/mutations";
import { LngLatLike } from "mapbox-gl";

// Components
import Map from "../../Map";
import Modal from "../../Modal";
import Alert from "../../Alert";
import Loader from "../../Loader";
import Button from "../../Button";
import Input, { Label } from "../../Input";

// Interface
interface EditModalProps {
  user?: User;
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_STATE = {
  name: "",
  address: "",
  description: "",
};

export default function EditModal({ user, isOpen, onClose }: EditModalProps) {
  // Address Information Query
  const { loading: addressLoading, error: addressError, data: addressData, refetch: addressRefetch } = useQuery(getLocationInformation, {
    variables: { address: user?.address },
  });
  const [updateUserAsync, { data, loading, error }] = useMutation(updateUser);
  const [userData, setUserData] = useState({ ...INITIAL_STATE, ...user });
  const [mapCenter, setMapCenter] = useState<LngLatLike>([0.0, 0.0]);
  const debouncedAddress = useDebounceState(userData?.address, 500);

  // Save user input in state
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  // Update/persist user with new values
  function handleSaveUserChanges(event: FormEvent) {
    event.preventDefault();
    const { __typename, ...updatedData } = userData;
    const updatedAt = new Date().toISOString();
    try {
      updateUserAsync({
        variables: { input: { ...updatedData, updatedAt } },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Reset un-persisted User Data when closing modal
  function handleCloseEditModal(event: MouseEvent<HTMLButtonElement>) {
    setUserData({ ...INITIAL_STATE, ...user });
    onClose();
  }

  // Get Coordinates from Address
  useEffect(() => {
    if (!addressData) return;
    const jsonData = JSON.parse(addressData?.getLocationInformation?.data);
    if (jsonData?.features?.length === 0) return;
    setMapCenter([jsonData?.features[0]?.center[0], jsonData?.features[0]?.center[1]]);
  }, [addressData, addressData?.getLocationInformation?.data]);

  // Get Address data from User Input
  useEffect(() => {
    if (!debouncedAddress) return;
    addressRefetch({ address: debouncedAddress });
  }, [addressRefetch, debouncedAddress]);

  return (
    <Modal isModalVisible={isOpen} onModalClose={onClose}>
      <EditModalContainer>
        <div className="header">
          <h1>Edit User</h1>
        </div>
        {/* Alerts */}
        <div className="alerts">
          {data?.updateUser && <Alert variant="success">{"SUCCESS :: User successfully updated."}</Alert>}
          {error?.graphQLErrors && <Alert variant="error">{"ERROR :: Failed to update User."}</Alert>}
        </div>
        {/* Content */}
        <div className="content">
          {/* Map */}
          <div className="map">
            {addressLoading && <Loader />}
            {!addressError && addressData?.getLocationInformation?.data && <Map mapCenter={mapCenter} />}
          </div>
          {/* Edit Form */}
          <form id="edit-form" className="form" onSubmit={handleSaveUserChanges}>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" value={userData.name || ""} onChange={handleInputChange} placeholder="Full name" />
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              type="text"
              value={userData.address || ""}
              onChange={handleInputChange}
              placeholder="Full Address"
            />
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="text"
              value={userData.description || ""}
              onChange={handleInputChange}
              placeholder="Brief Description"
            />
          </form>
        </div>
        {/* Actions */}
        <div className="footer">
          <div />
          <div className="actions">
            <Button id="edit-form-submit" type="submit" form="edit-form" loading={loading}>
              Save
            </Button>
            <Button id="edit-modal-exit" variant="secondary" onClick={handleCloseEditModal}>
              Cancel
            </Button>
          </div>
        </div>
      </EditModalContainer>
    </Modal>
  );
}

const EditModalContainer = styled.div`
  .header {
  }

  .alerts {
    margin-top: 4rem;
  }

  .content {
    margin-top: 4rem;
    display: grid;
    column-gap: 4rem;
    grid-template-columns: 2fr 3fr;

    .map {
      background: #f8f8f8;
      border-radius: 0.5rem;
    }

    .form {
      display: flex;
      flex-direction: column;

      input {
        margin-bottom: 2rem;
      }

      input:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .footer {
    margin-top: 4rem;
    display: grid;
    column-gap: 4rem;
    grid-template-columns: 2fr 3fr;

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button:first-of-type {
        margin-right: 4rem;
      }
    }
  }
`;

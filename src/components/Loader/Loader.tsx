import React from "react";
import styled from "styled-components";

export default function Loader() {
  return <LoaderWrapper />;
}

const LoaderWrapper = styled.div`
  border: 0.375rem solid rgba(0, 0, 0, 0.125);
  border-top: 0.375rem solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  margin-top: 0.375rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { User } from "../../../graphql/schema.types";
import { createUser } from "../../../graphql/mutations";

// Components
import Modal from "../../Modal";
import Button from "../../Button";
import Input, { Label } from "../../Input";
import Alert from "../../Alert";

// Interface
interface CreateModalProps {
  user?: User;
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_STATE = {
  name: "",
  dob: "",
  address: "",
  description: "",
};

export default function CreateModal({ user, isOpen, onClose }: CreateModalProps) {
  const [createUserAsync, { data, loading, error }] = useMutation(createUser);
  const [userData, setUserData] = useState({ ...INITIAL_STATE, ...user });

  // Save user input in state
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  // Update user with new values
  function handleSaveUserChanges(event: FormEvent) {
    event.preventDefault();
    const { __typename, ...createdData } = userData;
    const createdAt = new Date().toISOString();
    try {
      createUserAsync({
        variables: { input: { ...createdData, createdAt } },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal isModalVisible={isOpen} onModalClose={onClose}>
      <CreateModalContainer>
        <div className="header">
          <h1>Create User</h1>
        </div>
        <div className="alerts">
          {data?.createUser && <Alert variant="success">{"SUCCESS :: User successfully created."}</Alert>}
          {error?.graphQLErrors && <Alert variant="error">{"ERROR :: Failed to create User."}</Alert>}
        </div>
        <div className="content">
          <form id="create-form" className="form" onSubmit={handleSaveUserChanges}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={userData.name || ""}
              onChange={handleInputChange}
              placeholder="Full name"
            />
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
        <div className="footer">
          <div />
          <div className="actions">
            <Button type="submit" form="create-form" loading={loading}>
              Save
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </CreateModalContainer>
    </Modal>
  );
}

const CreateModalContainer = styled.div`
  .header {
  }

  .alerts {
    margin-top: 4rem;
  }

  .content {
    margin-top: 4rem;
    .form {
      display: flex;
      flex-direction: column;

      input {
        margin-bottom: 2rem;
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

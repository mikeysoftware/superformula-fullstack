import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { User } from "../../../graphql/schema.types";
import { listUsers } from "../../../graphql/queries";
import { deleteUser } from "../../../graphql/mutations";

// Components
import Modal from "../../Modal";
import Button from "../../Button";
import Alert from "../../Alert";

// Interface
interface DeleteModalProps {
  user?: User;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteModal({ user, isOpen, onClose }: DeleteModalProps) {
  const [deleteUserAsync, { data, loading, error }] = useMutation(deleteUser);
  const [userData] = useState({ ...user });

  // Update user with new values
  async function handleDeleteUser(event: MouseEvent<HTMLButtonElement>) {
    const { id } = userData;
    try {
      await deleteUserAsync({
        variables: { input: { id } },
        refetchQueries: [listUsers],
      });
      setTimeout(() => {
        onClose();
      }, 300);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal isModalVisible={isOpen} onModalClose={onClose}>
      <DeleteModalContainer>
        <div className="header">
          <h1>Delete User</h1>
        </div>
        {data?.deleteUser && <Alert variant="success">{"SUCCESS :: User successfully deleted."}</Alert>}
        {error?.graphQLErrors && <Alert variant="error">{"ERROR :: Failed to delete User."}</Alert>}
        <div className="content">
          <h2>Are you sure you want to delete this user?</h2>
        </div>
        <div className="footer">
          <div className="actions">
            <Button loading={loading} onClick={handleDeleteUser}>
              Delete
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DeleteModalContainer>
    </Modal>
  );
}

const DeleteModalContainer = styled.div`
  .header {
    margin-bottom: 3rem;
  }

  .content {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }

  .footer {
    display: flex;
    justify-content: center;

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

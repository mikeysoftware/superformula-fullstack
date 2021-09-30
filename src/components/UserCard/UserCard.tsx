import { Fragment, useState } from "react";
import styled, { css } from "styled-components";
import Card from "../Card";
import Avatar from "../Avatar";
import EditModal from "../UserModals/EditModal";
import DeleteModal from "../UserModals/DeleteModal";
import { formatISODate } from "../../utils";
import { UserCardProps, ContainerProps } from "./UserCard.types";
import { ReactComponent as EditIcon } from "../../assets/svg/edit-icon.svg";

export default function UserCard({ user }: UserCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  return (
    <Card onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      <Fragment>
        <UserCardContainer isHovered={isHovered}>
          <div className="actions">
            <button onClick={() => setIsDeleteModalVisible(true)}>DEL</button>
            <button onClick={() => setIsEditModalVisible(true)}>
              <EditIcon />
            </button>
          </div>
          <Avatar src={`https://source.unsplash.com/random/192x192?sig=${user?.id}`} />
          <div className="about">
            <h2>{user?.name || "N/A Name"}</h2>
            <div className="created">
              created <span>{formatISODate(user?.createdAt)}</span>
            </div>
          </div>
          <p>{user?.description || "N/A Description"}</p>
        </UserCardContainer>
        {/* Edit Modal */}
        <EditModal user={user} isOpen={isEditModalVisible} onClose={() => setIsEditModalVisible(false)} />
        {/* Delete Modal */}
        <DeleteModal user={user} isOpen={isDeleteModalVisible} onClose={() => setIsDeleteModalVisible(false)} />
      </Fragment>
    </Card>
  );
}

// Styled
const UserCardContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  background: white;

  .actions {
    position: absolute;
    top: 1.125rem;
    left: 1.125rem;
    right: 1.125rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    opacity: 0;
    transition: 0.25s;

    button {
      border: none;
      outline: none;
      padding: 0.5rem;
      border-radius: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: transparent;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }

  img {
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .about {
    display: flex;
    align-items: center;

    h2 {
      flex: 1;
    }

    .created {
      opacity: 0;
      span {
        color: #af1e1e;
        font-weight: 600;
      }
    }
  }

  p {
    margin-top: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${(props) =>
    props.isHovered === true &&
    css`
      .actions {
        opacity: 1;
      }
      .about {
        .created {
          opacity: 1;
        }
      }
    `}
`;

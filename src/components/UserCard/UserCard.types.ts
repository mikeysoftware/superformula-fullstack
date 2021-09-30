import { User } from "../../graphql/schema.types";

export interface UserCardProps {
    user?: User;
}

export interface ContainerProps {
    isHovered: boolean;
}

export default UserCardProps;
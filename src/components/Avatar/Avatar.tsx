import styled from "styled-components";
import AvatarProps from "./Avatar.types";

// Component
export default function Avatar({ src = "https://source.unsplash.com/random/192x192", ...rest }: AvatarProps) {
  return <AvatarImage src={src} alt="user avatar" {...rest} />;
}

// Styled
const AvatarImage = styled.img<AvatarProps>`
  height: 10.5rem;
  width: 10.5rem;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.1);
`;

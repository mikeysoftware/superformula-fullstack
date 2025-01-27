import styled, { css } from "styled-components";
import AlertProps from "./Alert.types";

export default function Alert({ children, variant = "info" }: AlertProps) {
  return (
    <AlertContainer role="alert" variant={variant}>
      {children}
    </AlertContainer>
  );
}

const AlertContainer = styled.div<AlertProps>`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  line-height: 2rem;

  ${(props) =>
    props.variant === "info" &&
    css`
      color: black;
      background-color: #d4d4d4;
    `}

  ${(props) =>
    props.variant === "success" &&
    css`
      color: white;
      background-color: #10b981;
    `}

    ${(props) =>
    props.variant === "error" &&
    css`
      color: white;
      background-color: #dc2626;
    `}
`;

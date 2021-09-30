import ButtonProps from "./Button.types";
import styled, { css } from "styled-components";
import Loader from "../Loader";

export default function Button({ variant = "primary", loading, children, ...rest }: ButtonProps) {
  return (
    <ButtonWrapper variant={variant} {...rest}>
      <ButtonContainer>{loading ? <Loader /> : children}</ButtonContainer>
    </ButtonWrapper>
  );
}

// Styled
const ButtonWrapper = styled.button<ButtonProps>`
  /* Default */
  display: inline-block;
  min-height: 5.625rem;
  max-height: 5.625rem;
  min-width: 17.5rem;

  color: black;
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.875rem;

  border-width: 0.25rem;
  border-style: solid;
  border-radius: 0.5rem;
  border-color: rgba(0, 0, 0, 0.1);

  cursor: pointer;

  /* States */
  &:hover {
    border-color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
  }

  /* Primary */
  ${(props) =>
    props.variant === "primary" &&
    css`
      background: white;
    `}

  /* Secondary */
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: transparent;
    `}
`;

const ButtonContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

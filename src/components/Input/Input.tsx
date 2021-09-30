import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import styled from "styled-components";

// Interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

// Component
export default function Input({ ...rest }: InputProps) {
  return <InputWrapper {...rest} />;
}

// Styled
const InputWrapper = styled.input<InputProps>`
  /* Default */
  display: inline-block;

  height: 4rem;
  min-width: 25rem;
  padding: 1rem;

  color: black;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.875rem;

  border-width: 0.125rem;
  border-style: solid;
  border-radius: 0.5rem;
  border-color: rgba(0, 0, 0, 0.1);

  ::placeholder {
    font-weight: 300;
  }

  /* States */
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.label<LabelProps>`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.375rem;

  margin-bottom: 0.5rem;
`;

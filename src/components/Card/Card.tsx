import styled from "styled-components";
import { motion } from "framer-motion";
import CardProps from "./Card.types";

// Component
export default function Card({ children, ...rest }: CardProps) {
  return (
    <CardWrapper whileHover={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} {...rest}>
      {children}
    </CardWrapper>
  );
}

// Styled
const CardWrapper = styled(motion.div)<CardProps>`
  position: relative;
  display: inline-block;
  padding: 2.5rem 2rem;
  min-width: 25rem;
  max-width: 25rem;

  border-radius: 0.5rem;
  background: white;
`;

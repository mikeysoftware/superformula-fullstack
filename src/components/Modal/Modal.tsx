import ReactDOM from "react-dom";
import { MouseEvent, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import ModalProps from "./Modal.types";

// Animations
const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const fadeUpAnimation = {
  initial: { opacity: 0, scale: 0.95, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: -8,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 16,
    transition: { duration: 0.2 },
  },
};

// Component
export default function Modal({ isModalVisible = false, onModalClose, children }: ModalProps) {
  // Close modal when OVERLAY is clicked
  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  }

  // Close modal when EXIT key is pressed
  useEffect(() => {
    function handleExitKeypress(event: any) {
      if (event?.key === "Escape") {
        onModalClose();
      }
    }
    document.addEventListener("keydown", handleExitKeypress);
    return () => {
      document.removeEventListener("keydown", handleExitKeypress);
    };
  }, [onModalClose]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isModalVisible && (
        <ModalWrapper
          role="dialog"
          aria-modal="true"
          onClick={handleOverlayClick}
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ModalContainer variants={fadeUpAnimation} initial="initial" animate="animate" exit="exit">
            {children}
          </ModalContainer>
        </ModalWrapper>
      )}
    </AnimatePresence>,
    document.body
  );
}

// Styled
const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  padding: 4rem;

  border-radius: 0.5rem;

  background-color: white;
`;

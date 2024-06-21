import styled from "styled-components";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background-color: var(--backdrop-color); */
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

function Modal({ children }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;

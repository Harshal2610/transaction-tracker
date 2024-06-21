import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.7rem;
  border: 0.5px solid black;
  border-radius: 20px;
  cursor: pointer;
  transition: all 1.2 ease-in;
  margin-top: 2rem;
  width: 10rem;

  &:hover {
    background-color: #4747474c;
  }
`;

function Button({ onOpen }) {
  return <StyledButton onClick={onOpen}>Add Trasaction</StyledButton>;
}

export default Button;

import styled from "styled-components";

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.3rem;
`;

function Stats({ children }) {
  return <StyledStats>{children}</StyledStats>;
}

export default Stats;

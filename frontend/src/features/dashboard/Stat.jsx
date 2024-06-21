import styled from "styled-components";
import { BsCurrencyRupee } from "react-icons/bs";

const StyledStat = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  row-gap: 8px;
  border: 1px solid var(--color-border-light);
  background-color: var(--color-bg-light);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Icon = styled.span`
  grid-row: 1 / span 2;

  & svg {
    font-size: 3rem;
  }
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const Amount = styled.span`
  font-size: 1.2rem;
  font-weight: 500;

  & svg {
    font-weight: 300;
  }
`;

function Stat({ icon, title, amount }) {
  return (
    <StyledStat>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Amount>
        <BsCurrencyRupee />
        {amount}
      </Amount>
    </StyledStat>
  );
}

export default Stat;

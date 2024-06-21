import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: 1px solid black;
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1.3rem;
  background-color: var(--color-bg-dark);
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-font-light);
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }

  &:hover {
    border-bottom: 1px solid var(--color-font-light);
  }
`;

function AppNav() {
  return (
    <StyledNav>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/transaction">Transaction</StyledLink>
    </StyledNav>
  );
}

export default AppNav;

import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.5rem;
`;

const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 550;
`;

const FilterButton = styled.button`
  border: none;
  padding: 0.5rem 1.2rem;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-bg-dark);
      color: var(--color-font-light);
    `}
`;

const Buttons = styled.div`
  &:first-child {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFeild = searchParams.get("filter") || "all";

  const options = [
    { value: "all", label: "All" },
    { value: "cash", label: "Cash" },
    { value: "online", label: "Online" },
  ];

  function handleSubmit(value) {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledDiv>
      <StyledSpan>Filter</StyledSpan>
      <Buttons>
        {options.map((option) => (
          <FilterButton
            key={option.label}
            onClick={() => handleSubmit(option.value)}
            active={currentFeild === option.value}
          >
            {option.label}
          </FilterButton>
        ))}
      </Buttons>
    </StyledDiv>
  );
}

export default Filter;

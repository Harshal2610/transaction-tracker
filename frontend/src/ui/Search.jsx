import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: 6rem auto 10rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.7rem;
  width: 6rem;
  font-weight: 550;
  color: var(--color-font-light);
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background-color: var(--color-bg-dark);
  cursor: pointer;
`;
const Input = styled.input`
  padding: 0.7rem;
  border: none;
  background-color: #fff;

  &:focus {
    outline: 1px solid #474747;
  }
`;
const Select = styled.select`
  border: none;
  padding: 0.7rem;
  font-weight: 550;
  color: var(--color-font-light);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--color-bg-dark);
  cursor: pointer;
`;

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectValue, setSelectValue] = useState("title");
  const [query, setQuery] = useState("");

  const placeholder =
    selectValue === "title" ? "eg. Food..." : "eg. 2024-06-17";

  function handleSubmit(e) {
    e.preventDefault();

    searchParams.set("feild", selectValue);
    setSearchParams(searchParams);
    searchParams.set("value", query);
    setSearchParams(searchParams);
    setQuery("");
  }

  // At the end i have to add a button to remove all the values in from url

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">Search</Button>
      <Input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="title">By Title</option>
        <option value="date">By Date</option>
      </Select>
    </Form>
  );
}

export default Search;

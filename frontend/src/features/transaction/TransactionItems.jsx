import { useSearchParams } from "react-router-dom";
import { useTransaction } from "../../context/TransactionContext";

import Item from "./Item";
import styled from "styled-components";
import { compareDesc } from "date-fns";

const ItemList = styled.div`
  /* margin: 1rem; */
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 75vh;
  padding: 1rem 0rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #47474718;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #47474744;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #474747ba;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 550; 
`;

function TransactionItems() {
  const { transaction, isLoading, error } = useTransaction();
  const [searchParams] = useSearchParams();
  const feild = searchParams.get("feild") || "all";
  const value = searchParams?.get("value");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Some Error occured</p>;

  // 1) Search
  let searchedTransaction;
  if (feild === "all") searchedTransaction = transaction;
  if (feild === "title")
    searchedTransaction = transaction.filter(
      (trans) => trans.title.toLowerCase() === value.toLowerCase()
    );
  if (feild === "date")
    searchedTransaction = transaction.filter((trans) => trans.date === value);

  // 2) Filter
  const filterValue = searchParams.get("filter") || "all";

  let filteredTransaction;
  if (filterValue === "all") filteredTransaction = searchedTransaction;
  if (filterValue === "cash")
    filteredTransaction = searchedTransaction.filter(
      (trans) => trans.method === "cash"
    );
  if (filterValue === "online")
    filteredTransaction = searchedTransaction.filter(
      (trans) => trans.method === "online"
    );

  // 3) Sort
  let sortedTransaction = filteredTransaction.sort((a, b) =>
    compareDesc(a.date, b.date)
  );

  if (sortedTransaction.length === 0)
    return (
      <ItemList>
        <Message>Add Transactions</Message>
      </ItemList>
    );
  // console.log(sortedTransaction);
  return (
    <ItemList>
      {sortedTransaction.map((trans) => (
        <Item key={trans.id} trans={trans} />
      ))}
    </ItemList>
  );
}

export default TransactionItems;

import styled from "styled-components";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { format, parseISO } from "date-fns";
import { useDeleteTransaction } from "./useDeleteTransaction";

const StyledItem = styled.div`
  padding: 0.9rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 3fr 0.9fr 2rem;
  grid-template-rows: 1fr 1fr;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 20px 20px -20px;
`;

const Name = styled.span`
  font-weight: 550;
`;

const Amount = styled.span`
  font-size: 1.2rem;
  margin-top: 0.4rem;
  color: black;
`;

const Tag = styled.span`
  font-size: 2rem;
  font-weight: 600;
  grid-row: 1 / span 2;

  & svg {
    font-size: 2rem;
    margin-top: 1.3rem;
  }
`;
const Date = styled.span`
  font-size: 1.2rem;
`;

const Description = styled.span`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #00000086;
  border-radius: 50%;

  &:hover {
    background-color: #00000029;
    color: #000000;
  }
`;

function Item({ trans }) {
  const { deleteTransaction, isDeleting } = useDeleteTransaction();

  function handleDelete() {
    deleteTransaction(trans._id);
  }

  return (
    <StyledItem>
      <Tag>
        {trans.method === "online" ? (
          <IoPhonePortraitOutline />
        ) : (
          <BsCashCoin />
        )}
      </Tag>
      <Name>{trans.title}</Name>
      <Amount>{trans.amount} Rs.</Amount>
      <Button onClick={handleDelete}>&times;</Button>
      <Description>{trans.description.slice(0, 35)}</Description>
      <Date>{format(parseISO(trans.date), "MMM d")}</Date>
    </StyledItem>
  );
}

export default Item;

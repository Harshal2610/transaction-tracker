import styled from "styled-components";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { format, parseISO } from "date-fns";

const StyledItem = styled.div`
  padding: 0.9rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  /* border: 1px solid #00000055; */
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.096) 0px 4px 5px 0px;
  /* box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px; */
`;

const Name = styled.span`
  font-weight: 500;
`;

const Amount = styled.span`
  font-size: 1.2rem;
  margin-top: 0.4rem;
  color: black;
`;

const Tag = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
`;

function ExpesiveItem({ trans }) {
  return (
    <StyledItem>
      <Name>{trans.title}</Name>
      <Amount>{trans.amount} Rs.</Amount>
      <Tag>
        {trans.method === "online" ? (
          <IoPhonePortraitOutline />
        ) : (
          <BsCashCoin />
        )}
      </Tag>
      {/* <p>{format(parseISO(trans.date), "MMM d")}</p> */}
    </StyledItem>
  );
}

export default ExpesiveItem;

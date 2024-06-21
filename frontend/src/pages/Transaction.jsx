import styled from "styled-components";
import TransactionItems from "../features/transaction/TransactionItems";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";
import CreateTranForm from "../features/transaction/CreateTranForm";
import Search from "../ui/Search";
import Filter from "../ui/Filter";
import Sort from "../ui/Sort";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 2rem; */
`;

const OptionDiv = styled.div`
  margin: 7rem 0rem;
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 2rem;
`;

const TransactionDiv = styled.div`
  max-width: 40rem;
  margin: 2rem 5rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

function Transaction() {
  const [openModal, setOpenModal] = useState(false);
  function handelOpen() {
    setOpenModal((open) => !open);
  }

  // const date = new Date().toLocaleString("en-IN");
  // console.log(date);

  return (
    <Section>
      <TransactionDiv>
        <TransactionItems />
        <Button onOpen={handelOpen} />
      </TransactionDiv>
      <OptionDiv>
        <Search />
        <Filter />
        {/* <Sort /> */}
      </OptionDiv>
      {openModal && (
        <Modal>
          <CreateTranForm onClose={handelOpen} />
        </Modal>
      )}
    </Section>
  );
}

export default Transaction;

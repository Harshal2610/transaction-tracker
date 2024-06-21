import styled from "styled-components";
import ExpesiveItem from "./ExpesiveItem";

const Section = styled.section`
  border: 1px solid var(--color-border-light);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
`;

function ExpensiveList({ transaction }) {
  const expensiveTrans = transaction
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6);

  console.log(expensiveTrans);
  return (
    <Section>
      <Heading>Expensive transactions</Heading>
      <List>
        {expensiveTrans.map((trans) => (
          <ExpesiveItem trans={trans} key={trans.id} />
        ))}
      </List>
    </Section>
  );
}

export default ExpensiveList;

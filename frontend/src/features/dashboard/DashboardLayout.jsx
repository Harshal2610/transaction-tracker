import styled from "styled-components";
import { useTransaction } from "../../context/TransactionContext";
import Stats from "./Stats";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GrCurrency } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";
import Stat from "./Stat";
import TransChart from "./TransChart";
import ExpensiveList from "./ExpensiveList";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 3rem;
  margin: 1rem;
  padding: 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function DashboardLayout() {
  const { transaction, isLoading } = useTransaction();
  const month = new Date().getMonth();

  if (isLoading) return <p>Loading...</p>;

  const transThisMonth = transaction.filter(
    (trans) => new Date(trans.date).getMonth() === month
  );

  const totalSpending = transThisMonth.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );

  const cashSpendingArray = transThisMonth.filter(
    (trans) => trans.method === "cash"
  );

  const cashSpending = cashSpendingArray.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );

  const onlineSpendingArray = transThisMonth.filter(
    (trans) => trans.method === "online"
  );

  const onlineSpending = onlineSpendingArray.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );

  return (
    <StyledDashboardLayout>
      <Section>
        <Stats>
          <Stat
            icon={<GrCurrency />}
            title="Total spendings"
            amount={totalSpending}
          />
          <Stat
            icon={<IoPhonePortraitOutline />}
            title="Online spending"
            amount={onlineSpending}
          />
          <Stat
            icon={<BsCashCoin />}
            title="Cash spending"
            amount={cashSpending}
          />
        </Stats>
        <TransChart
          cashArray={cashSpendingArray}
          onlineArray={onlineSpendingArray}
        />
      </Section>
      <ExpensiveList transaction={transThisMonth} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

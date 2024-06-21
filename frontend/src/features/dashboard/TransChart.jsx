import {
  eachDayOfInterval,
  format,
  formatDate,
  isSameDay,
  subDays,
} from "date-fns";
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const Heading = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  font-weight: 500;
`;

function TransChart({ cashArray, onlineArray }) {
  // for the last 30 days
  //   const allDates = eachDayOfInterval({
  //     start: subDays(new Date(), 30 - 1),
  //     end: new Date(),
  //   });

  const m = new Date().getMonth();
  const month = m > 9 ? m + 1 : `0${m + 1}`;

  // Days of this month
  const allDates = eachDayOfInterval({
    start: new Date(`2024-${month}-02`),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: formatDate(date, "MMM dd"),
      cashSpending: cashArray
        .filter((trans) => isSameDay(date, new Date(trans.date)))
        .reduce((acc, cur) => acc + cur.amount, 0),
      onlineSpending: onlineArray
        .filter((trans) => isSameDay(date, new Date(trans.date)))
        .reduce((acc, cur) => acc + cur.amount, 0),
    };
  });

  console.log(data);
  return (
    <div>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" tick="#474747" tickLine="#474747" />
          <YAxis unit="Rs." tick="#474747" tickLine="#474747" />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip />
          <Area
            dataKey="cashSpending"
            type="monotone"
            name="Cash Spending"
            fill="#474747"
            stroke="#474747"
            unit="Rs."
          />
          <Area
            dataKey="onlineSpending"
            type="monotone"
            name="Online Speding"
            fill="#e9dde0"
            stroke="#474747"
            unit="Rs."
          />
        </AreaChart>
      </ResponsiveContainer>
      <Heading>Transactions of {format(new Date(month), "MMMM")}</Heading>
    </div>
  );
}

export default TransChart;

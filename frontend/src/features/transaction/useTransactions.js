import { useQuery } from "@tanstack/react-query";

async function fetchTransaction() {
  const res = await fetch("/api/v1/transactions");
  const data = await res.json();
  return data.data.transactions;
}

function useTransactions() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransaction,
  });

  return { data, isLoading, error };
}

export default useTransactions;

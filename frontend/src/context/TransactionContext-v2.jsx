import { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext();

function TransactionProvider({ children }) {
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchTransaction() {
    try {
      setIsLoading(true);
      const res = await fetch("/api/v1/transactions");
      const data = await res.json();
      setTransaction(data.data.transactions);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{ transaction, isLoading, error }}>
      {children}
    </TransactionContext.Provider>
  );
}

function useTransaction() {
  const context = useContext(TransactionContext);
  if (context === undefined)
    throw new Error("Dark mode was used outside of the context");
  return context;
}

export { TransactionProvider, useTransaction };

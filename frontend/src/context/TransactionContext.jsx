import { createContext, useContext, useEffect, useState } from "react";
import useTransactions from "../features/transaction/useTransactions";

const TransactionContext = createContext();

function TransactionProvider({ children }) {
  const { data: transaction, isLoading, error } = useTransactions();
  // setTransaction(data);

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

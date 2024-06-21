import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import GlobalStyles from "./GlobalStyles";
import AppLayout from "./pages/AppLayout";
import { TransactionProvider } from "./context/TransactionContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <TransactionProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="dashboard" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            duration: 5000,
            success: {
              duration: 2000,
            },
            style: {
              fontSize: "20px",
              padding: "16px 20px",
              backgroundColor: "#fffffffef",
              color: "#4747478",
              maxWidth: "500px",
            },
          }}
        />
      </TransactionProvider>
    </QueryClientProvider>
  );
}

export default App;

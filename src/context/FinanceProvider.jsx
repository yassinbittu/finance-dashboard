import { useState, useEffect } from "react";
import { FinanceContext } from "./FinanceContext";
import { transactionsData } from "../data/transactions";

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : transactionsData;
      } catch (error) {
        console.warn("Invalid transactions in localStorage, resetting to defaults", error);
        localStorage.removeItem("transactions");
        return transactionsData;
      }
    }
    return transactionsData;
  });

  const [role, setRole] = useState("viewer");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <FinanceContext.Provider
      value={{ transactions, role, setRole, addTransaction }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
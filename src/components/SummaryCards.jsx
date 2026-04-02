import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const SummaryCards = () => {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="dashboard-card bg-primary text-white">
        <p className="text-sm opacity-90">Balance</p>
        <h2 className="text-2xl font-bold">₹ {balance}</h2>
      </div>

      <div className="dashboard-card bg-success text-white">
        <p className="text-sm opacity-90">Income</p>
        <h2 className="text-2xl font-bold">₹ {income}</h2>
      </div>

      <div className="dashboard-card bg-danger text-white">
        <p className="text-sm opacity-90">Expenses</p>
        <h2 className="text-2xl font-bold">₹ {expense}</h2>
      </div>
    </div>
  );
};

export default SummaryCards;
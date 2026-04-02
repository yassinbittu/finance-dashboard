import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Insights = () => {
  const { transactions } = useContext(FinanceContext);

  const expenses = transactions.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);

  const categoryTotals = {};
  expenses.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    Object.keys(categoryTotals)[0]
  );

  return (
    <div className="dashboard-card bg-bg-card text-text-main">
      <h2 className="font-semibold">Insights</h2>
      <p>Total Expenses: ₹ {totalExpense}</p>
      <p>Highest Spending Category: {highestCategory}</p>
    </div>
  );
};

export default Insights;
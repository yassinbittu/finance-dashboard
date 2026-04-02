import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const Charts = () => {
  const { transactions } = useContext(FinanceContext);

  const expenseData = transactions.filter((t) => t.type === "expense");

  const categoryData = Object.values(
    expenseData.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { name: curr.category, value: 0 };
      }
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* Line Chart */}
      <div className="dashboard-card bg-bg-card text-text-main">
        <h3 className="mb-2 font-semibold">Expenses Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={expenseData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="dashboard-card bg-bg-card text-text-main">
        <h3 className="mb-2 font-semibold">Category Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;
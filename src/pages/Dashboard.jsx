import RoleSwitcher from "../components/RoleSwitcher";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import TransactionsTable from "../components/TransactionsTable";
import Insights from "../components/Insights";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-bg-page text-text-main animate-fade-in">
      {/* Header */}
      <div className="dashboard-header text-2xl font-bold tracking-wide"> 
        Finance Dashboard
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <RoleSwitcher />
        <SummaryCards />
        <Charts />
        <TransactionsTable />
        <Insights />
      </div>

    </div>
  );
};

export default Dashboard;
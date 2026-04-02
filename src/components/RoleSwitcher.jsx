import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="dashboard-card bg-primary text-white flex justify-between items-center">
      <h2 className="font-semibold">User Role</h2>
      <select
        className="border p-2"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
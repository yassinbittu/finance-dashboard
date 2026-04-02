import { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

const TransactionsTable = () => {
    const { transactions, role, addTransaction } = useContext(FinanceContext);

    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [showModal, setShowModal] = useState(false);

    const [newTransaction, setNewTransaction] = useState({
        date: "",
        amount: "",
        category: "",
        type: "expense",
    });

    const handleAdd = () => {
        console.log("Adding:", newTransaction);

        addTransaction({
            id: Date.now(),
            ...newTransaction,
            amount: Number(newTransaction.amount),
        });

        setShowModal(false);
    };

    let filtered = transactions.filter((t) =>
        t.category.toLowerCase().includes(search.toLowerCase())
    );

    if (filterType !== "all") {
        filtered = filtered.filter((t) => t.type === filterType);
    }

    filtered.sort((a, b) =>
        sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
    );

    return (
        <div className="dashboard-card bg-bg-card text-text-main animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between mb-3">
                <h2 className="font-semibold">Transactions</h2>

                {role === "admin" && (
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Add Transaction
                    </button>
                )}
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-2 mb-3">
                <input
                    className="border p-2"
                    placeholder="Search category"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border p-2"
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <select
                    className="border p-2"
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Amount Asc</option>
                    <option value="desc">Amount Desc</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Amount</th>
                            <th className="border p-2">Category</th>
                            <th className="border p-2">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((t) => (
                            <tr key={t.id} className="hover:bg-slate-100 transition-colors duration-200">
                                <td className="border p-2">{t.date}</td>
                                <td className="border p-2">₹ {t.amount}</td>
                                <td className="border p-2">{t.category}</td>
                                <td className="border p-2">{t.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-45 flex justify-center items-center z-50">
                    <div className="bg-white text-slate-900 p-6 rounded-xl shadow-2xl w-80 border-2 border-indigo-300">
                        <h2 className="text-lg font-semibold mb-3 text-indigo-700">
                            Add Transaction
                        </h2>

                        <input
                            type="date"
                            className="border p-2 w-full mb-2"
                            value={newTransaction.date}
                            onChange={(e) =>
                                setNewTransaction({ ...newTransaction, date: e.target.value })
                            }
                        />

                        <input
                            type="number"
                            placeholder="Amount"
                            className="border p-2 w-full mb-2"
                            value={newTransaction.amount}
                            onChange={(e) =>
                                setNewTransaction({ ...newTransaction, amount: e.target.value })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Category"
                            className="border p-2 w-full mb-2"
                            value={newTransaction.category}
                            onChange={(e) =>
                                setNewTransaction({ ...newTransaction, category: e.target.value })
                            }
                        />

                        <select
                            className="border p-2 w-full mb-3"
                            value={newTransaction.type}
                            onChange={(e) =>
                                setNewTransaction({ ...newTransaction, type: e.target.value })
                            }
                        >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>

                        <div className="flex justify-between">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-400 text-white px-3 py-1 rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleAdd}
                                className="bg-green-500 text-white px-3 py-1 rounded"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TransactionsTable;
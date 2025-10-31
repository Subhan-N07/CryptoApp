import React from "react";

const TransactionSection = () => {
  const transactions = [
    {
      icon: "",
      text: "INR Deposit",
      amount: "+ 81,123.10",
      timeStamp: "2022-06-09  7:26 PM",
    },
    {
      icon: "",
      text: "BTC Sell",
      amount: "+ $81,123.10",
      timeStamp: "2022-05-27  12:32 PM",
    },
    {
      icon: "",
      text: "INR Deposit",
      amount: "+ 81,123.10",
      timeStamp: "2022-06-09  7:06 PM",
    },
  ];
  return (
    <div className="max-w-max w-full p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 rounded-2xl shadow-2xl mt-7 border border-gray-700 cursor-pointer ml-20">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-1">
            Recent Transactions
          </h3>
          <p className="text-xs text-gray-400">
            Latest activity on your account.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            aria-label="Filter"
            className="inline-flex items-center px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800 text-xs text-gray-200 rounded-md border border-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h18M6 12h12M10 19h4"
              />
            </svg>
            All
          </button>

          <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white rounded-md transition">
            Action
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-full">
              All
            </span>
            <span className="px-2 py-1 bg-gray-800/30 border border-gray-700 rounded-full">
              Deposits
            </span>
            <span className="px-2 py-1 bg-gray-800/30 border border-gray-700 rounded-full">
              Withdrawals
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="search"
              placeholder="Search"
              className="px-2 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button
              className="p-2 bg-gray-800/40 hover:bg-gray-800 rounded-md text-gray-300 transition"
              aria-label="Refresh"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v6h6M20 20v-6h-6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-3 max-h-64 overflow-y-auto pr-2">
        {transactions.map((tx, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between p-3 bg-gray-900/30 rounded-md border border-gray-700 hover:bg-gray-900/50 transition"
          >
            <div className="flex items-center">
              <div className="flex-none w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center mr-3 border border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 7h18M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3v4M8 3v4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-100 truncate">
                  {tx.text}
                </div>
                <div className="text-xs text-gray-400 truncate">
                  {tx.timeStamp}
                </div>
              </div>
            </div>

            <div className="ml-4 text-right">
              <div
                className={`text-sm font-semibold ${
                  tx.amount.includes("+") ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.amount}
              </div>
              <div className="text-xs text-gray-500">
                Status: <span className="text-gray-300">Completed</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
        <div className="text-xs text-gray-400">
          Showing {transactions.length} transactions
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-xs bg-gray-800/50 hover:bg-gray-800 rounded-md border border-gray-700 text-gray-200">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionSection;

import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

// Utility function to format numbers as currency (e.g., $65,123.45)
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Utility function to format large numbers (e.g., $1.28T)
const formatMarketCap = (cap) => {
  if (cap >= 1e12) return "$" + (cap / 1e12).toFixed(2) + "T";
  if (cap >= 1e9) return "$" + (cap / 1e9).toFixed(2) + "B";
  return formatCurrency(cap);
};

const CryptoTable = () => {
  const dummyCryptoData = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      price: 65123.45,
      marketCap: 1280000000000,
      change24h: 3.52,
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      price: 3876.91,
      marketCap: 460000000000,
      change24h: -1.89,
    },
    {
      id: "tether",
      name: "Tether",
      symbol: "USDT",
      price: 1.0,
      marketCap: 110000000000,
      change24h: 0.0,
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      price: 155.78,
      marketCap: 70000000000,
      change24h: 8.15,
    },
    {
      id: "ripple",
      name: "Ripple",
      symbol: "XRP",
      price: 0.52,
      marketCap: 28000000000,
      change24h: -0.45,
    },
    {
      id: "dogecoin",
      name: "Dogecoin",
      symbol: "DOGE",
      price: 0.15,
      marketCap: 21000000000,
      change24h: 12.01,
    },
    // New entries added below
    {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      price: 0.78,
      marketCap: 27500000000,
      change24h: 0.95,
    },
    {
      id: "polkadot",
      name: "Polkadot",
      symbol: "DOT",
      price: 8.42,
      marketCap: 12500000000,
      change24h: -3.11,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-shadow-white">
          Crypto Transaction
        </h2>
        <button className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
          Exports CSV
          <AiOutlineDownload className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>

          <tbody className="bg-black divide-y divide-gray-100">
            {dummyCryptoData.map((crypto, index) => {
              const isPositive = crypto.change24h > 0;
              const changeClass = isPositive
                ? "text-green-500"
                : crypto.change24h < 0
                ? "text-red-500"
                : "text-gray-500";

              return (
                <tr key={crypto.id} className="hover:bg-emerald-950 ">
                  <td className="px-4 py-3 text-sm text-white">{index + 1}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-white">
                        {crypto.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({crypto.symbol})
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-green-400">
                    {formatCurrency(crypto.price)}
                  </td>
                  <td
                    className={`px-4 py-3 text-sm text-right font-semibold ${changeClass}`}
                  >
                    {isPositive ? "▲ " : crypto.change24h < 0 ? "▼ " : ""}
                    {crypto.change24h.toFixed(2)}%
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-green-500">
                    {formatMarketCap(crypto.marketCap)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;

// --- Simple Inline Styles for Clarity ---

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  overflow: "hidden",
};

const headerStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "12px",
  textAlign: "left",
  borderBottom: "2px solid #555",
};

const cellStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const rowStyle = {
  backgroundColor: "white",
  transition: "background-color 0.2s",
};
// Note: A real implementation would use CSS for hover effects (e.g., .row:hover { background-color: #f5f5f5; })

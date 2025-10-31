import React from "react";
import Sidenav from "../../components/Sidenav";
import { AiOutlineDownload } from "react-icons/ai";

import Table from "./Components/Table";

const Transaction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-emerald-800 to-black text-slate-50 flex">
      <div className="w-20 md:w-64 bg-emerald-900/20">
        <Sidenav />
      </div>

      <main className="flex-1 p-6">
        <header className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-emerald-50">
              Transactions &amp; Crypto Update
            </h1>
            <p className="text-emerald-100 mt-1">
              Latest activity, balances and recent trades
            </p>

            <div className="mt-4 flex flex-wrap gap-3 ">
              <div className="bg-white/10 px-4 py-2 rounded-lg shadow-md cursor-pointer">
                <div className="text-sm text-emerald-200">Balance</div>
                <div className="mt-1 font-semibold text-lg text-white">
                  0.752 BTC
                </div>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg shadow-md cursor-pointer">
                <div className="text-sm text-emerald-200">24h Volume</div>
                <div className="mt-1 font-semibold text-lg text-white">
                  ≈ $12,430
                </div>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg shadow-md cursor-pointer">
                <div className="text-sm text-emerald-200">New Trades</div>
                <div className="mt-1 font-semibold text-lg text-white">8</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-white/8 rounded-lg px-3 py-2">
              <input
                className="bg-transparent outline-none text-emerald-50 placeholder-emerald-100"
                placeholder="Search transactions..."
              />
            </div>

            <button
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 transition text-white px-4 py-2 rounded-lg shadow-md"
              title="Download CSV"
            >
              <AiOutlineDownload size={18} />
              Download
            </button>
          </div>
        </header>

        <section className="mt-6 space-y-4">
          <div className="cursor-pointer">
            <Table />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Transaction;

// className="bg-white/8 backdrop-blur-sm rounded-xl p-4 shadow-2xl"

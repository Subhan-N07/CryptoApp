import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import Tab from "./Tab";

const PriceSection = () => {
  return (
    <div className="flex gap-6 px-4">
      {/* Main Wallet Card */}
      <div className="max-w-md w-full p-6 bg-gray-900 text-gray-100 rounded-2xl shadow-xl mt-7 border border-gray-800">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm text-gray-300 font-medium">
              Wallet Balances
            </h3>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-semibold text-white">
                22.39401000
              </span>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <BsArrowUpRight className="text-lg" />
                <span className="font-medium">22%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <AiFillPlusCircle className="text-green-400 text-xl" />
              <button className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 rounded-md text-xs font-semibold">
                BUY
              </button>
            </div>
            <div className="flex items-center gap-2">
              <AiFillMinusCircle className="text-red-400 text-xl" />
              <button className="px-3 py-1 bg-gray-800/60 hover:bg-gray-800 rounded-md text-xs font-medium border border-gray-700">
                Sell
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Tab />
        </div>

        <div className="mt-6">
          <img
            src="graph.svg"
            alt="price graph"
            className="w-full rounded-lg shadow-sm filter brightness-90"
          />
        </div>

        <div className="mt-5 flex items-center gap-12 text-xs text-gray-400">
          <p>7:15PM</p>
          <p>8:45PM</p>
          <p>9:20PM</p>
          <p>10:05PM</p>
          <p>11:55PM</p>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;

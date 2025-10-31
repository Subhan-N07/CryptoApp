import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    // <div class="flex items-center bg-red-500 rounded-xl p-6 justify-between ">
    //   <div>
    //     <div class="flex items-center gap-2 text-xl">
    //       Total Portfolio Value
    //       <AiOutlineInfoCircle />
    //     </div>
    //     <span className="text-2xl">$ 112,312.24</span>
    //   </div>

    //   <div className="ml-7">
    //     <div class="flex items-center gap-2 text-xl">Wallet Balance</div>
    //     <span className="text-2xl">22.39401000</span>
    //     <span>BTC</span>
    //   </div>

    //   <div className="ml-2">
    //     <div class="flex items-center gap-2 text-xl">Currency Value</div>
    //     <span className="text-2xl">1,300.0 INR</span>
    //     <span>Dollar</span>
    //   </div>

    //   <div className="ml-10 flex gap-7">
    //     <button className="cursor-pointer bg-purple-900">Deposit</button>
    //     <button className="cursor-pointer bg-purple-900">Withdraw</button>
    //   </div>
    // </div>

    // <div class="flex items-center bg-emerald-600 rounded-xl p-6 justify-between text-white shadow-2xl shadow-emerald-900/50">
    //   <div>
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Total Portfolio Value
    //       <AiOutlineInfoCircle />
    //     </div>
    //     <span className="text-3xl font-bold">$ 112,312.24</span>
    //   </div>

    //   <div className="ml-7">
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Wallet Balance
    //     </div>
    //     <span className="text-3xl font-bold">22.39401000</span>
    //     <span className="text-xl font-medium ml-1">BTC</span>
    //   </div>

    //   <div className="ml-2">
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Currency Value
    //     </div>
    //     <span className="text-3xl font-bold">1,300.0</span>
    //     <span className="text-xl font-medium ml-1">INR</span>
    //   </div>

    //   <div className="ml-10 flex gap-7">
    //     <button className="cursor-pointer bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out shadow-lg shadow-emerald-900/50">
    //       Deposit
    //     </button>
    //     <button className="cursor-pointer bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out shadow-lg shadow-emerald-900/50">
    //       Withdraw
    //     </button>
    //   </div>
    // </div>

    // <div class="flex items-center bg-emerald-700 rounded-xl p-6 justify-between text-white shadow-2xl shadow-emerald-900/75">
    //   <div>
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Total Portfolio Value
    //       <AiOutlineInfoCircle />
    //     </div>
    //     <span className="text-3xl font-bold">$ 112,312.24</span>
    //   </div>

    //   <div className="ml-7">
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Wallet Balance
    //     </div>
    //     <span className="text-3xl font-bold">22.39401000</span>
    //     <span className="text-xl font-medium ml-1">BTC</span>
    //   </div>

    //   <div className="ml-2">
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Currency Value
    //     </div>
    //     <span className="text-3xl font-bold">1,300.0</span>
    //     <span className="text-xl font-medium ml-1">INR</span>
    //   </div>

    //   <div className="ml-10 flex gap-4">
    //     <button className="cursor-pointer bg-white text-emerald-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-emerald-50 transition duration-300 ease-in-out transform hover:scale-105">
    //       Deposit
    //     </button>
    //     <button className="cursor-pointer bg-emerald-900 text-white font-bold py-3 px-8 rounded-full border-2 border-emerald-900 shadow-lg hover:shadow-xl hover:bg-emerald-800 transition duration-300 ease-in-out transform hover:scale-105">
    //       Withdraw
    //     </button>
    //   </div>
    // </div>

    // <div class="flex items-center bg-emerald-700 rounded-xl p-6 justify-between text-white shadow-2xl shadow-emerald-900/75">
    //   <div>
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Total Portfolio Value
    //       <AiOutlineInfoCircle />
    //     </div>
    //     <span className="text-3xl font-bold">$ 112,312.24</span>
    //   </div>

    //   <div className="ml-7">
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Wallet Balance
    //     </div>
    //     <span className="text-3xl font-bold">22.39401000</span>
    //     <span className="text-xl font-medium ml-1">BTC</span>
    //   </div>

    //   <div className="ml-2">
    //     <div class="flex items-center gap-2 text-xl font-medium opacity-85">
    //       Currency Value
    //     </div>
    //     <span className="text-3xl font-bold">1,300.0</span>
    //     <span className="text-xl font-medium ml-1">INR</span>
    //   </div>

    //   <div className="ml-10 flex gap-4">
    //     <button className="cursor-pointer bg-white text-emerald-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-emerald-50 transition duration-300 ease-in-out transform hover:scale-105">
    //       Deposit
    //     </button>

    //     <button className="cursor-pointer bg-emerald-900 text-white font-bold py-3 px-8 rounded-full border-2 border-emerald-900 shadow-lg hover:shadow-xl hover:bg-emerald-800 transition duration-300 ease-in-out transform hover:scale-105">
    //       Withdraw
    //     </button>
    //   </div>
    // </div>

    <div
      class="relative flex flex-col md:flex-row items-start md:items-center bg-emerald-900 rounded-xl p-6 sm:p-8 justify-start md:justify-between text-white shadow-2xl shadow-emerald-700/70
            border-2 border-emerald-500 overflow-hidden space-y-4 md:space-y-0
            transition-all duration-500 ease-in-out
            hover:shadow-emerald-400/80 hover:scale-[1.01] hover:border-emerald-300
            "
    >
      <div
        class="absolute inset-0 rounded-xl pointer-events-none
              before:content-[''] before:absolute before:inset-0 before:rounded-xl
              before:border-2 before:border-transparent
              before:shadow-[0_0_15px_rgba(16,_185,_129,_0.8),_0_0_30px_rgba(52,_211,_153,_0.6)]
              before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
      ></div>

      <div class="z-10">
        <div class="flex items-center gap-2 text-base sm:text-xl font-medium opacity-85">
          Total Portfolio Value
          <AiOutlineInfoCircle class="text-emerald-300" />
        </div>
        <span className="text-3xl sm:text-4xl font-extrabold text-emerald-300 tracking-wide">
          $ 112,312.24
        </span>
      </div>

      <div className="z-10 ml-0 mt-3 md:mt-0 md:ml-7">
        <div class="flex items-center gap-2 text-base sm:text-xl font-medium opacity-85">
          Wallet Balance
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-emerald-300">
          22.39401000
        </span>
        <span className="text-base sm:text-xl font-medium ml-1 text-emerald-400">
          BTC
        </span>
      </div>

      <div className="z-10 ml-0 mt-3 md:mt-0 md:ml-2">
        <div class="flex items-center gap-2 text-base sm:text-xl font-medium opacity-85">
          Currency Value
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-emerald-300">
          1,300.0
        </span>
        <span className="text-base sm:text-xl font-medium ml-1 text-emerald-400">
          INR
        </span>
      </div>

      <div className="z-10 flex flex-row ml-0 mt-5 md:mt-0 md:ml-10 md:flex-row gap-4">
        <button
          className="cursor-pointer bg-emerald-500 text-emerald-900 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:shadow-xl
                        hover:bg-emerald-300 transition duration-300 ease-in-out transform hover:scale-105
                        active:scale-95 border-2 border-emerald-500 hover:border-emerald-300"
        >
          Deposit
        </button>

        <button
          className="cursor-pointer bg-emerald-900 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full border-2 border-emerald-500 shadow-lg hover:shadow-xl
                        hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-105
                        active:scale-95"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;

// stack display flex , flex dir colmn   hstack display flx align item center

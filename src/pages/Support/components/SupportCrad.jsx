import React from "react";
import { IoMdMail } from "react-icons/io";
import Contactform from "./Contactform";
const SupportCrad = () => {
  return (
    <section className="max-w-4xl mx-auto mt-5 px-4 py-4 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-800 to-black shadow-2xl border border-indigo-700/30 text-slate-100 h-[110vh] cursor-pointer">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-3 p-3">
          <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-emerald-400 text-black px-3 py-2 rounded-full shadow-md">
            <IoMdMail className="w-6 h-4" />
            <span className="font-medium">Contact Us</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            Get in touch with CryptoTrade
          </h2>
          <p className="text-slate-300 text-sm">
            Have a question or want to learn more about our crypto features?
            Reach out — we&apos;re fast, secure, and available 24/7.
          </p>
          <ul className="flex gap-2 mt-1">
            <li className="px-3 py-1 text-sm rounded-md bg-indigo-700/40">
              Secure
            </li>
            <li className="px-3 py-1 text-sm rounded-md bg-emerald-700/30">
              Fast
            </li>
            <li className="px-3 py-1 text-sm rounded-md bg-violet-700/30">
              24/7
            </li>
          </ul>
          <div className="mt-3 text-sm text-slate-400">
            <span className="inline-block bg-white/5 px-2 py-1 rounded">
              Blockchain-powered
            </span>
          </div>
        </div>

        <div className="md:w-1/2 bg-white/5 backdrop-blur-sm rounded-xl p-3 shadow-inner border border-white/5 mt-4">
          <Contactform />
        </div>
      </div>
    </section>
  );
};

export default SupportCrad;

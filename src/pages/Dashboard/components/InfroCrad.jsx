import React from "react";

const InfroCrad = ({ imgurl }) => {
  const bgStyle = imgurl
    ? { backgroundImage: `url(${imgurl})` }
    : {
        background:
          "linear-gradient(135deg, #020617 0%, #071028 50%, #061422 100%)",
      };

  return (
    <div className="flex">
      <div
        className="max-w-md w-full h-28 rounded-lg overflow-hidden relative mt-6 ml-4 shadow-2xl ring-1 ring-white/5 border border-white/5"
        style={bgStyle}
        role="region"
        aria-label="Market pulse card"
      >
        {/* dark smoky overlay with subtle neon streak */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/10 to-transparent mix-blend-screen pointer-events-none" />

        <div className="relative z-10 flex items-center h-full px-4 gap-4">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-[#021526] to-[#071827] border border-cyan-800/40 flex items-center justify-center"
            style={{ boxShadow: "0 6px 18px rgba(6,182,212,0.06)" }}
          >
            {/* coin + rising sparkline icon with neon tint */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.35))" }}
            >
              <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
              <path
                d="M8.5 14.5l1.5-2 2 1.5 2.5-4 1.5 2.5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-cyan-200 text-lg font-semibold">
              Market Pulse
            </h3>
            <p className="text-gray-300/70 text-sm mt-1">
              Real-time crypto market insights and trending movements.
            </p>
          </div>

          <button
            className="ml-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 transition-colors text-black text-sm font-semibold rounded-md shadow-md ring-1 ring-white/10"
            aria-label="View market"
          >
            View
          </button>
        </div>
      </div>

      <div
        className="max-w-md w-full h-28 rounded-lg overflow-hidden relative mt-6 ml-26 shadow-2xl ring-1 ring-white/5 border border-white/5 "
        style={bgStyle}
        role="region"
        aria-label="Contact INFO"
      >
        {/* dark smoky overlay with subtle neon streak */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/10 to-transparent mix-blend-screen pointer-events-none" />

        <div className="relative z-10 flex items-center h-full px-4 gap-4">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-[#021526] to-[#071827] border border-cyan-800/40 flex items-center justify-center"
            style={{ boxShadow: "0 6px 18px rgba(6,182,212,0.06)" }}
          >
            {/* coin + rising sparkline icon with neon tint */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.35))" }}
            >
              <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
              <path
                d="M8.5 14.5l1.5-2 2 1.5 2.5-4 1.5 2.5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-cyan-200 text-lg font-semibold">Contact</h3>
            <p className="text-gray-300/70 text-sm mt-1">
              Learn more about real estate, mortgage, and corporate account
              services.
            </p>
          </div>

          <button
            className="ml-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 transition-colors text-black text-sm font-semibold rounded-md shadow-md ring-1 ring-white/10"
            aria-label="View market"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfroCrad;

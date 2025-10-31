// import React from "react";
// import { FaUser as FaUserIcon } from "react-icons/fa";

// const Topnav = ({ title }) => {
//   const [open, setOpen] = React.useState(false);
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     const onDocClick = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   const items = ["Overview", "Portfolio", "Markets", "Settings", "Logout"];

//   return (
//     <div className="flex items-center justify-between shadow-md px-4 h-16">
//       <div className="flex items-center gap-3">
//         <h1 className="m-0 text-lg font-semibold truncate">{title}</h1>
//       </div>

//       <div ref={ref} className="relative">
//         {/* Desktop / tablet button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           aria-haspopup="true"
//           aria-expanded={open}
//           aria-label="Open menu"
//           className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 focus:outline-none"
//         >
//           <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
//             <FaUserIcon className="w-4 h-4 text-gray-700" />
//           </div>
//           <span className="hidden md:inline text-sm font-medium">Menu</span>
//         </button>

//         {/* Mobile button (hamburger) */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           aria-haspopup="true"
//           aria-expanded={open}
//           className="sm:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//           >
//             <path
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop dropdown */}
//         {open && (
//           <ul className="hidden sm:block absolute right-0 mt-2 list-none m-0 p-1 bg-white rounded shadow-lg min-w-[160px] z-50">
//             {items.map((it) => (
//               <li
//                 key={it}
//                 className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                 onClick={() => setOpen(false)}
//               >
//                 {it}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Mobile full-width panel */}
//         {open && (
//           <div className="sm:hidden fixed inset-0 z-40">
//             {/* backdrop */}
//             <div
//               className="absolute inset-0 bg-black/40"
//               onClick={() => setOpen(false)}
//             />
//             {/* sliding panel from top (below nav) */}
//             <div className="absolute top-16 right-0 w-full bg-white p-3 shadow-lg">
//               <ul className="list-none m-0 p-0">
//                 {items.map((it) => (
//                   <li
//                     key={it}
//                     className="px-4 py-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
//                     onClick={() => setOpen(false)}
//                   >
//                     {it}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Topnav;

// import React from "react";
// import { FaUser as FaUserIcon } from "react-icons/fa";

// const Topnav = ({ title }) => {
//   const [open, setOpen] = React.useState(false);
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     const onDocClick = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   const items = ["Overview", "Portfolio", "Markets", "Settings", "Logout"];

//   return (
//     <div className="flex items-center justify-between bg-gray-900 px-4 sm:px-6 md:px-8 h-16 shadow-md">
//       <div className="flex items-center gap-3">
//         <h1 className="text-base sm:text-lg md:text-xl font-semibold text-emerald-400 tracking-wide truncate">
//           {title}
//         </h1>
//       </div>

//       <div ref={ref} className="relative">
//         {/* Desktop / tablet button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           aria-haspopup="true"
//           aria-expanded={open}
//           aria-label="Open menu"
//           className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-emerald-600/10 transition-all duration-200"
//         >
//           <div className="w-9 h-9 rounded-full bg-emerald-600/20 flex items-center justify-center">
//             <FaUserIcon className="w-4 h-4 text-emerald-400" />
//           </div>
//           <span className="hidden md:inline text-sm font-medium text-white">
//             Menu
//           </span>
//         </button>

//         {/* Mobile hamburger */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           aria-haspopup="true"
//           aria-expanded={open}
//           className="sm:hidden p-2 rounded hover:bg-emerald-600/10 transition"
//         >
//           <svg
//             className="w-6 h-6 text-emerald-400"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//           >
//             <path
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop dropdown */}
//         {open && (
//           <ul className="hidden sm:block absolute right-0 mt-2 list-none bg-gray-800 rounded-lg shadow-lg min-w-[180px] z-50 border border-emerald-700/30 transition-all duration-200">
//             {items.map((it) => (
//               <li
//                 key={it}
//                 className="px-4 py-2 cursor-pointer text-white hover:bg-emerald-600/20 transition"
//                 onClick={() => setOpen(false)}
//               >
//                 {it}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Mobile full-screen panel */}
//         {open && (
//           <div className="sm:hidden fixed inset-0 z-40">
//             {/* Backdrop */}
//             <div
//               className="absolute inset-0 bg-black/60"
//               onClick={() => setOpen(false)}
//             />
//             {/* Slide-down panel */}
//             <div className="absolute top-16 right-0 w-full bg-gray-900 p-4 shadow-lg border-t border-emerald-600/30 transition-all duration-300">
//               <ul className="list-none p-0">
//                 {items.map((it) => (
//                   <li
//                     key={it}
//                     className="px-4 py-3 border-b border-gray-700 text-white cursor-pointer hover:bg-emerald-600/20 transition"
//                     onClick={() => setOpen(false)}
//                   >
//                     {it}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Topnav;

// import React from "react";
// import { FaUser as FaUserIcon } from "react-icons/fa";

// const Topnav = ({ title }) => {
//   const [open, setOpen] = React.useState(false);
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     const onDocClick = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   const items = ["Overview", "Portfolio", "Markets", "Settings", "Logout"];

//   return (
//     <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-16 bg-emerald-950 backdrop-blur-md border-b border-emerald-800/40 shadow-lg">
//       {/* Title */}
//       <div className="flex items-center gap-3">
//         <h1 className="text-base sm:text-lg md:text-xl font-bold text-emerald-300 tracking-wide drop-shadow-[0_0_6px_#10b981]">
//           {title}
//         </h1>
//       </div>

//       {/* User Menu */}
//       <div ref={ref} className="relative">
//         {/* Desktop Button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           aria-haspopup="true"
//           aria-expanded={open}
//           aria-label="Open menu"
//           className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-700/30 hover:bg-emerald-600/10 transition duration-200 shadow hover:shadow-emerald-500/20"
//         >
//           <div className="w-9 h-9 rounded-full bg-emerald-700/30 flex items-center justify-center shadow-inner">
//             <FaUserIcon className="w-4 h-4 text-emerald-300 drop-shadow-[0_0_4px_#10b981]" />
//           </div>
//           <span className="hidden md:inline text-sm font-medium text-white">
//             Menu
//           </span>
//         </button>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           aria-haspopup="true"
//           aria-expanded={open}
//           className="sm:hidden p-2 rounded-lg hover:bg-emerald-600/10 border border-emerald-600/30 transition"
//         >
//           <svg
//             className="w-6 h-6 text-emerald-300"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//           >
//             <path
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop Dropdown */}
//         {open && (
//           <ul className="hidden sm:block absolute right-0 mt-3 bg-emerald-900/90 backdrop-blur-md border border-emerald-700/30 rounded-xl shadow-lg min-w-[180px] z-50 animate-fadeIn">
//             {items.map((it) => (
//               <li
//                 key={it}
//                 className="px-4 py-2 text-white hover:bg-emerald-600/20 hover:text-emerald-300 cursor-pointer transition duration-150 rounded-md"
//                 onClick={() => setOpen(false)}
//               >
//                 {it}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Mobile Panel */}
//         {open && (
//           <div className="sm:hidden fixed inset-0 z-40">
//             {/* Backdrop */}
//             <div
//               className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//               onClick={() => setOpen(false)}
//             />
//             {/* Panel */}
//             <div className="absolute top-16 right-0 w-full bg-emerald-900/95 backdrop-blur-xl p-4 border-t border-emerald-800/40 shadow-lg z-50 animate-slideDown">
//               <ul className="list-none p-0">
//                 {items.map((it) => (
//                   <li
//                     key={it}
//                     className="px-4 py-3 text-white border-b border-emerald-800/30 last:border-b-0 hover:bg-emerald-600/10 hover:text-emerald-300 transition rounded-md"
//                     onClick={() => setOpen(false)}
//                   >
//                     {it}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Topnav;

import React from "react";
import { FaUser as FaUserIcon } from "react-icons/fa";

const Topnav = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const items = ["Overview", "Portfolio", "Markets", "Settings", "Logout"];

  return (
    // CHANGE: Removed opacity from bg-emerald-950 for a solid, darker background.
    // CHANGE: Darkened border slightly for more contrast.
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-16 bg-emerald-950 backdrop-blur-xl border-b border-emerald-800/80 shadow-2xl shadow-emerald-900/50 sticky top-0 z-50">
      {/* Title */}
      <div className="flex items-center gap-3">
        {/* Added Text Shadow/Glow */}
        <h1 className="text-xl sm:text-2xl font-extrabold text-emerald-400 tracking-wider drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">
          {title}
        </h1>
      </div>

      {/* User Menu */}
      <div ref={ref} className="relative">
        {/* Desktop Button - Smoother corners, stronger glow on hover */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Open menu"
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-600/50 bg-emerald-900/40 text-white transition duration-300 shadow-xl hover:shadow-emerald-500/30 hover:bg-emerald-800/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-950"
        >
          {/* Enhanced User Icon Look */}
          <div className="w-9 h-9 rounded-full bg-emerald-600/50 flex items-center justify-center shadow-inner shadow-emerald-900">
            <FaUserIcon className="w-4 h-4 text-emerald-300 drop-shadow-[0_0_4px_#a7f3d0]" />
          </div>
          <span className="hidden md:inline text-sm font-semibold text-emerald-100 pr-1">
            Menu
          </span>
        </button>

        {/* Mobile Button - More solid and clean */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="true"
          aria-expanded={open}
          className="sm:hidden p-2 rounded-lg bg-emerald-900/50 border border-emerald-600/50 hover:bg-emerald-700/40 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <svg
            className="w-6 h-6 text-emerald-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Dropdown - Deeper color, better shadow, more pronounced hover */}
        {open && (
          <ul className="hidden sm:block absolute right-0 mt-3 bg-emerald-900/95 backdrop-blur-md border border-emerald-600/50 rounded-xl shadow-2xl shadow-emerald-900/70 min-w-[180px] z-50 origin-top-right transform transition ease-out duration-300 scale-100 opacity-100">
            {items.map((it) => (
              <li
                key={it}
                // Enhanced hover: dark hover background, bright text
                className="px-4 py-3 text-emerald-100 hover:bg-emerald-800/80 hover:text-emerald-300 font-medium cursor-pointer transition duration-200 first:rounded-t-xl last:rounded-b-xl"
                onClick={() => setOpen(false)}
              >
                {it}
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Panel - Full-screen background, better panel style */}
        {open && (
          <div className="sm:hidden fixed inset-0 z-40">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            {/* Panel */}
            <div className="absolute top-16 right-0 w-full bg-emerald-900/95 backdrop-blur-lg p-4 border-t border-emerald-700/60 shadow-xl z-50 origin-top transform transition ease-out duration-300 scale-y-100 opacity-100">
              <ul className="list-none p-0">
                {items.map((it) => (
                  <li
                    key={it}
                    className="px-4 py-3 text-emerald-100 border-b border-emerald-800/30 last:border-b-0 hover:bg-emerald-800/50 hover:text-emerald-300 font-medium transition rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topnav;

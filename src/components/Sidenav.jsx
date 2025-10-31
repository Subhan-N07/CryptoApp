import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { MdSupport } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const navLinks = [
    {
      icons: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icons: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
    {
      icons: MdSupport,
      text: "Support",
      link: "/support",
    },
  ];

  const [active, setActive] = React.useState(navLinks[0].link);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector("aside.fixed");
    if (!el) return;

    const setHeight = () => {
      // set height to 150% of the viewport to "increase the height"
      el.style.height = `${Math.round(window.innerHeight * 1.35)}px`;
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);
  return (
    <>
      {/* Mobile hamburger (visible on small screens) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="w-10 h-10 rounded-lg bg-slate-800/80 backdrop-blur-sm flex items-center justify-center ring-1 ring-slate-700 hover:scale-105 transform transition"
        >
          <span className="block w-5 h-0.5 bg-emerald-300" />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
      <aside
        className={`fixed top-2 left-0  md:h-screen z-50 transform transition-transform duration-300
            bg-gradient-to-b from-gray-900/95 via-emerald-900/80 to-black/95 text-slate-100
            shadow-xl py-6 flex flex-col items-center
            ${
              mobileOpen
                ? "translate-x-0 w-64"
                : " -translate-x-full w-64 md:translate-x-0 md:static md:w-64"
            }
            md:shadow-md rounded-b-md`}
      >
        {/* Brand / Logo */}
        <div className="mb-6 flex items-center gap-3 px-4 w-full">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-600/20 ring-1 ring-emerald-300/10">
            <RxDashboard className="text-2xl text-emerald-300" />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-sm tracking-widest font-extrabold text-emerald-300">
              CRYPTO
            </span>
            <span className="text-xs text-slate-400">Stock Market</span>
          </div>

          {/* Close button on mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden ml-auto text-slate-300 hover:text-white p-2 rounded"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* /* Navigation */}

        <nav className="flex flex-col items-center w-full px-2">
          {navLinks.map((nav) => {
            const Icon = nav.icons;
            const isActive = active === nav.link;
            return (
              <Link
                key={nav.text}
                to={nav.link}
                onClick={() => {
                  setActive(nav.link);
                  setMobileOpen(false);
                }}
                aria-label={nav.text}
                className={
                  "group relative flex items-center w-full gap-3 px-3 py-2 my-2 rounded-lg transition-all duration-200 overflow-hidden hover:bg-white/5 text-emerald-300"
                }
                //   ${
                //     isActive
                //       ? "bg-emerald-600/30 ring-1 ring-emerald-300/20 shadow-md"
                //       : "hover:bg-white/5"
                //   }
                // `}
              >
                <div
                  className={
                    "flex items-center justify-center w-10 h-10 rounded-md transition-transform duration-200"
                  }
                  // ${
                  //   isActive
                  //     ? "bg-emerald-600 text-white scale-105"
                  //     : "bg-slate-800 text-emerald-300 group-hover:scale-105"
                  // }
                  // }
                >
                  <Icon className="text-xl" />
                </div>

                <span
                  className={`hidden md:block text-sm font-medium text-slate-100 `}
                >
                  {nav.text}
                </span>

                {/* Tooltip for narrow screens */}
                <span className="absolute left-full ml-3 px-2 py-1 rounded-md bg-slate-800 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                  {nav.text}
                </span>

                {/* decorative active bar */}
                {/* {isActive && (
                  <span className="absolute left-0 w-1 h-10 bg-emerald-300 rounded-r-md" />
                )} */}
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer actions */}
        <div className="w-full px-4">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="hidden md:flex flex-col">
              <span className="text-xs text-slate-400">Account</span>
              <span className="text-sm font-semibold text-emerald-300">
                0x...A1B2
              </span>
            </div>

            <button className="ml-auto md:ml-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm text-emerald-300 hover:bg-slate-700 transition">
              $
            </button>
          </div>

          <div className="hidden md:flex gap-2">
            <button className="flex-1 px-3 py-2 rounded-md bg-emerald-600 text-black font-semibold hover:scale-102 transition transform">
              Buy
            </button>
            <button className="flex-1 px-3 py-2 rounded-md bg-slate-800 text-emerald-300 hover:bg-slate-700 transition">
              Send
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;

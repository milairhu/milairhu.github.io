import type { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "About", path: "/", end: true },
  { label: "Resume", path: "/resume", end: false },
  { label: "Projects", path: "/projects", end: false },
] as const;

const SiteHeader: FunctionComponent = () => (
  <header className="sticky top-0 z-20 border-b border-ink-700 bg-black/95 backdrop-blur-sm">
    <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
      <NavLink
        to="/"
        className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        aria-label="Hugo Milair — home"
      >
        <span className="flex h-8 w-8 items-center justify-center border border-ink-600 font-mono text-xs font-semibold text-signal transition-colors group-hover:border-signal">
          HM
        </span>
        <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-ink-200 sm:block">
          SRE / Engineer
        </span>
      </NavLink>

      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-1 sm:gap-2">
          {navigation.map(({ label, path, end }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default SiteHeader;

import type { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";

const SiteLayout: FunctionComponent = () => (
  <div className="site-shell">
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <SiteHeader />
    <main id="main-content" className="mx-auto w-full max-w-[90rem] flex-1 px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <Outlet />
    </main>
    <footer className="mx-auto flex w-full max-w-[90rem] flex-wrap items-center justify-between gap-2 border-t border-ink-700 px-5 py-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-400 sm:px-8 lg:px-12">
      <span>Hugo Milair / Paris, France</span>
      <span>Built with React + Tailwind</span>
    </footer>
  </div>
);

export default SiteLayout;

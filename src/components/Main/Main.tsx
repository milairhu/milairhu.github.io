import React, { useEffect, useState } from "react";
import { TabEnum } from "../../enum/TabEnum";
import HomePage from "../Home/HomePage";
import ResumePage from "../Resume/ResumePage";
import ProjectsPage from "../Projects/ProjectsPage";
import { Link } from "react-router-dom";

interface MainPageProps {
  tab: TabEnum;
}

const tabs = [
  { id: TabEnum.HOME, label: "About", path: "/" },
  { id: TabEnum.DIPLOMA, label: "Resume", path: "/resume" },
  { id: TabEnum.PROJECTS, label: "Projects", path: "/projects" },
];

const MainPage: React.FC<MainPageProps> = ({ tab }) => {
  const [curr, setCurr] = useState<TabEnum>(tab);

  useEffect(() => {
    setCurr(tab);
  }, [tab]);

  useEffect(() => {
    console.log(
      "Walex wonderful portfolio : https://walex999.github.io/Website",
    );
  }, []);
  const renderActiveTab = () => {
    if (curr === TabEnum.HOME) {
      return <HomePage setCurr={setCurr} />;
    }
    if (curr === TabEnum.DIPLOMA) {
      return <ResumePage />;
    }
    return <ProjectsPage />;
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="floating-ring hidden lg:block w-64 h-64 -left-10 top-12"
        aria-hidden="true"
      />
      <div
        className="floating-ring hidden md:block w-48 h-48 right-0 bottom-8"
        aria-hidden="true"
      />
      <div className="glass-panel flex w-full max-w-[92rem] flex-col px-5 py-7 md:px-12 space-y-8 min-h-[82vh] md:min-h-[86vh] lg:h-[90vh] lg:min-h-[90vh]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm text-white/60">
              {curr === TabEnum.HOME
                ? "Overview"
                : curr === TabEnum.DIPLOMA
                  ? "Curriculum"
                  : "Selected work"}
            </span>
          </div>
          <nav className="flex flex-wrap gap-3">
            {tabs.map(({ id, label, path }) => (
              <Link
                key={id}
                to={path}
                onClick={() => setCurr(id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                  curr === id
                    ? "border-white bg-white text-slate-900 shadow-lg"
                    : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
                }`}
              >
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="divider-line" />
        <div className="flex-1 min-h-0 w-full h-full overflow-auto pr-1">
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

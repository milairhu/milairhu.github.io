import React from "react";
import ContactBar from "../ContactBar/ContactBar";
import { Link } from "react-router-dom";
import { TabEnum } from "../../enum/TabEnum";

interface HomeProps {
  setCurr: (tab: TabEnum) => void;
}

const HomePage: React.FC<HomeProps> = ({ setCurr }) => {
  return (
    <div className="h-full w-full text-white overflow-auto">
      <div className="flex flex-col lg:flex-row gap-10 h-full w-full">
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Hugo <span className="text-gradient font-bold">MILAIR</span>
            </h1>
          </div>
          <div className="space-y-3 text-lg text-white/80">
            <p>
              French computer science engineer at the{" "}
              <a
                className="link-underlined"
                href="https://www.utc.fr/"
                target="_blank"
                rel="noreferrer"
              >
                Université de Technologie de Compiègne
              </a>
              , specialising in IT systems, DevOps and security governance.
            </p>
            <p>
              Currently growing the IT Risk Governance & DevOps practice at{" "}
              <a
                className="link-underlined"
                href="https://evertrust.io/"
                target="_blank"
                rel="noreferrer"
              >
                EVERTRUST
              </a>{" "}
              in Paris, I blend automation, resilience and security to build
              dependable services.
            </p>
            <p>
              Through my studies, projects and internships, I have been
              intentionally crafting a versatile engineering toolbox — from
              distributed systems to quantum computing side quests.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/resume"
              onClick={() => setCurr(TabEnum.DIPLOMA)}
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-semibold text-slate-900 transition hover:shadow-lg hover:shadow-sky-500/30"
            >
              View resume
            </Link>
            <Link
              to="/projects"
              onClick={() => setCurr(TabEnum.PROJECTS)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore projects
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                Experience
              </p>
              <p className="text-3xl font-semibold mt-1">3+ years</p>
              <p className="text-sm text-white/60 mt-1">
                Professional & academic industry projects
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                Focus
              </p>
              <p className="text-xl font-semibold mt-1">
                IT Risk • DevOps • Security
              </p>
              <p className="text-sm text-white/60 mt-1">
                Automation, observability & governance
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-white/70 text-lg">Let's connect</p>
            <ContactBar />
          </div>
        </div>
        <div className="flex w-full lg:w-2/5 items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-sky-500/30 to-violet-500/30 blur-3xl" />
            <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-2xl flex flex-col items-center space-y-5">
              <img
                className="rounded-3xl w-40 h-40 md:w-52 md:h-52 object-cover border-4 border-white/10"
                src="/profile_picture.jpg"
                alt="Hugo Milair"
              />
              <div className="text-center space-y-1">
                <p className="text-lg font-semibold">Systems Engineer</p>
                <p className="text-sm text-white/60">UTC • EVERTRUST</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["DevOps", "Security", "Cloud"].map((skill) => (
                  <span
                    key={skill}
                    className="tag-pill text-white/90 border-white/20 bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import ProjectCard from "./ProjectCard";
import {
  PiAtomDuotone,
  PiFlagCheckeredDuotone,
  PiChatsCircleDuotone,
  PiKeyholeDuotone,
  PiGridFourDuotone,
  PiBellRingingDuotone,
  PiPuzzlePieceDuotone,
  PiSoccerBallDuotone,
  PiGlobeHemisphereEastDuotone,
  PiFileTextDuotone,
  PiDatabaseDuotone,
  PiFlowArrowDuotone,
} from "react-icons/pi";

const ProjectsPage = () => {
  const projectsList = [
    {
      title: "Compliance Form Filler",
      series: "Compliance tooling · Answering",
      description:
        "A Go CLI that turns compliance questions from a text file into ready-to-use CSV answers. It retrieves relevant policies from Qdrant, relies on the corpus API for ingestion and embeddings, and prompts a locally hosted LLM through Ollama.",
      link: "https://github.com/milairhu/compliance-form-filler",
      Icon: PiFileTextDuotone,
      accent: "linear-gradient(135deg,#22d3ee,#3b82f6)",
      technos: ["Go", "Qdrant", "Ollama", "Docker"],
    },
    {
      title: "Compliance Corpus Ingestor",
      series: "Compliance tooling · Retrieval",
      description:
        "The Python API behind the retrieval layer: it chunks and vectorizes policies, RFP responses and supporting documents, ingests or clears the corpus in Qdrant, and exposes on-demand sentence embeddings.",
      link: "https://github.com/milairhu/compliance-corpus-ingestor",
      Icon: PiDatabaseDuotone,
      accent: "linear-gradient(135deg,#3b82f6,#6366f1)",
      technos: ["Python", "FastAPI", "Sentence Transformers", "Qdrant"],
    },
    {
      title: "Transformer API",
      series: "Compliance tooling · Embeddings",
      description:
        "A focused Python REST service exploring the embedding concern in isolation. Its /embed endpoint uses all-MiniLM-L6-v2 to turn batches of text into vectors ready to be stored in or queried against Qdrant.",
      link: "https://github.com/milairhu/transformer-api",
      Icon: PiFlowArrowDuotone,
      accent: "linear-gradient(135deg,#6366f1,#a855f7)",
      technos: ["Python", "FastAPI", "Sentence Transformers", "Docker"],
    },
    {
      title: "QuantUT",
      description:
        "My own quantum framework to simulate quantum algorithms and quantum circuits. Phylosophically based on the Qiskit and Cirq framework and aims to use the best of Go language.",
      link: "https://github.com/milairhu/quantut",
      Icon: PiAtomDuotone,
      accent: "linear-gradient(135deg,#38bdf8,#818cf8)",
      technos: ["Go"],
    },
    {
      title: "F1 Championship Simulation",
      description:
        "Multi-agent system simulating formula 1 races (based on real circuits) and championship to determine the best profile of a driver for winning titles.",
      link: "https://github.com/milairhu/Formula1-championship-sim",
      Icon: PiFlagCheckeredDuotone,
      accent: "linear-gradient(135deg,#f97316,#fb7185)",
      technos: ["Go", "Rest API", "React", "TailwindCSS"],
    },
    {
      title: "WebSocketChat",
      description:
        "A chat application using WebSockets and CRUD. Backend and admin interface are coded with Spring Boot. User interface is coded with React.",
      link: "https://github.com/milairhu/WebSocketChat",
      Icon: PiChatsCircleDuotone,
      accent: "linear-gradient(135deg,#34d399,#10b981)",
      technos: ["Java", "Spring Boot", "React", "Bootstrap"],
    },

    {
      title: "Passager",
      description:
        "A password manager using Fernet for encryption and decryption. A master password, not stored in files, is required to access the other encrypted passwords.",
      link: "https://github.com/milairhu/passager",
      Icon: PiKeyholeDuotone,
      accent: "linear-gradient(135deg,#ec4899,#a855f7)",
      technos: ["Python", "Tkinter"],
    },
    {
      title: "SAToku",
      description:
        "Modelising a sudoku problem into a SAT problem. A Sudoku solver using the SAT solver Gophersat. An interface is used for the user to input the Sudoku grid and to vizualise clearly the solution.",
      link: "https://github.com/milairhu/SAToku",
      Icon: PiGridFourDuotone,
      accent: "linear-gradient(135deg,#facc15,#fb7185)",
      technos: ["Python", "SAT", "Tkinter"],
    },
    {
      title: "Sport Results Nortifier",
      description:
        "A script that uses an API to check periodically the results of a selected sport game sends audio notification for major events.",
      link: "https://github.com/milairhu/sport-result-notifier",
      Icon: PiBellRingingDuotone,
      accent: "linear-gradient(135deg,#2dd4bf,#0ea5e9)",
      technos: ["Python", "API"],
    },
    {
      title: "Helltaker Solver",
      description:
        "Several Solvers for the game Helltaker. Functionnal solvers use A* algorithm or ASP representation.",
      link: "https://github.com/milairhu/helltaker_solver",
      Icon: PiPuzzlePieceDuotone,
      accent: "linear-gradient(135deg,#f472b6,#ef4444)",
      technos: ["Python", "ASP"],
    },
    {
      title: "Football Expert System",
      description:
        "An expert system that gives tactical advice to a football coach based on the current game state.",
      link: "https://github.com/milairhu/football-se",
      Icon: PiSoccerBallDuotone,
      accent: "linear-gradient(135deg,#fde047,#22c55e)",
      technos: ["Lisp"],
    },
    {
      title: "milairhu.github.io",
      description:
        "My portfolio, a React application using TailwindCSS for styling. It is hosted on GitHub Pages.",
      link: "https://github.com/milairhu/milairhu.github.io",
      Icon: PiGlobeHemisphereEastDuotone,
      accent: "linear-gradient(135deg,#c084fc,#7c3aed)",
      technos: ["React", "TailwindCSS"],
    },
  ];

  return (
    <div className="flex h-full w-full min-h-0 flex-col gap-8 overflow-hidden text-white">
      <div className="shrink-0 space-y-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Projects
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            A bunch of projects I've worked on, from compliance tools to quantum framework and AI side quests.
          </p>
        </div>
      </div>
      <div className="divider-line shrink-0" />
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 overflow-y-auto pb-4 pr-1 md:grid-cols-2">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            series={project.series}
            description={project.description}
            link={project.link}
            technos={project.technos}
            Icon={project.Icon}
            accent={project.accent}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

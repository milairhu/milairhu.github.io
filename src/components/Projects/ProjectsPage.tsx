import type { FunctionComponent } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import PageHeader from "../UI/PageHeader";
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

const projectsList: Project[] = [
    {
      title: "Compliance Form Filler",
      series: "Compliance tooling · Answering",
      description:
        "A Go CLI that turns compliance questions from a text file into ready-to-use CSV answers. It retrieves relevant policies from Qdrant, relies on the corpus API for ingestion and embeddings, and prompts a locally hosted LLM through Ollama.",
      link: "https://github.com/milairhu/compliance-form-filler",
      icon: PiFileTextDuotone,
      technologies: ["Go", "Qdrant", "Ollama", "Docker"],
    },
    {
      title: "Compliance Corpus Ingestor",
      series: "Compliance tooling · Retrieval",
      description:
        "The Python API behind the retrieval layer: it chunks and vectorizes policies, RFP responses and supporting documents, ingests or clears the corpus in Qdrant, and exposes on-demand sentence embeddings.",
      link: "https://github.com/milairhu/compliance-corpus-ingestor",
      icon: PiDatabaseDuotone,
      technologies: ["Python", "FastAPI", "Sentence Transformers", "Qdrant"],
    },
    {
      title: "Transformer API",
      series: "Compliance tooling · Embeddings",
      description:
        "A focused Python REST service exploring the embedding concern in isolation. Its /embed endpoint uses all-MiniLM-L6-v2 to turn batches of text into vectors ready to be stored in or queried against Qdrant.",
      link: "https://github.com/milairhu/transformer-api",
      icon: PiFlowArrowDuotone,
      technologies: ["Python", "FastAPI", "Sentence Transformers", "Docker"],
    },
    {
      title: "QuantUT",
      description:
        "My own quantum framework to simulate quantum algorithms and quantum circuits. Phylosophically based on the Qiskit and Cirq framework and aims to use the best of Go language.",
      link: "https://github.com/milairhu/quantut",
      icon: PiAtomDuotone,
      technologies: ["Go"],
    },
    {
      title: "F1 Championship Simulation",
      description:
        "Multi-agent system simulating formula 1 races (based on real circuits) and championship to determine the best profile of a driver for winning titles.",
      link: "https://github.com/milairhu/Formula1-championship-sim",
      icon: PiFlagCheckeredDuotone,
      technologies: ["Go", "Rest API", "React", "TailwindCSS"],
    },
    {
      title: "WebSocketChat",
      description:
        "A chat application using WebSockets and CRUD. Backend and admin interface are coded with Spring Boot. User interface is coded with React.",
      link: "https://github.com/milairhu/WebSocketChat",
      icon: PiChatsCircleDuotone,
      technologies: ["Java", "Spring Boot", "React", "Bootstrap"],
    },

    {
      title: "Passager",
      description:
        "A password manager using Fernet for encryption and decryption. A master password, not stored in files, is required to access the other encrypted passwords.",
      link: "https://github.com/milairhu/passager",
      icon: PiKeyholeDuotone,
      technologies: ["Python", "Tkinter"],
    },
    {
      title: "SAToku",
      description:
        "Modelising a sudoku problem into a SAT problem. A Sudoku solver using the SAT solver Gophersat. An interface is used for the user to input the Sudoku grid and to vizualise clearly the solution.",
      link: "https://github.com/milairhu/SAToku",
      icon: PiGridFourDuotone,
      technologies: ["Python", "SAT", "Tkinter"],
    },
    {
      title: "Sport Results Nortifier",
      description:
        "A script that uses an API to check periodically the results of a selected sport game sends audio notification for major events.",
      link: "https://github.com/milairhu/sport-result-notifier",
      icon: PiBellRingingDuotone,
      technologies: ["Python", "API"],
    },
    {
      title: "Helltaker Solver",
      description:
        "Several Solvers for the game Helltaker. Functionnal solvers use A* algorithm or ASP representation.",
      link: "https://github.com/milairhu/helltaker_solver",
      icon: PiPuzzlePieceDuotone,
      technologies: ["Python", "ASP"],
    },
    {
      title: "Football Expert System",
      description:
        "An expert system that gives tactical advice to a football coach based on the current game state.",
      link: "https://github.com/milairhu/football-se",
      icon: PiSoccerBallDuotone,
      technologies: ["Lisp"],
    },
    {
      title: "milairhu.github.io",
      description:
        "My portfolio, a React application using TailwindCSS for styling. It is hosted on GitHub Pages.",
      link: "https://github.com/milairhu/milairhu.github.io",
      icon: PiGlobeHemisphereEastDuotone,
      technologies: ["React", "TailwindCSS"],
    },
];

const ProjectsPage: FunctionComponent = () => (
  <div className="page-enter">
    <PageHeader
      eyebrow="Selected work / Open source"
      title="Projects & experiments"
      description="A collection of projects I led on my spare time or at school."
    />
    <div className="mt-12 grid gap-px border border-ink-700 bg-ink-700 md:grid-cols-2 xl:grid-cols-3">
      {projectsList.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </div>
);

export default ProjectsPage;

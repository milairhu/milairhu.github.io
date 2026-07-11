import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ContactBar from "../ContactBar/ContactBar";
import SectionHeading from "../UI/SectionHeading";
import Tag from "../UI/Tag";

const capabilities = [
  {
    index: "01",
    title: "Platform reliability",
    text: "Kubernetes platform engineering, highly available cloud infrastructure and production operations.",
  },
  {
    index: "02",
    title: "Delivery systems",
    text: "Go tooling, infrastructure as code and deployment automation designed for repeatable change.",
  },
  {
    index: "03",
    title: "Security by design",
    text: "ISO 27001 implementation, risk assessment and pragmatic controls embedded into engineering work.",
  },
] as const;

const skills = ["Go", "Kubernetes", "Cloud Providers", "Terraform", "Argo CD", "Observability", "ISO 27001"];

const HomePage: FunctionComponent = () => (
  <div className="page-enter">
    <section className="grid min-h-[60vh] items-center gap-12 border-b border-ink-700 pb-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:pb-24">
      <div>
        <p className="eyebrow">Hugo Milair / Site Reliability Engineer</p>
        <h1 className="mt-7 max-w-5xl text-balance font-mono text-5xl font-medium leading-[0.98] tracking-[-0.065em] text-ink-50 sm:text-7xl lg:text-[5.7rem]">
          Hi there, I am <span className="text-signal">Hugo.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-300 sm:text-xl">
          I help operate and maintain cloud platforms, with a focus on reliability and automation, with a background in security and ISO 27001 / GDPR compliance.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/projects" className="button button--primary">Explore projects <span aria-hidden="true">↗</span></Link>
          <Link to="/resume" className="button">Read resume</Link>
        </div>
      </div>

      <aside className="relative border border-ink-700 bg-ink-950 p-5" aria-label="Profile summary">
        <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-signal" />
        <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-signal" />
        <img
          className="aspect-square w-full object-cover grayscale contrast-110"
          src="/profile_picture.jpg"
          alt="Hugo Milair"
        />
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-ink-50">Hugo Milair</p>
            <p className="mt-1 text-sm text-ink-400">Paris, France</p>
          </div>
          <span className="mt-1 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-400">
            <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" /> SRE
          </span>
        </div>
      </aside>
    </section>

    <section className="grid gap-12 border-b border-ink-700 py-16 lg:grid-cols-[18rem_minmax(0,1fr)] lg:py-24">
      <div>
        <SectionHeading index="01 / ABOUT" title="Summary" />
      </div>
      <div className="max-w-4xl space-y-6 text-base leading-8 text-ink-300 sm:text-lg">
        <p>
          Site reliability engineer and graduate of the{" "}
          <a className="text-link" href="https://www.utc.fr/" target="_blank" rel="noopener noreferrer">Université de Technologie de Compiègne</a>, focused on reliable cloud platforms, automation and security.
        </p>
        <p>
          At <a className="text-link" href="https://evertrust.io/" target="_blank" rel="noopener noreferrer">EVERTRUST</a>, I operate a Kubernetes and ArgoCDbased SaaS platform developed in Go, build cloud infrastructure and deployment automation, and improve observability and cost visibility. My earlier compliance work led the company&apos;s first ISO 27001 certification.
        </p>
        <div className="flex flex-wrap gap-2 pt-3">
          {skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <SectionHeading index="02 / PRACTICE" title="What I work on" />
      <div className="grid gap-px bg-ink-700 lg:grid-cols-3">
        {capabilities.map(({ index, title, text }) => (
          <article key={index} className="group bg-black p-6 transition-colors hover:bg-ink-950 sm:p-8">
            <span className="font-mono text-xs text-signal">{index}</span>
            <h3 className="mt-10 font-mono text-xl text-ink-50">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-ink-400">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-16">
        <SectionHeading index="03 / LINKS" title="Find me online" />
        <ContactBar />
      </div>
    </section>
  </div>
);

export default HomePage;

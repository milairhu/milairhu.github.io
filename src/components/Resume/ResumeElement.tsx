import type { FunctionComponent } from "react";

export interface ResumeEntry {
  title: string;
  date?: string;
  content?: string[];
}

interface ResumeElementProps {
  entry: ResumeEntry;
}

const ResumeElement: FunctionComponent<ResumeElementProps> = ({ entry }) => (
  <article className="relative border-l border-ink-700 pb-9 pl-6 last:pb-0 sm:pl-8">
    <span className="absolute -left-px top-1.5 h-2 w-2 -translate-x-1/2 bg-ink-600" aria-hidden="true" />
    {entry.date && (
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-signal">{entry.date}</p>
    )}
    <h3 className={`${entry.date ? "mt-2" : ""} max-w-3xl font-mono text-base leading-6 text-ink-50 sm:text-lg`}>
      {entry.title}
    </h3>
    {entry.content && (
      <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-400">
        {entry.content.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-ink-600" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </article>
);

export default ResumeElement;

import type { FunctionComponent } from "react";
import ResumeElement from "./ResumeElement";
import type { ResumeEntry } from "./ResumeElement";
import SectionHeading from "../UI/SectionHeading";

interface ResumeSectionProps {
  index: string;
  title: string;
  entries: ResumeEntry[];
}

const ResumeSection: FunctionComponent<ResumeSectionProps> = ({ index, title, entries }) => (
  <section>
    <SectionHeading index={index} title={title} />
    <div className="relative">
      {entries.map((entry) => <ResumeElement key={`${entry.title}-${entry.date ?? ""}`} entry={entry} />)}
    </div>
  </section>
);

export default ResumeSection;

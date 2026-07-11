import type { FunctionComponent } from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
}

const SectionHeading: FunctionComponent<SectionHeadingProps> = ({ index, title }) => (
  <div className="mb-6 flex items-baseline gap-4 border-b border-ink-700 pb-4">
    <span className="font-mono text-[0.65rem] tracking-[0.18em] text-signal">{index}</span>
    <h2 className="font-mono text-lg font-medium tracking-[-0.02em] text-ink-50 sm:text-xl">
      {title}
    </h2>
  </div>
);

export default SectionHeading;

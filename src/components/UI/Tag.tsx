import type { FunctionComponent } from "react";

interface TagProps {
  children: string;
}

const Tag: FunctionComponent<TagProps> = ({ children }) => (
  <span className="inline-flex border border-ink-700 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-300">
    {children}
  </span>
);

export default Tag;

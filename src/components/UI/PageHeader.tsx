import type { FunctionComponent, ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  actions,
}) => (
  <header className="grid gap-8 border-b border-ink-700 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
    <div className="max-w-4xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 text-balance font-mono text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-ink-50 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-ink-300 sm:text-lg">
        {description}
      </p>
    </div>
    {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
  </header>
);

export default PageHeader;

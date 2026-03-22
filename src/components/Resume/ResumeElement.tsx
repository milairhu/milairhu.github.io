import React from "react";

interface ResumeElementProps {
  title: string;
  date: string;
  content?: string[];
}

const ResumeElement: React.FC<ResumeElementProps> = ({
  title,
  date,
  content,
}) => {
  return (
    <div className="space-y-2.5 rounded-2xl border border-white/10 bg-slate-950/35 p-4 shadow-inner shadow-black/20">
      <div className="space-y-1">
        <div className="text-base md:text-lg font-semibold leading-snug text-white/95">
          {title}
        </div>
        <div className="text-[11px] uppercase tracking-[0.28em] text-white/50">
          {date}
        </div>
      </div>
      {content && (
        <ul className="space-y-1.5 text-sm text-white/75">
          {content.map((paragraph, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300/70"></span>
              <span>{paragraph}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeElement;

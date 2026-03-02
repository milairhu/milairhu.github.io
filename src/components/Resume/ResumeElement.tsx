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
    <div className="space-y-3 rounded-2xl border border-white/5 bg-white/5 p-4 shadow-inner shadow-black/20">
      <div className="space-y-1">
        <div className="text-base md:text-xl font-semibold leading-snug">
          {title}
        </div>
        <div className="text-xs uppercase tracking-[0.4em] text-white/50">
          {date}
        </div>
      </div>
      {content && (
        <ul className="space-y-1.5 text-sm md:text-base text-white/75">
          {content.map((paragraph, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40"></span>
              <span>{paragraph}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeElement;

import React from "react";
import ResumeElement from "./ResumeElement";

const ResumePage = () => {
  const professionnalExperiences = [
    {
      title:
        "IT Risk Governance & DevOps, Internship at EVERTRUST, Paris, FRANCE",
      date: "02/2024 – 08/2024",
      content: [
        "Established and matured security policies for the company to comply with ISO 27001.",
        "Participated to the infrastrusture improvement and to the automation of processes.",
      ],
    },
    {
      title: "Software Developer, Internship at InTech SA, Kayl, LUXEMBURG",
      date: "09/2022 – 02/2023",
      content: [
        "Developed with a team both backend and frontend of a web app for internal usage.",
        "Adapted to AGILE framework.",
      ],
    },
    {
      title: "Crew member, McDonald’s Restaurant of Semécourt, FRANCE",
      date: "Summer 2022",
      content: [
        "Welcomed customers",
        "Prepared orders",
        "Worked within a team",
      ],
    },
  ];

  const educations = [
    {
      title:
        "Master’s Degree in Computer Engineering, Université de Technologie de Compiègne, Compiègne, FRANCE",
      date: "02/2020 - 06/2024",
    },
    {
      title:
        "High School Diploma, concentration in sciences, minors Biology and English, Lycée Fabert, Metz, FRANCE",
      date: "2016-2019, with very high honours",
    },
  ];

  const extraCurricularActivities = [
    {
      title:
        "Junior UTC, Member of the Quality Pole of my university‘s Junior-Enterprise",
      date: "09/2023 - 03-2024",
      content: [
        "Corrected and validated official documents and contracts emitted by Junior UTC",
        "Audited internal pieces of work",
        "Participated in bi-weekly internal meetings",
      ],
    },
    {
      title: "Candide, General Secretary of a Tutoring Association",
      date: "09/2021 - 03/2022",
      content: [
        "Headed contacts with potential and current partnerships",
        "Led and reported on internal meetings",
        "Tutored after-school class",
      ],
    },
    {
      title: "Tennis",
      date: "Since 2013",
      content: [
        "Participate to bi-weekly trainings",
        "Play at competitive levels.",
      ],
    },
  ];

  return (
    <div className="h-full w-full text-white">
      <div className="flex h-full flex-col gap-8 pb-2">
        <header className="shrink-0">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Experience, education & community work
              </h1>
              <p className="max-w-3xl text-lg text-white/70">
                Download a complete PDF version, then skim the key highlights
                directly below.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                className="inline-flex items-center rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/60 hover:bg-white/10"
                href="/fr_resume_MILAIR_Hugo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV PDF · FR
              </a>
              <a
                className="inline-flex items-center rounded-full border border-sky-300/60 bg-sky-400/15 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-400/25"
                href="/en_resume_MILAIR_Hugo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume PDF · EN
              </a>
            </div>
          </div>
        </header>

        <div className="divider-line shrink-0" />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Professional experience
              </h2>
              <span className="tag-pill text-xs text-white/80 border-white/20 bg-white/10">
                Security · DevOps
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {professionnalExperiences.map((experience, index) => (
                <ResumeElement
                  key={index}
                  title={experience.title}
                  date={experience.date}
                  content={experience.content}
                />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-xl">
            <h2 className="mb-4 text-xl md:text-2xl font-semibold">
              Education
            </h2>
            <div className="space-y-4">
              {educations.map((education, index) => (
                <ResumeElement
                  key={index}
                  title={education.title}
                  date={education.date}
                />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-xl lg:col-span-2">
            <h2 className="mb-4 text-xl md:text-2xl font-semibold">
              Extra-curricular activities
            </h2>
            <div className="space-y-4">
              {extraCurricularActivities.map((activity, index) => (
                <ResumeElement
                  key={index}
                  title={activity.title}
                  date={activity.date}
                  content={activity.content}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

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
      date: "02/2020 - Expected in 06/2024",
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

  const generalKnowledge = [
    "Computer Security",
    "Distributed Systems & Algorithms",
    "IT Networks",
    "Operations Research",
    "Relational & Non-Relational Databases",
    "Logic Programming",
  ];

  return (
    <div className="h-full w-full text-white space-y-8">
      <div className="space-y-4">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Experience, education & community work
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            Download the concise PDF versions in{" "}
            <a
              className="link-underlined-french"
              href="/fr_resume_MILAIR_Hugo.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              French
            </a>{" "}
            or{" "}
            <a
              className="link-underlined-uk"
              href="/en_resume_MILAIR_Hugo.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              English
            </a>
            , and skim the highlights below.
          </p>
        </div>
      </div>
      <div className="divider-line" />
      <div className="flex h-[70vh] flex-col gap-6 overflow-auto pr-2">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Professional experience</h2>
            <span className="tag-pill text-xs text-white/80 border-white/20 bg-white/10">
              Security · DevOps
            </span>
          </div>
          <div className="mt-6 space-y-6">
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
        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-6">
              {educations.map((education, index) => (
                <ResumeElement
                  key={index}
                  title={education.title}
                  date={education.date}
                />
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Core skills</h2>
            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50 mb-1">
                  Programming languages
                </p>
                <p>
                  C, C++, Go, Python3, HTML, CSS, JavaScript, Java, Dart, React,
                  Flutter, SQL, VB, Lisp, Prolog
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50 mb-1">
                  General knowledge
                </p>
                <ul className="space-y-1">
                  {generalKnowledge.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40"></span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Extra-curricular activities
          </h2>
          <div className="space-y-6">
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
  );
};

export default ResumePage;

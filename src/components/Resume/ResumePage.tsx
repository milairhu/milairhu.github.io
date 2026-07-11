import React from "react";
import ResumeElement from "./ResumeElement";

const ResumePage = () => {
  const professionalExperiences = [
    {
      title: "Site Reliability Engineer, EVERTRUST, Paris, France",
      date: "09/2024 – Present",
      content: [
        "Provision and improve highly available AWS EKS infrastructure with Terraform, Karpenter, Argo CD and Kubernetes.",
        "Develop the SaaS control plane and internal SRE tooling in Go, including deployment automation and Temporal workflows.",
        "Improve observability and cost visibility with Grafana, Mimir, Loki, Tempo, Alloy and OpenCost.",
        "Take part in on-call incident response and support production operations across networking, storage, databases and security services.",
      ],
    },
    {
      title:
        "IT Compliance Engineer, EVERTRUST, Paris, France",
      date: "09/2024 – 03/2026",
      content: [
        "Led the company-wide security programme that delivered EVERTRUST's first ISO 27001 certification.",
        "Maintained the security policy framework, performed risk assessments and coordinated remediation work.",
        "Led the migration from GitLab to GitHub and introduced secure-by-default CI/CD controls, containerised tests and automated security scanning.",
        "Prepared the company for audits and conducted remediation work for identified non-conformities.",
        "Aligned the company's process and data inventories with GDPR requirements.",
        "Responded to RFPs questionnaires for security and technical requirements prior to contract signing.",
      ],
    },
    {
      title:
        "IT Risk Compliance & DevOps Intern, EVERTRUST, Paris, France",
      date: "02/2024 – 08/2024",
      content: [
        "Initiated the ISO 27001 implementation programme and developed supporting automation tools.",
      ],
    },
    {
      title: "Full-stack Software Development Intern, InTech, Kayl, Luxembourg",
      date: "09/2022 – 02/2023",
      content: [
        "Contributed to an internal invoicing application built with React and Spring Boot in an Agile team.",
      ],
    },
  ];

  const educations = [
    {
      title:
        "Engineering Degree in Computer Science, Université de Technologie de Compiègne (UTC), Compiègne, France",
      date: "02/2020 – 08/2024 · GPA 5.00/5.00",
    },
    {
      title:
        "Preparatory Classes for Engineering Schools (MPSI), Lycée Fabert, Metz, France",
      date: "09/2019 – 02/2020",
    },
  ];

  const skillsAndCertifications = [
    {
      title: "Cloud & platform engineering",
      content: [
        "AWS, GCP, Kubernetes, Docker, Argo CD and Terraform.",
        "Go, Python and Bash for automation and internal tooling.",
      ],
    },
    {
      title: "Delivery, observability & security",
      content: [
        "GitHub Actions, CI/CD and automated vulnerability scanning.",
        "Grafana LGTM, Alloy, OpenCost, and dozens of other open-source tools.",
      ],
    },
    {
      title: "GRC and ISO 27001 Lead Implementer",
      content: [
        "ISO 27001 norm.",
        "ISO 27005 risk management framework.",
        "Vanta.",
        "GDPR.",
        "Microsoft IAM (Entra), MDM (Intune), EDR (Microsoft Defender for Endpoint)."
      ],
    },
    {
      title: "Professional certifications",
      date: "2025 – 2026",
      content: [
        "ISO 27001 Lead Implementer — HS2, 2025.",
        "Introduction to Kubernetes (LFS158) — Linux Foundation, 2026.",
      ],
    },
  ];

  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-8 overflow-hidden text-white">
      <header className="shrink-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Platform engineering, reliability & security
            </h1>
            <p className="max-w-3xl text-lg text-white/70">
              Blending Cloud engineering, DevOps philosophy and security knowledge. Download a PDF or explore the highlights below.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              className="inline-flex items-center rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/60 hover:bg-white/10"
              href="https://raw.githubusercontent.com/milairhu/resume-public/main/sre/Hugo_MILAIR_CV_fr.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV PDF · FR
            </a>
            <a
              className="inline-flex items-center rounded-full border border-sky-300/60 bg-sky-400/15 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-400/25"
              href="https://raw.githubusercontent.com/milairhu/resume-public/main/sre/Hugo_MILAIR_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume PDF · EN
            </a>
          </div>
        </div>
      </header>

      <div className="divider-line shrink-0" />

      <div className="min-h-0 flex-1 overflow-y-auto pb-2 pr-1">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Professional experience
              </h2>
            </div>
            <div className="mt-5 space-y-4">
              {professionalExperiences.map((experience, index) => (
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
              Skills & certifications
            </h2>
            <div className="space-y-4">
              {skillsAndCertifications.map((activity, index) => (
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

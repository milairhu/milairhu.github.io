import type { FunctionComponent } from "react";
import PageHeader from "../UI/PageHeader";
import ResumeSection from "./ResumeSection";
import type { ResumeEntry } from "./ResumeElement";

const professionalExperiences: ResumeEntry[] = [
    {
      title: "Site Reliability Engineer, EVERTRUST, Paris, France",
      date: "09/2024 – Present",
      content: [
        "Provision and improve highly available cloud infrastructure with Terraform, Karpenter, Argo CD and Kubernetes.",
        "Maintain the SaaS control plane and internal SRE tooling in Go, including deployment automation and Temporal workflows.",
        "Improve observability and cost visibility with Grafana, Mimir, Loki, Tempo, Alloy and OpenCost.",
        "Take part in on-call incident response and support production operations across networking, storage, databases and security services.",
        "Led the migration from GitLab to GitHub and introduced secure-by-default CI/CD controls, containerised tests and automated security scanning.",

      ],
    },
    {
      title:
        "IT Compliance Engineer, EVERTRUST, Paris, France",
      date: "09/2024 – 03/2026",
      content: [
        "Led the company-wide security programme that delivered EVERTRUST's first ISO 27001 certification.",
        "Led and maintained the security policy framework, performed risk assessments and coordinated remediation work.",
        "Prepared the company for audits and conducted remediation work for identified non-conformities.",
        "Aligned the company's process and data inventories with GDPR requirements.",
        "Developed internal tools for asset management and compliance reporting.",
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

const educations: ResumeEntry[] = [
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

const skillsAndCertifications: ResumeEntry[] = [
    {
      title: "Cloud & platform engineering",
      content: [
        "Cloud providers, Terraform, Kubernetes, Docker, Argo CD.",
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
        "ISO 27001 norm and GDPR",
        "ISO 27005 risk management framework.",
        "Vanta.",
        "Microsoft IAM (Entra), MDM (Intune), EDR (Microsoft Defender for Endpoint)."
      ],
    },
    {
      title: "Professional certifications",
      date: "2025 – 2026",
      content: [
        "Introduction to Kubernetes (LFS158) — Linux Foundation, 2026.",
        "ISO 27001 Lead Implementer — HS2, 2025.",
      ],
    },
];

const ResumePage: FunctionComponent = () => (
  <div className="page-enter">
    <PageHeader
      eyebrow="Experience / Education / Practice"
      title="Platform engineering, reliability & security"
      description="Blending cloud engineering, DevOps philosophy and security knowledge. Download a PDF or explore the highlights below."
      actions={
        <>
          <a className="button" href="https://raw.githubusercontent.com/milairhu/resume-public/main/sre/Hugo_MILAIR_CV_fr.pdf" target="_blank" rel="noopener noreferrer">
            CV PDF · FR <span aria-hidden="true">↗</span>
          </a>
          <a className="button" href="https://raw.githubusercontent.com/milairhu/resume-public/main/sre/Hugo_MILAIR_CV.pdf" target="_blank" rel="noopener noreferrer">
            Resume PDF · EN <span aria-hidden="true">↗</span>
          </a>
        </>
      }
    />

    <div className="mt-14 grid gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.8fr)] lg:gap-x-20">
      <ResumeSection index="01" title="Professional experience" entries={professionalExperiences} />
      <ResumeSection index="02" title="Education" entries={educations} />
      <div className="lg:col-span-2">
        <ResumeSection index="03" title="Skills & certifications" entries={skillsAndCertifications} />
      </div>
    </div>
  </div>
);

export default ResumePage;

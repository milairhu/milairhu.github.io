import React from 'react';
import ResumeElement from './ResumeElement';

const ResumePage = () => {

  const professionnalExperiences = [
    {
      title: 'IT Risk Governance & DevOps, Internship at EVERTRUST, Paris, FRANCE',
      date: '02/2024 – 08/2024',
      content: [
        'Established and matured security policies for the company to comply with ISO 27001.',
        'Participated to the infrastructure improvement and to the automation of processes.'
      ]
    },
    {
      title: 'Software Developer, Internship at InTech SA, Kayl, LUXEMBURG',
      date: '09/2022 – 02/2023',
      content: [
        'Developed with a team both backend and frontend of an invoice management web app.',
        'Adapted to AGILE framework.'
      ]
    },
    {
      title: 'Crew member, McDonald’s Restaurant, Semécourt, FRANCE',
      date: 'Summer 2022',
      content: ['Welcomed customers.','Prepared orders.','Worked within a team.']
    }
  ];

  const educations = [
    {
      title: 'Master’s Degree in Computer Engineering, Université de Technologie de Compiègne, Compiègne, FRANCE',
      date: '02/2020 - Expected in 06/2024',
    },
    {
      title: 'High School Diploma, concentration in sciences, minors Biology and English, Lycée Fabert, Metz, FRANCE',
      date: '2016-2019, with very high honours',
    }
  ];

  const extraCurricularActivities = [
    {
      title: 'Junior UTC, Member of the Quality Pole of my university‘s Junior-Enterprise',
      date: '09/2023 - 03-2024',
      content: [
        'Corrected and validated official documents and contracts emitted by Junior UTC.',
        'Audited internal pieces of work.',
        'Participated in bi-weekly internal meetings.'
      ]
    },
    {
      title: 'Candide, General Secretary of a Tutoring Association',
      date: '09/2021 - 03/2022',
      content: [
        'Headed contacts with potential and current partnerships.',
        'Led and reported on internal meetings.',
        'Tutored after-school class.'
      ]
    },
    {
      title: 'Tennis',
      date: 'Since 2013',
      content: [
        'Participate to bi-weekly trainings.',
        'Play at competitive levels.'
      ]
    }
  ];


    return (
      <div className='h-full w-full text-white space-y-7'>
        <div className='w-full space-y-5'>
          <h1 className='text-4xl md:text-6xl font-bold text-left'>Resume</h1>
          <h2 className='text-xl md:text-2xl font-semibold text-left'>See my resume as a PDF in a <a className='link-underlined-french' href="/fr_resume_MILAIR_Hugo.pdf" target="_blank" rel="noopener noreferrer">French version</a> or in an <a className='link-underlined-uk' href="/en_resume_MILAIR_Hugo.pdf" target="_blank" rel="noopener noreferrer">English version</a>.</h2>
        </div>
        <div className='w-full bg-slate-300 pt-0.5'/>
        <div className='h-3/4 w-full space-y-8 md:space-y-10 overflow-auto'>
          <div className='md:flex space-x-5 space-y-3 md:space-y-0'>
            <div className='text-lg md:text-2xl font-semibold md:w-1/3 lg:w-1/4 text-wrap'>Professionnal experience</div>
            <div className='w-3/4 space-y-4'>
              {
                professionnalExperiences.map((experience, index) => (
                  <ResumeElement key={index} title={experience.title} date={experience.date} content={experience.content} />
                ))
              }
            </div>
          </div>
          <div className='md:flex space-x-5 space-y-3 md:space-y-0'>
          <div className='text-lg md:text-2xl font-semibold md:w-1/3 lg:w-1/4 text-wrap'>Education</div>
            <div className='w-3/4 space-y-4'>
              {
                educations.map((education, index) => (
                  <ResumeElement key={index} title={education.title} date={education.date} />
                ))
              }
            </div>
          </div>
          <div className='md:flex space-x-5 space-y-3 md:space-y-0'>
          <div className='text-lg md:text-2xl font-semibold md:w-1/3 lg:w-1/4 text-wrap'>Computer skills</div>
            <div className='w-3/4 space-y-4'>
              <div>
                Computing languages: C, C++, Go, Python3, HTML, CSS, JavaScript, Java, Dart, React, Flutter, SQL, VB, Lisp, Prolog
              </div>
              <div>
               General knowledge: · Computer Security
· Distributed Systems and Algorithms
· IT Networks
· Operations research
· Relational and Non-Relational
Databases
· Logic Programming
              </div>
            </div>
          </div>
          <div className='md:flex space-x-5'>
            <div className='text-lg md:text-2xl font-semibold md:w-1/3 lg:w-1/4 text-wrap'>Extra-Curricular activities</div>
            <div className='w-3/4 space-y-4'>
              {
                extraCurricularActivities.map((activity, index) => (
                  <ResumeElement key={index} title={activity.title} date={activity.date} content={activity.content} />
                ))
              }
            </div>
          </div>
      </div>
    </div>
    );
  }

export default ResumePage;
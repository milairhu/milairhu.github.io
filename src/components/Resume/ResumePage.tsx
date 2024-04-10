import React from 'react';

const ResumePage = () => {
    return (
      <div className='h-full w-full text-white space-y-7'>
        <div className='w-full space-y-5'>
          <h1 className=' text-6xl font-bold text-left'>Resume</h1>
          <h2 className='text-2xl font-semibold text-left'>See my resume as a PDF in a <a className='link-underlined-french' href="/fr_resume_MILAIR_Hugo.pdf" target="_blank" rel="noopener noreferrer">French version</a> or in an <a className='link-underlined-uk' href="/en_resume_MILAIR_Hugo.pdf" target="_blank" rel="noopener noreferrer">English version</a>.</h2>
        </div>
        <div className='w-full bg-slate-300 py-0.5'/>
        <div className=' h-3/4 w-full space-y-10 overflow-auto'>
          <div className='flex space-x-5'>
            <div className='text-lg md:text-2xl lg:text-4xl font-semibold w-1/3 xl:w-1/4 text-wrap'>Professionnal experience</div>
            <div className='w-3/4 space-y-4'>
              <div>
              Software Developer, Internship at InTech SA, Kayl, LUXEMBURG, 09/2022 – 02/2023:
· Developed with a team both backend and frontend of a web app for internal usage
· Adapted to AGILE framework
              </div>
              <div>
                Crew member, McDonald’s Restaurant of Semécourt, FRANCE, Summer 2022:
· Welcomed customers, Prepared orders, Worked within a team
              </div>
            </div>
          </div>
          <div className='flex space-x-5'>
          <div className='text-lg md:text-2xl lg:text-4xl font-semibold w-1/3 xl:w-1/4 text-wrap'>Education</div>
            <div className='w-3/4 space-y-4'>
              <div>
                Master’s Degree in Computer Engineering, Université de Technologie de Compiègne, Compiègne, FRANCE, magna cum laude. 02/2020 - Expected in 06/2024
              </div>
              <div>
                High School Diploma, concentration in sciences, minors Biology and English, Lycée Fabert, Metz, FRANCE, with very high honours. 2016-2019
              </div>
            </div>
          </div>
          <div className='flex space-x-5'>
          <div className='text-lg md:text-2xl lg:text-4xl font-semibold w-1/3 xl:w-1/4 text-wrap'>Computer skills</div>
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
          <div className='flex space-x-5'>
            <div className='text-lg md:text-2xl lg:text-4xl font-semibold w-1/3 xl:w-1/4 text-wrap'>Extra-Curricular activities</div>
            <div className='w-3/4 space-y-4'>
              <div>
              Junior UTC, Member of the Quality Pole of the University ‘s Junior-Enterprise, since 09/2023:
· Correct and validate official documents and contracts emitted by Junior UTC
· Audit internal pieces of work Participate in bi-weekly internal meetings
              </div>
              <div>
              Candide, General Secretary of a Tutoring Association, (09/2021 - 03/2022):
· Headed contacts with potential and current partnerships
· Led and reported on internal meetings Tutored after-school class
              </div>
              <div>
              Tennis, participate in bi-weekly trainings and play at competitive levels, since 2013
              </div>
            </div>
          </div>
      </div>
    </div>
    );
  }

export default ResumePage;
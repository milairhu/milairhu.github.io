import React from 'react';

const ResumePage = () => {
    return (
      <div className='h-full w-full text-white space-y-11'>
        <div className='w-full space-y-8'>
          <h1 className=' text-6xl font-bold text-left'>Resume</h1>
          <h2 className='text-2xl font-semibold text-left'>See my resume as a PDF in a <a className='link-underlined-french' href="/fr_resume_MILAIR_Hugo.pdf" target="_blank" rel="noopener noreferrer">French version</a> or in an <a className='link-underlined-uk' href="/fr_resume_MILAIR_Hugo.pdf" target="_blank" rel="noopener noreferrer">English version</a>.</h2>
        </div>
        <div className='w-full bg-slate-300 py-0.5'/> 
        <div className='flex flex-wrap justify-center items-start h-3/4 w-full overflow-auto'>
          
        </div>
      </div>
    );
  }

export default ResumePage;
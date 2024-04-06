import React from 'react';
import ContactBar from '../ContactBar/ContactBar';
const HomePage = () => {
  return (
    <div className='h-full w-full text-white'>
      <div className='w-full items-center'>
        <div className='space-y-8'>
          <h1 className=' text-6xl font-bold text-left'>Hugo MILAIR</h1>
          <div className='space-y-4'>
            <div className='text-2xl font-semibold text-left'>French student in Computer Science at the <a className='link-underlined' href='https://www.utc.fr/' target="_blank" rel="noreferrer">UTC</a>. Specialized in IT Systems</div>
            <div className='text-2xl font-semibold text-left'>IT Risk Governance and DevOps Intern at <a className='link-underlined' href='https://evertrust.io/' target="_blank" rel="noreferrer">EVERTRUST</a>, Paris.</div>
          </div>
          <p className=' text-gray-300 text-xl'>
            Threw my studies, my projects and my internships, I have been looking to develop my skills and knowledge in IT Systems and IT Security. 
          </p>
          <p className=' text-gray-300 text-xl'>
            Check out my <a className='link-underlined' href='/resume'>resume</a> and my <a className='link-underlined' href='/projects'>projects</a> to know more about me, and let's connect on the social networks
             below!
          </p>
          <ContactBar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
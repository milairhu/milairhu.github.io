import React from 'react';
import ContactBar from '../ContactBar/ContactBar';
import { Link } from 'react-router-dom';
import { TabEnum } from '../../enum/TabEnum';

interface HomeProps {
  setCurr: (tab: TabEnum) => void;
}

const HomePage: React.FC<HomeProps> = ({ setCurr }) => {  
  return (
    <div className='h-full w-full text-white overflow-auto'>
      <div className='w-full items-center'>
        <div className='space-y-8'>
          <div className='flex space-x-5 items-center justify-between w-10/12'>
            <h1 className='text-3xl md:text-6xl font-bold text-left'>Hugo MILAIR</h1>
            <img className='rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48' src='/profile_picture.jpg' alt="Hugo Milair picture" />
          </div>
          
          <div className='space-y-4'>
            <div className='text-xl md:text-2xl font-semibold text-left'>French student in Computer Science at the <a className='link-underlined' href='https://www.utc.fr/' target="_blank" rel="noreferrer">UTC</a>. Specialized in IT Systems</div>
            <div className='text-xl md:text-2xl font-semibold text-left'>IT Risk Governance and DevOps Intern at <a className='link-underlined' href='https://evertrust.io/' target="_blank" rel="noreferrer">EVERTRUST</a>, Paris.</div>
          </div>
          <p className=' text-gray-300 text-lg md:text-xl'>
            Threw my studies, my projects and my internships, I have been looking to develop my skills and knowledge in IT Systems and IT Security. 
          </p>
          <p className=' text-gray-300 text-lg md:text-xl'>
            Check out my <Link className='link-underlined' to='/resume' onClick ={()=>setCurr(TabEnum.DIPLOMA)}>resume</Link> and my <Link className='link-underlined' to='/projects' onClick ={()=>setCurr(TabEnum.PROJECTS)}>projects</Link> to know more about me, and let's connect on the social networks
             below!
          </p>
          <ContactBar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
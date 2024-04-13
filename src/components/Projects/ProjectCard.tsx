import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    link : string;
    image: string;
    technos: string[];
  }
  

const ProjectCard : React.FC<ProjectCardProps> = ({title, description, link, image, technos}) =>{

  const [iconSize, setIconSize] = useState(window.innerWidth <= 600 ? 20 : window.innerWidth  <= 800 ? 28: 38);

  useEffect(() => {
      const handleResize = () => {
          setIconSize(window.innerWidth <= 600 ? 20 : window.innerWidth  <= 800 ? 28: 38);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
    return (
      <div className='h-full w-full bg-slate-50 rounded-xl shadow-lg flex flex-col justify-between pb-4 space-y-1'>
        <div className='flex flex-col h-3/4 w-full'>
          <div className='flex justify-between space-x-2 h-fit w-full items-center bg-slate-300 px-4 py-2 rounded-t-xl'>
            <img src={image} alt='project' className='rounded-full max-w-14 h-8 md:h-12'/>
            <div className='text-end text-black font-semibold text-sm md:text-xl text-wrap'>
              {title}
            </div>
          </div>
            <div className='h-full text-black font-normal text-xs md:text-base px-4 py-2 italic'>
              <p>{description}</p>
            </div>
        </div>
        <div className='flex items-center justify-between px-4 h-1/4'>
          <div className='flex items-center w-10/12 text-black justify-start text-wrap text-xs md:text-base'>
            <div className='w-2 h-2 md:w-3 md:h-3 mr-2 bg-lime-500 rounded-full min-w-2' />
            <span>{technos.join(', ')}</span>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <FaGithub size={iconSize} color='black' />
          </a>
        </div>
    </div>
    )
}

export default ProjectCard;
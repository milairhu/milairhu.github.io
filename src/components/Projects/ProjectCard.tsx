import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    link : string;
    image: string;
    technos: string[];
  }
  

const ProjectCard : React.FC<ProjectCardProps> = ({title, description, link, image, technos}) =>{
    return (
      <div className='h-full w-full bg-slate-50 rounded-xl shadow-lg flex flex-col justify-between pb-4'>
        <div className='flex flex-col h-3/4 w-full'>
          <div className='flex justify-between space-x-4 h-fit w-full items-center bg-slate-300 px-4 py-2 rounded-t-xl'>
            <img src={image} alt='project' className='rounded-full h-12'/>
            <div className='flex text-end  text-black font-semibold text-2xl truncate'>
              {title}
            </div>
          </div>
            <div className='h-full text-black font-normal text-xl px-4 py-2 italic'>
              <p>{description}</p>
            </div>
        </div>
        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center w-10/12 text-black justify-start truncate text-xl'>
            <div className='w-3 h-3 mr-2 bg-lime-500 rounded-full min-w-3' />
            <span>{technos.join(', ')}</span>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <FaGithub size={38} color='black' />
          </a>
        </div>
    </div>
    )
}

export default ProjectCard;
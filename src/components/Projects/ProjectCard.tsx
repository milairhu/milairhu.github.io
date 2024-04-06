import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    link : string;
    image: string;
  }
  

const ProjectCard : React.FC<ProjectCardProps> = ({title, description, link, image}) =>{
    return (
      <div className=' bg-slate-50 rounded-xl shadow-lg flex flex-col justify-between pb-4'>
        <div>
          <div className='flex justify-between w-full h-1/4 items-center bg-slate-300 px-4 py-2 rounded-t-xl'>
            <img src={image} alt='project' className='rounded-full h-full'/>
            <div className=' text-black font-semibold text-2xl'>
              {title}
            </div>
          </div>
          <div>
            <p className='text-black font-normal text-lg px-4 py-2'>
              {description}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-end w-full px-4'>
          <a href={link} target="_blank" rel="noreferrer">
            <FaGithub size={38} color='black' />
          </a>
        </div>
    </div>
    )
}

export default ProjectCard;
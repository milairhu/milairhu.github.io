import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link : string;
    image: string;
  }
  

const ProjectCard : React.FC<ProjectCardProps> = ({title, description, link, image}) =>{
    return (
        <div className=' bg-slate-50 rounded-xl shadow-lg pb-4 '>
          <div className='flex justify-between w-full h-1/4 items-center bg-slate-300 px-4 py-2 rounded-t-xl'>
            <img src={image} alt='project' className='rounded-full h-full'/>
            <div className=' text-black font-semibold text-xl'>
              {title}
            </div>
          </div>
        </div>
    )
}

export default ProjectCard;
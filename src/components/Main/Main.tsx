import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav/SideNav';
import { TabEnum } from '../../enum/TabEnum';
import HomePage from '../Home/HomePage';
import ResumePage from '../Resume/ResumePage';
import ProjectsPage from '../Projects/ProjectsPage';

interface MainPageProps {
  tab : TabEnum;
}

const MainPage: React.FC<MainPageProps> = ({tab}) => {
    const [curr, setCurr] = useState<TabEnum>(tab);

    const [isVertical, setIsVertical] = useState<boolean>(window.innerWidth >=600);

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerWidth >=750);
        };
        console.log("Walex wonderful portfolio : https://walex999.github.io/Website")

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    return(
      isVertical?
        <div className="flex h-full w-full bg-slate-800 items-center ">
          <div className='h-full ml-6 md:ml-8 flex items-center space-x-6 md:space-x-10'>
            <SideNav isVertical={isVertical} currTab={curr} tabSetter={setCurr} />
            <div className='h-4/6 border-r border-white'/>
          </div>
          <div className='flex w-full h-full justify-center items-center'>
            <div className=" h-5/6 w-11/12">
              {
                  curr === TabEnum.HOME ? <HomePage setCurr={setCurr} />
                  :
                  curr === TabEnum.DIPLOMA? <ResumePage />
                  :
                  curr === TabEnum.PROJECTS && <ProjectsPage /> 
              }
          </div>
          </div>
        </div>
        :
        <div className={`flex flex-col h-full w-full bg-slate-800 items-center justify-start  ${isVertical && 'pt-2' }`} >
        <div className='flex w-full items-start justify-center'>
            <SideNav isVertical={isVertical} currTab={curr} tabSetter={setCurr} />
          </div>
          <div className='flex w-full h-5/6 justify-center items-center'>
            <div className=" h-full w-11/12">
              {
                  curr === TabEnum.HOME ? <HomePage setCurr={setCurr} />
                  :
                  curr === TabEnum.DIPLOMA? <ResumePage />
                  :
                  curr === TabEnum.PROJECTS && <ProjectsPage /> 
              }
            </div>
          </div>
        </div>
        
    )
}

export default MainPage
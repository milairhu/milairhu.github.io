import React, { useState } from 'react';
import SideNav from '../SideNav/SideNav';
import { TabEnum } from '../../enum/TabEnum';
import HomePage from '../Home/HomePage';
import ResumePage from '../Resume/ResumePage';

interface MainPageProps {
  tab : TabEnum;
}

const MainPage: React.FC<MainPageProps> = ({tab}) => {
    const [curr, setCurr] = useState<TabEnum>(tab);
    

    return(
        <div className="flex h-full w-full bg-slate-800 items-center ">
          <div className='h-full ml-8 flex items-center space-x-4'>
            <SideNav currTab={curr} tabSetter={setCurr} />
            <div className='h-4/6 border-r border-white'/>
          </div>
          <div className='flex w-full h-full justify-center items-center'>
            <div className=" h-5/6 w-11/12">
              {
                  curr === TabEnum.HOME ? <HomePage />
                  :
                  curr === TabEnum.DIPLOMA? <ResumePage />
                  :
                  curr === TabEnum.PROJECTS && <HomePage /> 
              }
          </div>
          </div>
          
        </div>
        
    )
}

export default MainPage
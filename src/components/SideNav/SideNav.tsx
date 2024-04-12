import React, { useEffect, useState } from 'react';
import { ReactComponent as DiplomaSVG} from '../../icons/diploma.svg';
import { ReactComponent as ProjectsSVG} from '../../icons/projects.svg';
import { ReactComponent as HomeSVG  } from '../../icons/home.svg';
import { TabEnum } from '../../enum/TabEnum';
import { Link } from 'react-router-dom';

interface SideNavProps {
  currTab: string;
  tabSetter: (tab: TabEnum) => void;
  isVertical: boolean;
}


const SideNav: React.FC<SideNavProps> = ({ currTab, tabSetter, isVertical }) => {


  return (
    
      isVertical ?
      <div className=" bg-slate-300 rounded-full h-2/6 md:h-1/2 px-1 md:px-2  flex flex-col justify-evenly items-center">
        <div className={`${currTab === TabEnum.HOME && 'bg-white'} rounded-full w-fit p-2 `}>
          <Link to ="/"><HomeSVG className=" w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={()=> tabSetter(TabEnum.HOME)}/></Link>
        </div>
        <div className={`${currTab === TabEnum.DIPLOMA && 'bg-white'} rounded-full  w-fit p-2`}>
          <Link to ="/resume"><DiplomaSVG className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={()=> tabSetter(TabEnum.DIPLOMA)} /></Link>
        </div>
        <div className={`${currTab === TabEnum.PROJECTS && 'bg-white'} rounded-full  w-fit p-2`}>
          <Link to ="/projects"><ProjectsSVG className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={()=> tabSetter(TabEnum.PROJECTS)} /></Link>  
        </div>
    </div>
    :
    <div className="w-10/12 bg-slate-300 rounded-full h-1/6 py-6 flex justify-evenly items-center justify-center">
      <div className={`${currTab === TabEnum.HOME && 'bg-white'} rounded-full w-fit p-2 `}>
        <Link to ="/"><HomeSVG className=" w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={()=> tabSetter(TabEnum.HOME)}/></Link>
      </div>
      <div className={`${currTab === TabEnum.DIPLOMA && 'bg-white'} rounded-full  w-fit p-2`}>
        <Link to ="/resume"><DiplomaSVG className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={()=> tabSetter(TabEnum.DIPLOMA)} /></Link>
      </div>
      <div className={`${currTab === TabEnum.PROJECTS && 'bg-white'} rounded-full  w-fit p-2`}>
        <Link to ="/projects"><ProjectsSVG className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={()=> tabSetter(TabEnum.PROJECTS)} /></Link>  
      </div>
  </div>
  
      
  );
}

export default SideNav;

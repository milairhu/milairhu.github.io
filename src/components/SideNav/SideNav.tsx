import React from 'react';
import { ReactComponent as DiplomaSVG} from '../../icons/diploma.svg';
import { ReactComponent as ProjectsSVG} from '../../icons/projects.svg';
import { ReactComponent as HomeSVG  } from '../../icons/home.svg';
import { TabEnum } from '../../enum/TabEnum';
import { Link } from 'react-router-dom';

interface SideNavProps {
  currTab: string;
  tabSetter: (tab: TabEnum) => void;
}


const SideNav: React.FC<SideNavProps> = ({ currTab, tabSetter }) => {


  return (
      <div className=" bg-slate-300 rounded-full h-1/2 px-2  flex flex-col justify-evenly items-center">
        <div className={`${currTab === TabEnum.HOME && 'bg-white'} rounded-full w-fit p-2 `}>
          <Link to ="/"><HomeSVG className="w-10 h-10 cursor-pointer" onClick={()=> tabSetter(TabEnum.HOME)}/></Link>
        </div>
        <div className={`${currTab === TabEnum.DIPLOMA && 'bg-white'} rounded-full  w-fit p-2`}>
          <Link to ="/resume"><DiplomaSVG className="w-10 h-10 cursor-pointer" onClick={()=> tabSetter(TabEnum.DIPLOMA)} /></Link>
        </div>
        <div className={`${currTab === TabEnum.PROJECTS && 'bg-white'} rounded-full  w-fit p-2`}>
          <Link to ="/projects"><ProjectsSVG className="w-10 h-10 cursor-pointer" onClick={()=> tabSetter(TabEnum.PROJECTS)} /></Link>  
        </div>
    </div>
  );
}

export default SideNav;

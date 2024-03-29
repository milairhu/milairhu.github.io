import React, { useEffect, useState } from 'react';
import { ReactComponent as DiplomaSVG} from '../../icons/diploma.svg';
import { ReactComponent as ProjectsSVG} from '../../icons/projects.svg';
import { ReactComponent as HomeSVG  } from '../../icons/home.svg';

enum SideNavItems {
  DIPLOMA = 'diploma',
  PROJECTS = 'projects',
  HOME = 'home'
}

const SideNav = () => {

  const [curr, setCurr] = useState<SideNavItems>(SideNavItems.HOME);

  useEffect(() => {
    console.log(curr);

  }, [curr]);

  return (
      <div className=" bg-slate-300 rounded-full h-full px-3 flex flex-col justify-evenly">
        <div className={`${curr === SideNavItems.HOME && 'bg-white'} rounded-full p-3`}>
          <HomeSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.HOME)}/>
        </div>
        <div className={`${curr === SideNavItems.DIPLOMA && 'bg-white'} rounded-full p-3`}>
          <DiplomaSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.DIPLOMA)} />
        </div>
        <div className={`${curr === SideNavItems.PROJECTS && 'bg-white'} rounded-full p-3`}>
          <ProjectsSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.PROJECTS)} />
        </div>
    </div>
  );
}

export default SideNav;

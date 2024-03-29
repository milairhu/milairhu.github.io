import React, { useEffect, useState } from 'react';
import { ReactComponent as DiplomaSVG} from '../../icons/diploma.svg';
import { ReactComponent as ProjectsSVG} from '../../icons/projects.svg';
import { ReactComponent as ContactSVG} from '../../icons/contact.svg';

enum SideNavItems {
  DIPLOMA = 'diploma',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}

const SideNav = () => {

  const [curr, setCurr] = useState<SideNavItems>(SideNavItems.DIPLOMA);

  useEffect(() => {
    console.log(curr);

  }, [curr]);

  return (
      <div className=" bg-slate-300 rounded-full h-full px-3 flex flex-col justify-evenly">
        <div className={`${curr === SideNavItems.DIPLOMA && 'bg-white'} rounded-full p-3`}>
          <DiplomaSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.DIPLOMA)} />
        </div>
        <div className={`${curr === SideNavItems.PROJECTS && 'bg-white'} rounded-full p-3`}>
          <ProjectsSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.PROJECTS)} />
        </div>
        <div className={`${curr === SideNavItems.CONTACT && 'bg-white'} rounded-full p-3`}>
          <ContactSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.CONTACT)}/>
        </div>
    </div>
  );
}

export default SideNav;

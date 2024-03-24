import React, { useState } from 'react';
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

  return (
      <div className=" bg-slate-300 rounded-full h-full px-3 flex flex-col justify-evenly">
        <DiplomaSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.DIPLOMA)} />
        <ProjectsSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.PROJECTS)} />
        <ContactSVG className="w-10 h-10 cursor-pointer" onClick={()=> setCurr(SideNavItems.CONTACT)}/>
      </div>
  );
}

export default SideNav;

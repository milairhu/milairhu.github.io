import React from 'react';
import { ReactComponent as DiplomaSVG} from '../../icons/diploma.svg';
import { ReactComponent as ProjectsSVG} from '../../icons/projects.svg';
import { ReactComponent as ContactSVG} from '../../icons/contact.svg';

const SideNav = () => {
  return (
      <div className=" bg-slate-300 rounded-full h-full py-4 px-3 flex flex-col justify-evenly">
        <DiplomaSVG className="w-10 h-10" />
        <ProjectsSVG className="w-10 h-10" />
        <ContactSVG className="w-10 h-10" />
      </div>
  );
}

export default SideNav;

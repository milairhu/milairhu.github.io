import React, { useState } from 'react';
import SideNav from '../SideNav/SideNav';
import { TabEnum } from '../../enum/TabEnum';

interface MainPageProps {
  tab : TabEnum;
}

const MainPage: React.FC<MainPageProps> = ({tab}) => {
    const [curr, setCurr] = useState<TabEnum>(tab);
    

    return(
        <div className="flex h-full w-full bg-slate-800 items-center ">
          <div className='h-2/6 ml-8'>
            <SideNav currTab={curr} tabSetter={setCurr} />
          </div>
          <div className=" h-full w-full">
            {
                /* Add content here */
            }
          </div>
        </div>
        
    )
}

export default MainPage
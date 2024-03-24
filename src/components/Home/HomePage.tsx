import React from 'react';
import SideNav from '../SideNav/SideNav';
const HomePage = () => {
  return (
    <div className="flex h-full w-full bg-slate-800 items-center ">
      <div className='h-2/6 ml-8'>
        <SideNav />
      </div>
      
      <div className=" h-full w-full">
        {/* Contenu de la partie du portfolio */}
      </div>
    </div>
  );
}

export default HomePage;
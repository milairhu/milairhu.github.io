import React from 'react';
import SideNav from '../SideNav/SideNav';
const HomePage = () => {
  return (
    <div className="flex h-full w-full bg-slate-800">
      <div className='h-full'>
        <SideNav />
      </div>
      
      <div className="flex-grow h-full w-full">
        {/* Contenu de la partie du portfolio */}
      </div>
    </div>
  );
}

export default HomePage;
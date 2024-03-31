import React from 'react';
const HomePage = () => {
  return (
    <div className='h-full w-full text-white'>
      <div className='w-full items-center'>
        <div className='space-y-8'>
          <h1 className=' text-6xl font-bold text-left'>Hugo MILAIR</h1>
          <div className='space-y-4'>
            <div className='text-2xl font-semibold text-left'>French student in Computer Science at the <a href='https://www.utc.fr/' target="_blank">UTC</a>. Specialized in IT Systems</div>
            <div className='text-2xl font-semibold text-left'>Intern at <a href='https://evertrust.io/' target="_blank">EVERTRUST</a>, Paris. IT Risk Compliance and DevOps</div>
          </div>
          <p className=' text-gray-300 text-xl'>
            Threw my studies, my projects and my internships, I am looking to develop my skills and knowledge in IT Systems and IT Security. 
          </p>
          <div>
            <h2 className='text-4xl'>Let's connect!</h2>
          </div>
          
  
        </div>
        

      </div>
    </div>
  );
}

export default HomePage;
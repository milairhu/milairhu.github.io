import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactComponent as LeetCodeSVG  } from '../../icons/leetcode.svg';

const ContactBar: React.FC = () => {
  return (
    <div className="flex space-x-3 w-fit">
      <a href="https://github.com/milairhu" target="_blank" >
        <FaGithub size={32} />
      </a>
      <a href="https://www.linkedin.com/in/hugo-milair/" target="_blank" >
        <FaLinkedin size={32} />
      </a>
      <div className='flex rounded-full bg-white w-8 items-center justify-center'>
        <a href='https://leetcode.com/HugoMil/' target='_blank'>
            <LeetCodeSVG className='h-6 w-6'  />
        </a>
      </div>
      
    </div>
  );
}

export default ContactBar;
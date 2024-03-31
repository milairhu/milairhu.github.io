import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactBar: React.FC = () => {
  return (
    <div className="flex space-x-3 w-fit">
      <a href="https://github.com/milairhu" target="_blank" >
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/hugo-milair/" target="_blank" >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
}

export default ContactBar;
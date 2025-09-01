import React from 'react';
import './Tech-stack.css'

interface Tech_stackProps {
  tech: string;
  url: string;
}
const Tech_stack: React.FC <Tech_stackProps> = ({ tech, url }) => {

  return (
     <div className='cotainerTech'>
        <img src={url} alt={tech} />
     </div>
  );
};

export default Tech_stack;
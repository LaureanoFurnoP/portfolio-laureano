import React from 'react';
import './circle-t.css'

interface Cicle_tProps {
  tech: string;
  url: string;
  onClick?: () => void;
  isSelected: boolean
}
const Cicle_t: React.FC <Cicle_tProps> = ({ tech, url, onClick, isSelected  }) => {

  return (
     <div onClick={onClick} className={`tech-circle ${isSelected ? "circle-selected" : ""}`}>
        {url && <img className='circle-tech' src={url} alt="tech-circle" />}
        {tech && <img className='tech-c' src={tech} alt="tech" />}
     </div>
  );
};

export default Cicle_t;
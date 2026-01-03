import React from 'react';
import './circle-t.css'

interface Circle_tProps {
  tech: string;
  url: string;
  onClick?: () => void;
  isSelected: boolean
}
const Circle_t: React.FC <Circle_tProps> = ({ tech, url, onClick, isSelected  }) => {

  return (
     <div onClick={onClick} className={`tech-circle ${isSelected ? "circle-selected" : ""}`}>
        {url && <img className='circle-tech' src={url} alt="tech-circle" />}
        {tech && <img className='tech-c' src={tech} alt="tech" />}
     </div>
  );
};

export default Circle_t;
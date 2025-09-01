import React from 'react';
import './circle-gigant.css'

interface Circle_gigantProps {
  Study: string;
  url: string;
  date: string
}
const Circle_gigant: React.FC <Circle_gigantProps> = ({ Study, url, date }) => {

  return (
     <div className='Study-circle'>
        <img className='circle-study' src={url} alt="" />
        <h3>{Study}</h3>
        <p>{date}</p>
     </div>
  );
};

export default Circle_gigant;
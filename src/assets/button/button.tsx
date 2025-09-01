import React from 'react';
import './style.css'
import { useEffect, useRef } from 'react';

interface ButtonProps {
  url: string;
  label: string;
  type: number;
}
const Button: React.FC <ButtonProps> = ({ url, label, type }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() =>{
    if (!buttonRef.current) return;

    switch(type){
      case 1:
        buttonRef.current.classList.add('btn-type1');
        break;
      case 2: 
        buttonRef.current.classList.add('btn-type2');
        break;
    }
  })
  return (
    <button ref={buttonRef} className='btn-banner' onClick={() => location.href = url}>
      {label}
    </button>
  );
};

export default Button;
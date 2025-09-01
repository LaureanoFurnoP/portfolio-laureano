import { useState } from 'react';
import React from 'react';
import './style.css'
import logo from '../../images/LogoLau.png'
const HeaderBar: React.FC = () => {
  const [MenuOp, setMenuOpen] = useState(false)
  function MenuOpen(){
    setMenuOpen(!MenuOp)
    if(MenuOp == true){
      document.querySelector('.Menu-Responsive')?.classList.add('Open-menu')
    }else{
      document.querySelector('.Menu-Responsive')?.classList.remove('Open-menu')
    }
  }
  window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        document.querySelector('Header')?.classList.add('colorMenuScroll')
      }else{
        document.querySelector('Header')?.classList.remove('colorMenuScroll')
      }
    });
  return (
  <>
    <header>
        <div className='Header-bar'>
            <img className='logo-image' src={logo} alt="Logo" />
            <ul>
                <li><a href="#about-me">SOBRE MI</a></li>
                <li><a href="#experiencie">EXPERIENCIA LABORAL</a></li>
                <li><a href="#projects">PROYECTOS</a></li>
                <li><a href="#contact">CONTACTAR</a></li>
            </ul>
            <svg onClick={() => MenuOpen()} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
    </header>
    <div className='Menu-Responsive'>
      <ul>
        <li><a href="#about-me">SOBRE MI</a></li>
        <li><a href="#experiencie">EXPERIENCIA LABORAL</a></li>
        <li><a href="#projects">PROYECTOS</a></li>
        <li><a href="#contact">CONTACTAR</a></li>
      </ul>
    </div>
    </>
  );
};

export default HeaderBar;
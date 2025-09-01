import React from 'react';
import HeaderBar from '../../assets/header/header';
import imageBanner from '../../images/banner-image.webp'
import './style.css'
import Button from '../../assets/button/button';
// signs
import aard from '../../images/aard.webp'
import igni from '../../images/ignis.webp'
import axii from '../../images/axii.webp'
import quen from '../../images/quen.webp'
import yrden from '../../images/yrden.webp'

const Banner: React.FC = () => {
  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.86)), url(${imageBanner})`}} className='banner-Container'>
        <HeaderBar />
        <div className='box-CSig'>
            <hr />
            
            <div className='Box-containerRunes'>
                <div className='upper-Signs'>
                    <img src={aard} className='sign sign-right aard' alt="" />
                    <div className='line-Top'></div>
                    <img src={igni} className='sign sign-left igni'  alt="" />
                </div>
                <div className='InformationBanner'>
                    <h3>LAUREANO FURNO</h3>
                    <h1>FULL-STACK <span>DEVELOPER</span></h1>
                    <p>Desarrollador full-stack, enfocado en aprender y construir aplicaciones web modernas y funcionales, apasionado de la creación de soluciones a problematicas y con muchas ganas de crecer, aprender y participar en proyectos.</p>
                    <div className='btn-Container-banner'>
                        <Button label={'Contact'} url={'#contacts'} type={1}/>
                        <Button label={'Ver Proyectos'} url={'#contacts'} type={2}/>
                    </div>
                </div>
                <div className='down-Signs'>
                    <img src={axii} className='sign sign-right axii' alt="" />
                    <div className='line-Down'></div>
                    <img src={yrden} className='sign sign-central yrden' alt="" />
                    <div className='line-Down'></div>
                    <img src={quen} className='sign sign-left quen' alt="" />
                </div>
            </div>
            
            <hr />
        </div>
    </div>
  );
};

export default Banner;
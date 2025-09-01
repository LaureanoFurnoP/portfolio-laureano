import React, { useState} from 'react';
import './style.css'
//tech
//software
import figma from '../../images/tec/figma_logo.svg'
import drawio from '../../images/tec/Diagrams.png'
//BACKEND
import nodeIcon from '../../images/tec/nodeIcon.svg'
import js from '../../images/tec/jsIcon.svg'
import express from '../../images/tec/expressIcon.svg'
//frontend
import react from '../../images/tec/reactIcon.svg'
import html from '../../images/tec/HTML5_logo_and_wordmark.svg'
import css from '../../images/tec/CSS.svg'
import bootstrap from '../../images/tec/Bootstrap_logo.svg'
//database
import postgreSQL from '../../images/tec/Postgresql_elephant.svg'
//import mysql from '../../images/tec/MySQL-logo.svg'
//techEnd
import circle from '../../images/Circle_tech.png'
import Cicle_t from '../../assets/circle-t/cicle-t.tsx';

import Schub from '../../images/SchubLogo.png'
import Freelancer from '../../images/freelancer-logo.png'

import igni from '../../images/ignis.webp'

const Jobs: React.FC = () => {
  const [selected, ] = useState<string | null>("na");

  return (
    <section className='Jobs-container'>
        <div className='box-CSig jobs'>
            <hr className='hr-jobs'/>
            
            <div className='Box-containerRunes jobs-runes'>
                <div className='upper-Signs'>
                    <img src={igni} className='sign sign-right jobs-right-ard aard' alt="" />
                    <div className='line-Top'></div>
                </div>
                <div className='Jobs-Containers'>
                  <div className='Job-1 Job-list'>
                    <Cicle_t tech={Schub} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                    <div className='box-about-me study'>
                      <div className='up-Tec-X'>
                        <p>Actualmente estoy trabajando como freelancer en Schub, terminando la herramienta que comenzamos en la internship. Estoy desarrollando mejores habilidades para trabajar y también aprendiendo tecnologías como AWS, Kubernetes y Docker.</p>
                        <p>2025-Actualidad</p>
                      </div>
                      <div className='tecStudy'>
                        <Cicle_t tech={figma} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={express} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={postgreSQL} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={html} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={nodeIcon} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={drawio} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={react} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={js} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                      </div>
                    </div>
                  </div>
                  <div className='Job-1 Job-list'>
                    <Cicle_t tech={Schub} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                    <div className='box-about-me study'>
                      <div className='up-Tec-X'>
                        <p>Tuve la oportunidad de ampliar significativamente mis conocimientos y, al mismo tiempo, desarrollar habilidades cruciales como la adaptabilidad y el trabajo en equipo. Mis mentores me brindaron una guía invaluable, ayudándome a desenvolverme en el entorno laboral y a aprender sobre tecnologías de vanguardia como API, bases de datos PostgreSQL y las mejores prácticas de seguridad web.</p>
                        <p>2024-2024</p>
                      </div>
                      <div className='tecStudy'>
                        <Cicle_t tech={figma} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={express} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={postgreSQL} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={html} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={nodeIcon} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={drawio} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={bootstrap} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={js} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                      </div>
                    </div>
                  </div>
                  <div className='Job-1 Job-list'>
                    <Cicle_t tech={Freelancer} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                    <div className='box-about-me study'>
                      <div className='up-Tec-X'>
                        <p>Trabajé estrechamente con un equipo para crear diseños para folletos, revistas, portadas y otros materiales gráficos y trabajos de desarrollo web.</p>
                        <p>2023-2024</p>
                      </div>
                      <div className='tecStudy'>
                        <Cicle_t tech={figma} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={html} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={css} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                        <Cicle_t tech={js} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Jobs;
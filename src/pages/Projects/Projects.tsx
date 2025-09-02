import React, { useState} from 'react';
import './style.css'
//tech
//software
import figma from '../../images/tec/figma_logo.svg'
//BACKEND
import js from '../../images/tec/jsIcon.svg'
import html from '../../images/tec/HTML5_logo_and_wordmark.svg'
import css from '../../images/tec/CSS.svg'
//import mysql from '../../images/tec/MySQL-logo.svg'
//techEnd
import circle from '../../images/Circle_tech.webp'
import Cicle_t from '../../assets/circle-t/cicle-t.tsx';
import visualN from '../../images/projects/VisualNovel.webp'
import serium360 from '../../images/projects/serium.webp'
import voxaive from '../../images/projects/voxaive.webp'
import { Image } from 'antd';

const Projects: React.FC = () => {
  const [selected, ] = useState<string | null>("na");
  window.addEventListener('scroll', () => {
    if(window.scrollY > 800){
      document.querySelector('.fog-left')?.classList.add('fog-animation-left')
      document.querySelector('.fog-left')?.classList.remove('fog-animation-remove-left')
    }else{
      document.querySelector('.fog-left')?.classList.remove('fog-animation-left')
      document.querySelector('.fog-left')?.classList.add('fog-animation-remove-left')
    }
  });
  return (
    <section id='works-projects' className='Projects-container'>
      <div className='fogs-projects'>
        <div className='fog-left'></div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1000" className='containerTXT-Proj'>
        <h2>MIS <span>TRABAJOS</span></h2>
        <div className='centr-Projects'>
          <div className='box-about-me study project'>
            <Image className='ProjectImage'
              src={serium360}
            />
            <div className='up-Tec-X'>
              <p>Una landing page para un emprendimiento de seguridad e higiene, donde se presentan sus servicios de manera clara y accesible. La página incluye un formulario de contacto y múltiples opciones de comunicación para facilitar el acceso de los clientes a la empresa.</p>
              <p>Febrero 2025 - Febrero 2025</p>
              <a className='Certificado' href="https://serium360.com/">Ver página</a>
            </div>
            <div className='tecStudy'>
              <Cicle_t tech={figma} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={css} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={html} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={js} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
            </div>
          </div>
          <div className='box-about-me study project'>
            <Image className='ProjectImage'
              src={visualN}
            />
            <div className='up-Tec-X'>
              <p>Echoes of Blood es un proyecto escolar hecho en HTML, CSS y JavaScript vanilla. Te pone en la piel de un detective en Londres, 1910, investigando una serie de asesinatos. Solo se completó el primer acto, por lo que hoy está disponible como demo.</p>
              <p>Abril 2024 - Diciembre 2025</p>
              <a className='Certificado' href="https://gastonq12.github.io/VisualNovel/">Ver página</a>
            </div>
            <div className='tecStudy'>
              <Cicle_t tech={figma} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={css} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={html} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={js} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
            </div>
          </div>
          <div className='box-about-me study project'>
            <Image className='ProjectImage'
            src={voxaive}
            />
            <div className='up-Tec-X'>
              <p>Diseñé y desarrollé una página web para el grupo de trabajo freelancer que formé junto a excompañeros de la secundaria técnica. En ella presentamos nuestros proyectos de diseño gráfico, diseño web y desarrollo de páginas. El sitio funciona como portafolio colectivo y vitrina para nuestros servicios.</p>
              <p>Noviembre 2024 - Diciembre 2025</p>
              <a className='Certificado' href="https://voxaive.cloud/">Ver página</a>
            </div>
            <div className='tecStudy'>
              <Cicle_t tech={figma} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={css} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={html} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
              <Cicle_t tech={js} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
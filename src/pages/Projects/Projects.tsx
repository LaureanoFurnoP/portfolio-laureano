import React, { useEffect, useState} from 'react';
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
import visualN from '../../images/projects/VisualNovel.webp'
import serium360 from '../../images/projects/serium.webp'
import voxaive from '../../images/projects/voxaive.webp'
import imageMap from '../../images/map.webp'
import Project from '../../assets/box-Project/Project.tsx';

import Circle_t from '../../assets/circle-t/Circle_t.tsx';

//iconsProject
import voxaiveIcon from '../../images/projects/Icons/Logo_voxaive.webp'
import seriumIcon from '../../images/projects/Icons/logo.webp'
import novelIcon from '../../images/projects/Icons/icono.png'

interface TechURL {
    tech: string;
    circle: string;
}
interface DataProject {
    principalImage: string;
    url: string;
    tech: TechURL[];
    text: string;
    date: string;
}
const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject ]= useState<DataProject>({
    principalImage: serium360,
    url: "https://serium360.com/",
    tech: [{tech: figma, circle: circle}, {tech: css, circle: circle}, {tech: html, circle: circle}, {tech: js, circle: circle}],
    text: "Una landing page para un emprendimiento de seguridad e higiene, donde se presentan sus servicios de manera clara y accesible. La página incluye un formulario de contacto y múltiples opciones de comunicación para facilitar el acceso de los clientes a la empresa.",
    date: "Febrero 2025 - Febrero 2025",
  })
  const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 950);


  window.addEventListener('scroll', () => {
    if(window.scrollY > 800){
      document.querySelector('.fog-left')?.classList.add('fog-animation-left')
      document.querySelector('.fog-left')?.classList.remove('fog-animation-remove-left')
    }else{
      document.querySelector('.fog-left')?.classList.remove('fog-animation-left')
      document.querySelector('.fog-left')?.classList.add('fog-animation-remove-left')
    }
  });

  const openSerium = () =>{
    setSelectedProject({
      principalImage: serium360,
      url: "https://serium360.com/",
      tech: [{tech: figma, circle: circle}, {tech: css, circle: circle}, {tech: html, circle: circle}, {tech: js, circle: circle}],
      text: "Una landing page para un emprendimiento de seguridad e higiene, donde se presentan sus servicios de manera clara y accesible. La página incluye un formulario de contacto y múltiples opciones de comunicación para facilitar el acceso de los clientes a la empresa.",
      date: "Febrero 2025 - Febrero 2025",
    })
  }

  const openVisualN = () =>{
    setSelectedProject({
      principalImage: visualN,
      url: "https://gastonq12.github.io/VisualNovel/",
      tech: [{tech: figma, circle: circle}, {tech: css, circle: circle}, {tech: html, circle: circle}, {tech: js, circle: circle}],
      text: "Echoes of Blood es un proyecto escolar hecho en HTML, CSS y JavaScript vanilla. Te pone en la piel de un detective en Londres, 1910, investigando una serie de asesinatos. Solo se completó el primer acto, por lo que hoy está disponible como demo.",
      date: "Abril 2024 - Diciembre 2025",
    })
  }

  const openVoxaive = () =>{
    setSelectedProject({
      principalImage: voxaive,
      url: "https://voxaive.cloud/",
      tech: [{tech: figma, circle: circle}, {tech: css, circle: circle}, {tech: html, circle: circle}, {tech: js, circle: circle}],
      text: "Diseñé y desarrollé una página web para el grupo de trabajo freelancer que formé junto a excompañeros de la secundaria técnica. En ella presentamos nuestros proyectos de diseño gráfico, diseño web y desarrollo de páginas. El sitio funciona como portafolio colectivo y vitrina para nuestros servicios.",
      date: "Noviembre 2024 - Diciembre 2025",
    })
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 950);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id='works-projects' className='Projects-container'>
      <div className="map-wrapper">
        <img src={imageMap} className="map-image" />
        <div className="marker seriumIcon" onClick={() => openSerium()}><Circle_t tech={seriumIcon} url={circle} isSelected={false}/></div>
        <div className="marker visualN" onClick={() => openVisualN()}><Circle_t tech={novelIcon} url={circle} isSelected={false}/></div>
        <div className="marker voxaive" onClick={() => openVoxaive()}><Circle_t tech={voxaiveIcon} url={circle} isSelected={false}/></div>
      </div>

      <div data-aos="fade-down" data-aos-duration="1000" className='containerTXT-Proj'>
        <h2>MIS <span>TRABAJOS</span></h2>
        <div className='centr-Projects'>
          {!isDesktop ? (
            <>
                <Project
                  principalImage={serium360}
                  url="https://serium360.com/"
                  tech={[{ tech: figma, circle }, { tech: css, circle }, { tech: html, circle }, { tech: js, circle }]}
                  text="Una landing page para un emprendimiento de seguridad e higiene, donde se presentan sus servicios de manera clara y accesible. La página incluye un formulario de contacto y múltiples opciones de comunicación para facilitar el acceso de los clientes a la empresa."
                  date="Febrero 2025 - Febrero 2025"
                />

                <Project
                  principalImage={visualN}
                  url="https://gastonq12.github.io/VisualNovel/"
                  tech={[{ tech: figma, circle }, { tech: css, circle }, { tech: html, circle }, { tech: js, circle }]}
                  text="Echoes of Blood es un proyecto escolar hecho en HTML, CSS y JavaScript vanilla. Te pone en la piel de un detective en Londres, 1910, investigando una serie de asesinatos. Solo se completó el primer acto, por lo que hoy está disponible como demo."
                  date="Abril 2024 - Diciembre 2025"
                />

                <Project
                  principalImage={voxaive}
                  url="https://voxaive.cloud/"
                  tech={[{ tech: figma, circle }, { tech: css, circle }, { tech: html, circle }, { tech: js, circle }]}
                  text="Diseñé y desarrollé una página web para el grupo de trabajo freelancer que formé junto a excompañeros de la secundaria técnica. En ella presentamos nuestros proyectos de diseño gráfico, diseño web y desarrollo de páginas. El sitio funciona como portafolio colectivo y vitrina para nuestros servicios."
                  date="Noviembre 2024 - Diciembre 2025"
                />
            </>
          ) : (
            <Project
              principalImage={selectedProject.principalImage}
              url={selectedProject.url}
              tech={selectedProject.tech}
              text={selectedProject.text}
              date={selectedProject.date}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
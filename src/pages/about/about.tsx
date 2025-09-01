import React, {useEffect, useState} from 'react';
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
import mysql from '../../images/tec/MySQL-logo.svg'
//techEnd
import circle from '../../images/Circle_tech.png'
import circleGigant from "../../images/Circle-middle.png"
import Cicle_t from '../../assets/circle-t/cicle-t.tsx';
import Et32 from '../../images/Et32.png'
import aprende from '../../images/AprendeProg.png'
import Circle_gigant from '../../assets/Circle-gigant/circle-gigant.tsx';
import Tech_stack from '../../assets/tech-stack/Tech-stack';

interface StudyInfo {
  parrafo: string;
  parrafo2: string;
  cert: string;
  tecs: Tec[];
}
interface Tec {
  tec: string;
  tecInfo: string;
}
interface StudyInfWhell{
  title: string;
  date: string;
}
const About: React.FC = () => {
  const [selected, setSelected] = useState<string | null>("et32");
  const [listTecsSelect, setListTecsS] =useState<Tec[]>([{tec: nodeIcon, tecInfo: "node.js"}, {tec: js, tecInfo: "JavaScript"}, {tec: express, tecInfo: "Express"}]);

  const [studyinfo, setStudy] =useState<StudyInfo>({
    parrafo: `Asistí a un secundario técnico, donde en cuarto año comencé la orientación en computación. Allí pasé por temas como Arduino con C++, Python, Java, diagramaciones, APIs REST con Node.js, HTML, CSS, PHP, MySQL, JavaScript, y fue una experiencia espectacular.`,
    parrafo2: `Me enamoré del hecho de programar y de resolver problemas. En sexto año, comenzamos materias como Desarrollo de Sistemas, donde desarrollamos una app web para gestionar torneos de eSports, y también en Prácticas Profesionalizantes, donde creamos una visual novel, entre otros proyectos que requerían documentar endpoints, realizar diagramas entidad-relación, diagramas de flujo, aplicar metodologías como Scrum, entre otros conocimientos que considero muy valiosos, sobre todo por haber tenido docentes realmente comprometidos.`,
    cert: "",
    tecs: [{tec: js, tecInfo: "JavaScript"}, {tec: html, tecInfo: "HTML"}, {tec: css, tecInfo: "CSS"}, {tec: bootstrap, tecInfo: "bootstrap"},{tec: figma, tecInfo: "Figma"}, {tec: drawio, tecInfo: "drawio"},{tec: mysql, tecInfo: "MySQL"}]
  })

  const [RStudyInf, setInfSR] = useState<StudyInfWhell>({title: "ET 32 DE 14 - GENERAL JOSE DE SAN MARTIN", date:"Febrero 2019 - Diciembre 2024"})
  window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
      document.querySelector('.fog-right')?.classList.add('fog-animation')
      document.querySelector('.fog-right')?.classList.remove('fog-animation-remove')
    }else{
      document.querySelector('.fog-right')?.classList.remove('fog-animation')
      document.querySelector('.fog-right')?.classList.add('fog-animation-remove')
    }
  });

  function selectStack(type: string){
    switch(type){
      case "software":
        document.querySelectorAll('.area-skill').forEach(element => {
          element.classList.remove('stackSelect')
        });       
        document.querySelector('.software')?.classList.add('stackSelect')
        setListTecsS([{tec: figma, tecInfo: "Figma"}, {tec: drawio, tecInfo: "drawio"}])
        break;
      case "bd":
        document.querySelectorAll('.area-skill').forEach(element => {
          element.classList.remove('stackSelect')
        });
        document.querySelector('.bd')?.classList.add('stackSelect')
        setListTecsS([{tec: mysql, tecInfo: "MySQL"}, {tec: postgreSQL, tecInfo: "PostgreSQL"}])
        break;
      case "frontend":
        document.querySelectorAll('.area-skill').forEach(element => {
          element.classList.remove('stackSelect')
        });
        document.querySelector('.frontend')?.classList.add('stackSelect')
        setListTecsS([{tec: react, tecInfo: "react"}, {tec: js, tecInfo: "JavaScript"}, {tec: html, tecInfo: "HTML"}, {tec: css, tecInfo: "CSS"}, {tec: bootstrap, tecInfo: "bootstrap"}])
        break;
      case "backend":
        document.querySelectorAll('.area-skill').forEach(element => {
          element.classList.remove('stackSelect')
        });
        document.querySelector('.backend')?.classList.add('stackSelect')
        setListTecsS([{tec: nodeIcon, tecInfo: "node.js"}, {tec: js, tecInfo: "JavaScript"}, {tec: express, tecInfo: "Express"}])
        break;    
    }
  }

  function selectStudy(study: string){
    setSelected(study)
    switch(study){
      case "et32":
        setInfSR({title: "ET 32 DE 14 - GENERAL JOSE DE SAN MARTIN", date:"Febrero 2019 - Diciembre 2024"})
        setStudy({
          parrafo: `Asistí a un secundario técnico, donde en cuarto año comencé la orientación en computación. Allí pasé por temas como Arduino con C++, Python, Java, diagramaciones, APIs REST con Node.js, HTML, CSS, PHP, MySQL, JavaScript, y fue una experiencia espectacular.`,
          parrafo2: `Me enamoré del hecho de programar y de resolver problemas. En sexto año, comenzamos materias como Desarrollo de Sistemas, donde desarrollamos una app web para gestionar torneos de eSports, y también en Prácticas Profesionalizantes, donde creamos una visual novel, entre otros proyectos que requerían documentar endpoints, realizar diagramas entidad-relación, diagramas de flujo, aplicar metodologías como Scrum, entre otros conocimientos que considero muy valiosos, sobre todo por haber tenido docentes realmente comprometidos.`,
          cert: "",
          tecs: [{tec: js, tecInfo: "JavaScript"}, {tec: html, tecInfo: "HTML"}, {tec: css, tecInfo: "CSS"}, {tec: bootstrap, tecInfo: "bootstrap"},{tec: figma, tecInfo: "Figma"}, {tec: drawio, tecInfo: "drawio"},{tec: mysql, tecInfo: "MySQL"}]
        })
        break;
      case "aprende1":
        setInfSR({title: "Aprende Programando - Desarrollo Web I", date:"Abril 2022 - Junio 2022"})
        setStudy({
          parrafo: `Cursé Desarrollo Web I en el programa Aprendé programando, este fue un curso introductivo dictado desde abril a junio donde aprendi lo fundamental de Figma, HTML y CSS, aprendiendo cosas sobre etiquetas y estilos CSS.`,
          parrafo2: ``,
          cert: "https://drive.google.com/file/d/1jN-npUspOquHLNEQqtPJPHBM0n_DRJbM/view",
          tecs: [{tec: html, tecInfo: "HTML"}, {tec: css, tecInfo: "CSS"}, {tec: bootstrap, tecInfo: "bootstrap"},{tec: figma, tecInfo: "Figma"}]
        })
        break;
      case "aprende2":
        setInfSR({title: "Aprende Programando - Python", date:"Agosto 2022 - Noviembre 2022"})
        setStudy({
          parrafo: `Cursé Desarrollo Web I Avanzado en el programa Aprendé Programando, este fue un curso avanzado dictado desde agosto a diciembre donde profundicé en HTML y CSS, aprendiendo técnicas de maquetado más complejas, diseño responsivo y buenas prácticas para el desarrollo de sitios web modernos.`,
          parrafo2: ``,
          cert: "https://drive.google.com/file/d/1PVemj_0ikmZiQStiAIk68Pc6fVSGQQ7b/view",
          tecs: [{tec: html, tecInfo: "HTML"}, {tec: css, tecInfo: "CSS"}, {tec: bootstrap, tecInfo: "bootstrap"},{tec: figma, tecInfo: "Figma"}]
        })
        break;
    }
  }
  useEffect(() =>{
    selectStack("backend")
  },[])
  return (
    <section className='aboutMe-container'>
      <div className='fogs'>
        <div className='fog-right'></div>
      </div>
      <div className='contain-about-Sections'>
        <section className='about-me'>
          <div className='box-Skills'>
            <div className='images-skills-area'>
              <div className='area-skill software' onClick={() => selectStack("software")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M280-332h260q37.8 0 63.9-26.61t26.1-64.5Q630-461 602.94-487T538-513h-9l-1-9q-7-48-43.26-79-36.27-31-84.62-31Q362-632 331-611.5 300-591 283-557l-3 5-6 1q-43.79 1.83-73.89 33.48Q170-485.88 170-441.86 170-396 202.08-364q32.09 32 77.92 32Zm0-60q-21.25 0-35.62-14.32Q230-420.65 230-441.82q0-21.18 14.38-35.68Q258.75-492 280-492h40q0-33.14 23.4-56.57T399.9-572q33.1 0 56.6 23.43T480-492v40h60q13 0 21.5 8.5T570-422q0 13-8.5 21.5T540-392H280Zm8 352v-60h62v-104H100q-24 0-42-18t-18-42v-436q0-24 18-42t42-18h600q24 0 42 18t18 42v436q0 24-18 42t-42 18H450v104h61v60H288Zm572-369v-451H204v-60h656q24 0 42 18t18 42v451h-60ZM100-264h600v-436H100v436Zm300-218Z"/></svg>
                <h3>Software</h3>
              </div>
              <div className='area-skill bd' onClick={() => selectStack("bd")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"/></svg>
                <h3>Bases de datos</h3>
              </div>
              <div className='area-skill frontend' onClick={() => selectStack("frontend")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M80-693v-87q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-780v87h-60v-87H140v87H80Zm250 573v-80H140q-24 0-42-18.5T80-260v-93h60v93h680v-93h60v93q0 23-18.5 41.5T820-200H630v80H330Zm150-403Zm-316 3 118-118-42-42L80-520l160 160 42-42-118-118Zm632 0L678-402l42 42 160-160-160-160-42 42 118 118Z"/></svg>
                <h3>Front-End</h3>
              </div>
              <div className='area-skill backend' onClick={() => selectStack("backend")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"/></svg>
                <h3>Back-End</h3>
              </div>
            </div>
            <div className='box-about-me-skills'>
              {listTecsSelect.map(function(tec, index){
                return <Tech_stack key={index} tech={tec.tecInfo} url={tec.tec} />
              })}
            </div>
          </div>

          <div className='box-about-me'>
            <h2>SOBRE <span>MI</span></h2>
            <p>Soy Laureano Furno, desarrollador full-stack. Recién me gradué de una escuela técnica en computación, donde aprendí sobre desarrollo web, Java, Python, bases de datos como MySQL, metodologías ágiles y cómo documentar y diagramar proyectos.</p>
            <p>Me gusta estar siempre en movimiento en el mundo IT: miro contenido, sigo eventos, y hago cursos o capacitaciones sobre todo lo que me llama la atención. Disfruto aprender, crear y meterme de lleno en los proyectos que me desafían.</p>
            <p>Tuve la oportunidad de participar en una internship donde pude aplicar mis habilidades en desarrollo web creando una app para la gestión de newsletters. Usé tecnologías como JavaScript, Node.js, APIs REST, PostgreSQL, además de prácticas de diagramación y trabajo en equipo. Fue una experiencia muy enriquecedora, que me permitió desenvolverme en un entorno laboral real.</p>
            <p>Después de completar las prácticas, seguí trabajando en la empresa durante seis meses más para terminar la herramienta.</p>
          </div>
        </section>

        <section className='my-studies'>
          <h2>Mis <span>Estudios</span></h2>
          <div className='SectionInf-Stu'>
            <div className='box-about-me study'>
              <div className='up-Tec-X'>
                <p>{studyinfo?.parrafo}</p>
                <p>{studyinfo?.parrafo2}</p>
                {studyinfo.cert ? <a className='Certificado' href="https://drive.google.com/file/d/1PVemj_0ikmZiQStiAIk68Pc6fVSGQQ7b/view">Ver certificado</a>: ""}
              </div>
              <div className='tecStudy'>
                {studyinfo.tecs.map(function(tec, index){
                  return <Cicle_t key={index} tech={tec.tec} url={circle} isSelected={selected === ""} onClick={() => void("n")}/>
                })}
              </div>
            </div>
            <div className="circles-wrapper">
              <div className='tecs-Responsive-my-study'>
                <Cicle_t tech={Et32} url={circle} isSelected={selected === "et32"} onClick={() => selectStudy("et32")} />
                <Cicle_t tech={aprende} url={circle} isSelected={selected === "aprende2"} onClick={() => selectStudy("aprende2")}/>
                <Cicle_t tech={aprende} url={circle} isSelected={selected === "aprende1"} onClick={() => selectStudy("aprende1")}/>
              </div>
              <div className="central">
                <Circle_gigant 
                  Study={RStudyInf.title}
                  url={circleGigant} 
                  date={RStudyInf.date}
                />
              </div>
              <div className="circle-small circle-1">
                <Cicle_t tech={Et32} url={circle} isSelected={selected === "et32"} onClick={() => selectStudy("et32")} />
              </div>
              <div className="circle-small circle-2">
                <Cicle_t tech={aprende} url={circle} isSelected={selected === "aprende2"} onClick={() => selectStudy("aprende2")}/>
              </div>
              <div className="circle-small circle-3">
                <Cicle_t tech={""} url={circle}  isSelected={selected === "none"} onClick={() => selectStudy("none")}/>
              </div>
              <div className="circle-small circle-4">
                <Cicle_t tech={aprende} url={circle} isSelected={selected === "aprende1"} onClick={() => selectStudy("aprende1")}/>
              </div>
              <div className="circle-small circle-5">
                <Cicle_t tech={""} url={circle} isSelected={selected === "none1"} onClick={() => selectStudy("none1")}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
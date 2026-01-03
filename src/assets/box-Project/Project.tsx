import { Image } from 'antd';
import { useState } from 'react';
import Circle_t from '../circle-t/Circle_t';
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
const Project : React.FC <DataProject> = ({ principalImage, url, tech, date, text }) =>{
    const [selected, ] = useState<string | null>("na");

    return(
        <>
        <div className='box-about-me study project'>
            <Image className='ProjectImage'
              src={principalImage}
            />
            <div className='up-Tec-X'>
              <p>{text}</p>
              <p>{date}</p>
              <a className='Certificado' href={url}>Ver página</a>
            </div>
            <div className='tecStudy'>
                {tech.map(tech => 
                    <Circle_t tech={tech.tech} url={tech.circle} isSelected={selected === ""} onClick={() => void("n")}/>
                )
                }
            </div>
          </div>
        </>
    )
}

export default Project
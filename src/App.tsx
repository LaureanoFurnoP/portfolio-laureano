
import './App.css'
import Banner from './pages/banner/banner.tsx'
import About from './pages/about/about.tsx'
import Jobs from './pages/Jobs/Jobs.tsx';
import Projects from './pages/Projects/Projects.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from './pages/Contact/Contact.tsx';
import Cicle_t from './assets/circle-t/cicle-t.tsx';
import circle from './images/Circle_tech.png'

import Instagram from './images/SocialMedia/Instagram.svg'
import Email from './images/SocialMedia/Email.svg'
import Linkedin from './images/SocialMedia/Linkedin.svg'
import serviceC from './images/SocialMedia/service-c.svg'
function App() {
  function despliguecont(){
    const confirm = document.querySelector(".active")
    if(confirm){
      document.querySelector('.contactsAbsolute')?.classList.remove('active')
    }else{
      document.querySelector('.contactsAbsolute')?.classList.add('active')
    }
  }
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Banner />
      <About />
      <Jobs />
      <Projects />
      <Contact />
      <div className='contactsAbsolute'>
        <div id='desplg-contacts'>
          <Cicle_t onClick={() => location.href = 'https://www.linkedin.com/in/laureano-furno-47b76730a/'} tech={Linkedin} url={circle} isSelected={false} />
          <Cicle_t onClick={() => location.href = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCBBXlHJzcZvGQgrZwvrJrdktHsCbnTMLSMMQLZprrtvRPGbrbnBFvMkZmlrCJQnRzTtXB'} tech={Email} url={circle} isSelected={false} />
          <Cicle_t onClick={() => location.href = 'https://www.instagram.com/laureano20fg/'} tech={Instagram} url={circle} isSelected={false} />
        </div>
        <Cicle_t onClick={() => despliguecont()} tech={serviceC} url={circle} isSelected={false} />
      </div>
    </>
  )
}

export default App

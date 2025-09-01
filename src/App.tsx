
import './App.css'
import Banner from './pages/banner/banner.tsx'
import About from './pages/about/about.tsx'
import Jobs from './pages/Jobs/Jobs.tsx';
import Projects from './pages/Projects/Projects.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Banner />
      <About />
      <Jobs />
      <Projects />
    </>
  )
}

export default App

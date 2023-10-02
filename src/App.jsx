import { useEffect, useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Bunners from './Components/Bunners/Bunners'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'


import './App.css'
import AnimationHorizontal from './Components/Animations/AnimationHorizontal'
import AnimationVertical from './Components/Animations/AnimationVertical'
import Reputation from './Components/Reputation/Reputation'
import AboutUs from './Components/AboutUs/AboutUs'
import { Reveal } from './Components/Animations/Reveal'
import Services from './Components/Jobs/Services'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
    
    return () => clearTimeout(delay);

  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 2;
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    
    <div className='flex-1 w-full h-screen relative'>
      {
      isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <AnimationHorizontal>
            <NavBar />
          </AnimationHorizontal>
          <AnimationVertical>
            <Bunners />
          </AnimationVertical>
          
          <Reveal>
              <Reputation />
          </Reveal>

          <Reveal>
            <AboutUs />
          </Reveal>

          <Reveal>
            <Services />
          </Reveal>

          <Reveal>
            <Experience />
          </Reveal>

          <Reveal>
            <Projects />
          </Reveal>

          <Reveal>
            <Contact />
          </Reveal>

          <Reveal>
            <Footer />
          </Reveal>

        </>
      )
    }
      
    </div>
  )
}

export default App

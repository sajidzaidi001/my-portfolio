import Image from 'next/image'
import Hero from './components/hero'
import Projects from './components/projects'
import Contact from './components/contact'
import About from './components/about'
import Skills from './components/skills'


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      

      <Contact />
      
     
     
    </div>
  )
}

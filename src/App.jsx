import './App.css'
import Bio from './components/Bio'
import Footer from './components/Footer'
import HeroArt from './components/HeroArt'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <div className='snap-x scroll-smooth'>
      <HeroArt />
      <Bio />
      <Projects />
      <Footer />
    </div>
    </>
  )
}

export default App

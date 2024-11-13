// src/pages/index.tsx
import Navbar from  './components/NavBar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;

import Navbar from './components/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import projects from './assets/projects.json';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkillIcon from './components/SkillIcon';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={
            <div className='content'>
              <Intro />
              <About />
              <Projects />
              <div className='test'>
                <SkillIcon />
              </div>
            </div>
          } />
          {projects.map((proj, i) => <Route key={proj.title} path={`/projects/${proj.title.replaceAll(' ', '').toLowerCase()}`} element={<p>{proj.title}</p>} />)}
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

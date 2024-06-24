import Navbar from './components/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';
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
              {/* <SkillIcon path='../assets/svg/c.svg' /> */}
            </div>
          } />
          {projects.map((proj, i) => <Route 
              key={proj.title}
              path={`/projects/${proj.title.replaceAll(' ', '')}`}
              element={<div className='content'>
                <Project title={proj.title.replaceAll(" ", "")} />
                </div>} 
            />
          )}
          <Route path='*' element={<div className='content'>
              <h2 style={{'paddingBottom': '5vh'}}>Page Not Found</h2>
            </div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

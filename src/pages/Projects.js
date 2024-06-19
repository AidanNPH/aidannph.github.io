import projects from '../assets/projects.json';
import ProjectIntro from '../components/ProjectIntro';
import styles from './Page.module.css';

const Projects = () => {
    return (
        <div id="projects" className={`${styles.section} ${styles.projects}`}>
            <h2>Projects</h2>
            <ul>{projects.map((proj, i) => <ProjectIntro key={i} proj={proj}/>)}</ul>
        </div>
    );
}

export default Projects;
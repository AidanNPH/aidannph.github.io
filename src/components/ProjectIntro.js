import images from '../assets/images';
import styles from './ProjectIntro.module.css';
import { Link } from 'react-router-dom';

const ProjectIntro = ({proj}) => {
    return <div className={styles.projectIntro}>
        <div className={styles.info}>
            <h3>{proj.title}</h3>
            <div className={styles.details}>
                <div className={styles.tags}>
                    {proj.tags && proj.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
                <div className={styles.description}>
                    {proj.description && <span>{proj.description}</span>}
                </div>
                <div>
                    {/* {proj.links && Object.entries(proj.links).map(([src, link], i) => <span key={i}>{`${src}: ${link}`}</span>)} */}
                </div>
                {/* <Link to={`/projects/${proj.title.replaceAll(' ', '').toLowerCase()}`}>Click here</Link> */}
            </div>
        </div>
        {proj.pic_name && <img src={images[proj.pic_name]} alt={proj.title} />}
    </div>
};

export default ProjectIntro;
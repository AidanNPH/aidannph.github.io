import { useState, useEffect } from 'react';
import images from '../assets/images';
import styles from './ProjectIntro.module.css';
import { Link, useNavigate } from 'react-router-dom';

const ProjectIntro = ({proj}) => {
    const notHoverColor = "rgb(240, 240, 240)";
    const hoverColor = "rgb(30, 80, 190)";
    const [hovering, setHovering] = useState(false);
    const [borderColor, setBorderColor] = useState(notHoverColor);
    const [cursor, setCursor] = useState("default");
    const navigate = useNavigate();

    useEffect(() => {
        setBorderColor(hovering ? hoverColor : notHoverColor);
        // setCursor(hovering ? "pointer" : "default");
    }, [hovering]);

    const handleClick = () => {
        navigate(`/projects/${proj.title.replaceAll(" ", "")}`);
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return <div className={styles.projectIntro} 
            // onClick={handleClick}
            onMouseEnter={() => { setHovering(true); }}
            onMouseLeave={() => { setHovering(false); }}
            style={{
                "borderColor": borderColor,
                "cursor": cursor
            }}
        >
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
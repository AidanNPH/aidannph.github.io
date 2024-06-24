import content from '../assets/about.json';
import styles from './Page.module.css';
import images from '../assets/images';

const About = () => {
    return (
        <div id="about" className={`${styles.section} ${styles.about}`}>
            <h2>About</h2>
            {content.background.map((item, i) => <div key={i}><p>{item}</p><br /></div>)}
            {/* <span>{content.background}</span> */}
            <h3>Skills</h3>
            <div className={styles.skills}>
                {Object.entries(content.skills).map(([area, details], i) => 
                    <div key={i} className={styles.skillArea}>
                        <span className={styles.skillTitle}>{area}</span>
                        {details.map(({title, icon_url}, i) => 
                            <div key={i} className={styles.skill}>
                                {/* <img src={require(`../assets/images/${title}.png`)} alt={title} /> */}
                                <img src={images[title]} alt={title} />
                                <p>{title}</p>
                            </div>
                        )}
                        {/* <ul className={styles.skillList}></ul> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
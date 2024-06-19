import content from '../assets/intro.json';
import styles from './Page.module.css';


const Intro = () => {
    return (
        <div id="intro" className={`${styles.section} ${styles.intro}`}>
            {/* <div className={styles.header}>
                <div>
                    <h1>{content.title}</h1>
                </div>
                <div className={styles.navLinks}>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                </div>
            </div> */}
            <h3>{content.subtitle}</h3>
            {/* {content.description.map((item, i) => <p key={i}>{item}</p>)} */}
            <p>{content.description[1]}</p>
            <span>Email: <a href='mailto: aidanphng@gmail.com'>aidanphng@gmail.com</a> | LinkedIn: <a href='https://www.linkedin.com/in/pui-him-aidan-ng'>Pui Him Aidan Ng</a> | GitHub: <a href='https://github.com/AidanNPH'>AidanNPH</a></span>
        </div>
    );
}

export default Intro;
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Scroller = ({ targetId, offset, children }) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        if (pathname !== '/') navigate('/');

        if (targetId === '#intro') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            const targetPos = target.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
            window.scrollTo({
                top: targetPos - document.documentElement.clientHeight * 0.05,
                behavior: 'smooth'
            });
        }
    };


    return <div onClick={handleClick}>{children}</div>;
};

const Navbar = () => {
    // const TOP_MARGIN_INIT = 10;
    const TOP_MARGIN_INIT = 0;
    const SIDE_MARGIN_INIT = 0;
    const HEIGHT_INIT = 150;
    const HEIGHT_OFFSET = 80;
    const PADDING_INIT = 70;
    const PADDING_OFFSET = 20;

    const MENU = [
        { name: 'About', link: '#about' },
        { name: 'Projects', link: '#projects' },
        // { name: 'Contact', link: '/contact' }
    ];

    const [toggled, setToggled] = useState(false);
    const toggle = () => setToggled(!toggled);
    const toggleFalse = () => setToggled(false);

    const [color, setColor] = useState([240, 248, 255, 1]); // R, G, B, A
    // const [height, setHeight] = useState(HEIGHT_INIT);
    // const [padding, setPadding] = useState(PADDING_INIT);
    const [topMargin, setTopMargin] = useState(TOP_MARGIN_INIT);
    const [sideMargin, setSideMargin] = useState(SIDE_MARGIN_INIT);
    const [width, setWidth] = useState(100 - 2 * SIDE_MARGIN_INIT);
    const [height, setHeight] = useState(TOP_MARGIN_INIT + 6.5);
    const { pathname } = useLocation();
    
    const onScroll = () => {
        const endTransitionY = 150;
        const currentY = window.scrollY;
        const transitionPercent = currentY >= endTransitionY ? 1 : Math.round(currentY / endTransitionY * 100) / 100;
        // console.log(`ScrollY: ${currentY} ${color[3]} ${transitionPercent}`);
        // console.log(...color.slice(0, 3))

        setColor([...color.slice(0, 3), transitionPercent]);
        // setTopMargin(TOP_MARGIN_INIT * (1 - transitionPercent));
        setSideMargin(SIDE_MARGIN_INIT * (1 - transitionPercent));
        setWidth(100 - 2 * sideMargin);
        setHeight(topMargin + 6.5);

        // if (Math.abs(color[3] - transitionPercent) > 0.05)
        //     setColor([...color.slice(0, 3), transitionPercent]);

        // const newHeight = Math.round(HEIGHT_INIT - transitionPercent * HEIGHT_OFFSET);
        // if (Math.abs(newHeight - height) > 5)
        //     setHeight(newHeight);

        // const newPadding = Math.round(PADDING_INIT - transitionPercent * PADDING_OFFSET);
        // if (Math.abs(newPadding - padding) > 5)
        //     setPadding(newPadding);

        // console.log("Called");
    }

    // useEffect(() => {
    //     if (typeof window !== 'undefined')
    //         window.addEventListener("scroll", onScroll);
    // });

    return (
        // <nav className={`${styles.navbar}`} style={{"minHeight": `${NAVBAR_HEIGHT_PX}px`, "backgroundColor": navColor}}>
        <nav
            id="navbar"
            className={`${styles.navbar}`}
            style={{
                "margin": `${topMargin}vh ${sideMargin}vw 0 ${sideMargin}vw`,
                "backgroundColor": `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
                "width": `${width}vw`
                // "padding": `10px ${padding}px`,
            }}
        >
        {/* <Scroller id="#intro" offset={height}> */}
        <Scroller targetId="#intro" offset={height/100}>
        <Link to='/' className={`${styles.logo}`}><h1>Aidan Ng</h1></Link>
            </Scroller>
            <ul className={`${styles.navMenu} ${toggled ? styles.active : ''}`}>
                {MENU.map((item, i) => (
                    <li key={i} onClick={toggleFalse}>
                        {/* <Scroller id={item.link} offset={height}> */}
                        <Scroller targetId={item.link} offset={height/100}>
                            <span className={`${styles.navLink}`}>{item.name}</span>
                        </Scroller>
                    </li>
                ))}
            </ul>

            <div className={`${styles.hamburger} ${toggled ? styles.active : ''}`}  onClick={toggle}>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
            </div>
        </nav>
    );
};

export default Navbar;
import React, {useState} from "react";
import styles from "./NavBurger.module.scss"
import {Link} from 'react-scroll';
import * as Scroll from 'react-scroll';

function NavBurger({setOpenHead}) {

    const [openMenu, setOpenMenu] = useState(false);

    const onBurgerClick = () => {
        console.log('burger')
        setOpenMenu(!openMenu);
    }
    const setOpenHeadClose = () => {
        setOpenHead(false)
    }

    const clickLink = () => {
        setOpenMenu(false)
        setOpenHeadClose()
    }

    return (
        <div className={styles.nav} >
            <div onClick={onBurgerClick} className={openMenu ? `${styles.navBurgerItems} ${styles.showMenu}` : styles.navBurgerItems}>
                <Link onClick={clickLink} className={styles.link} to={"main"} spy={true} smooth={true} offset={50}
                      duration={500}>Main</Link>
                <Link onClick={clickLink} className={styles.link} to={"skills"} spy={true} smooth={true} offset={50}
                      duration={500}>Skills</Link>
                <Link onClick={clickLink} className={styles.link} to={"works"} spy={true} smooth={true} offset={50}
                      duration={500}>Projects</Link>
                <Link onClick={clickLink} className={styles.link} to={"contacts"} spy={true} smooth={true} offset={50}
                      duration={500}>Contacts</Link>
            </div>
            <div className={styles.burger} onClick={onBurgerClick}></div>
        </div>
    )
}

export default NavBurger;
import React from "react";
import styles from "./Nav.module.scss"
import {Link} from 'react-scroll';
import * as Scroll from 'react-scroll';

function Nav() {
    return (
        <div className={styles.nav}>
            <Link className={styles.link} to={"#"}>Main</Link>
            <Link className={styles.link} to={"skills"} spy={true} smooth={true} offset={50}
                  duration={500}>Skills</Link>
            <Link className={styles.link} to={"works"} spy={true} smooth={true} offset={50}
                  duration={500}>Projects</Link>
            <Link className={styles.link} to={"contacts"} spy={true} smooth={true} offset={50}
                  duration={500}>Contacts</Link>
        </div>
    )
}

export default Nav;
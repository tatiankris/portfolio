import React from "react";
import styles from "./Nav.module.scss"

function Nav () {
    return (
        <div className={styles.nav}>
            <a className={styles.link} href={"#"}>Main</a>
            <a className={styles.link} href={"#"}>Skills</a>
            <a className={styles.link} href={"#"}>Projects</a>
            <a className={styles.link} href={"#"}>Contacts</a>
    </div>
    )
}

export default Nav;
import React from "react";
import styles from "./Header.module.scss"
import Nav from "../Nav/Nav";
import NavBurger from "../Nav/NavBurger/NavBurger";

function Header () {
    return <div className={styles.header}>
        <Nav/>
        <NavBurger />
    </div>
}

export default Header;
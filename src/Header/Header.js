import React, {useState} from "react";
import styles from "./Header.module.scss"
import Nav from "../Nav/Nav";
import NavBurger from "../Nav/NavBurger/NavBurger";

function Header () {

    const [openHead, setOpenHead] = useState(false)

    const handleOpenHead = () => {
        setOpenHead(!openHead)
    }

    return <div
        onClick={handleOpenHead}
        className={openHead ? `${styles.header} ${styles.headerClick}` : styles.header}>
        <Nav/>
        <NavBurger setOpenHead={setOpenHead}/>
    </div>
}

export default Header;
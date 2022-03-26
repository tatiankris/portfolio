import styles from './Link.module.css'
import React from "react";

const Link = (props) => {
    return <div>
        <a href={props.href}><img className={styles.img} src={props.img} alt={'sorry'}/></a>
    </div>
}

export default Link;
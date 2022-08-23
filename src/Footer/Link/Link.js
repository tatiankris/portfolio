import styles from './Link.module.scss'
import React from "react";

const Link = (props) => {
    return <div>
        <a href={props.href}><div style={props.style} className={styles.img} src={props.img} alt={'sorry'}/></a>
    </div>
}

export default Link;
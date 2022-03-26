import React from "react";
import styles from "./Skill.module.css"

function Skill (props) {
    return <div className={styles.skill}>
        <div className={styles.icon}></div>
        <h2 className={styles.title}>{props.title}</h2>
        <span className={styles.description}>{props.description}</span>
    </div>
}

export default Skill;
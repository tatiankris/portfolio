import React from "react";
import styles from "./Skill.module.scss"
import Tilt from 'react-tilt'

function Skill(props) {
    return <div className={styles.skill}>
        <Tilt options={{max: 200}}>
            <div className={styles.icon} style={props.style}></div>
        </Tilt>
        <h3 className={styles.title}>{props.title}</h3>
        <span className={styles.description}>{props.description}</span>
    </div>

}

export default Skill;
import React from "react";
import styles from "./Work.module.css";
import button from '../../common/styles/Button.module.css';

const Work = (props) => {
    return <div className={styles.work}>
        <div className={styles.workImage}>
            <img className={styles.workImg} src={props.img}/>
            <button className={`${styles.button} ${button.button}`}>Look</button>
        </div>
        <div className={styles.workDescription}>
            <div className={styles.descriptionTitle}>
                {props.title}
            </div>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>


    </div>

}

export default Work;
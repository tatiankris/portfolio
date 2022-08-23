import React from "react";
import styles from "./Work.module.scss";
import button from '../../common/styles/Button.module.scss';

const Work = (props) => {
    return <div className={styles.work}>
        <div className={styles.workImage}>
                <div className={styles.workImg} style={props.style}/>
                <a href={'#'} className={`${button.button} ${styles.butt}`}>Look</a>
        </div>

        <div className={styles.workDescription}>
            <div className={styles.descriptionTitle}>
                <div>{props.title}</div>
            </div>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>


    </div>

}

export default Work;
import React from "react";
import styles from "./Work.module.scss";
import button from '../../common/styles/Button.module.scss';

const Work = (props) => {
    return <div className={styles.work}>
                <div className={styles.workImg} style={props.style}>
                    <a href={props.href} className={`${button.button} ${styles.butt}`}>Look in GitHub</a>
                </div>

                <div className={styles.workDescription}>
                    <h3 className={styles.descriptionTitle}>{props.title}</h3>
                    <p className={styles.description}>
                        {props.description}
                    </p>
                </div>
    </div>

}

export default Work;
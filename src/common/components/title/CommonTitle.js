import React from "react";
import styles from "./CommonTytle.module.scss";


const CommonTitle = (props) => {
    return <div className={styles.title}>
        <h2>{props.text}</h2>
    </div>
}
export default CommonTitle;
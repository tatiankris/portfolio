import React from "react";
import styles from './MySuggestion.module.css'
import container from '../common/styles/Container.module.css'
import button from '../common/styles/Button.module.css'

const MySuggestion = (props) => {
    return <div className={styles.mySuggestionBlock}>
        <div className={`${container.container} ${styles.mySuggestionContainer}`}>
            <h2>Looking into remote work options</h2>
            <button className={button.button}>Contact details</button>
        </div>
    </div>
}

export default MySuggestion;
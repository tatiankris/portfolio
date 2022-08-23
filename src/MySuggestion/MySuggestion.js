import React from "react";
import styles from './MySuggestion.module.scss'
import container from '../common/styles/Container.module.scss'
import button from '../common/styles/Button.module.scss'
import CommonTitle from "../common/components/title/CommonTitle";

const MySuggestion = (props) => {


    return <div className={styles.mySuggestionBlock}>
        <div className={`${container.container} ${styles.mySuggestionContainer}`}>
            {/*<h2>Looking into remote work options</h2>*/}
            <CommonTitle text={'Looking into remote work options'}/>
            <a href={'#'} className={`${button.button} ${styles.button}`}>Contact details</a>
        </div>
    </div>
}

export default MySuggestion;
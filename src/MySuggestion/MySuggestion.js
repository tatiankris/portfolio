import React from "react";
import styles from './MySuggestion.module.scss'
import container from '../common/styles/Container.module.scss'
import button from '../common/styles/Button.module.scss'
import CommonTitle from "../common/components/title/CommonTitle";
import Flip from 'react-reveal/Flip';

const MySuggestion = (props) => {


    return <div id={'my-suggestion'} className={styles.mySuggestionBlock}>
        <Flip top>
        <div className={`${container.container} ${styles.mySuggestionContainer}`}>
            {/*<h2>Looking into remote work options</h2>*/}
            <CommonTitle text={'Looking into remote work options'}/>
            <a href={'#'} className={`${button.button} ${styles.button}`}>Contact details</a>
        </div>
        </Flip>
    </div>
}

export default MySuggestion;
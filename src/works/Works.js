import React from "react";
import styles from './Works.module.css'
import commonStyles from '../common/styles/Container.module.css'
import Work from "./work/Work";


const Works = (props) => {
  return <div className={styles.worksBlock}>
    <div className={`${commonStyles.container} ${styles.worksContainer}`}>
      <h2 className={styles.title}>My works</h2>
      <div className={styles.works}>
        <Work img={'https://ruseller.com/adds/adds3077/preview.jpg'} title={'Ocean'} description={'This work was make for OceanSolution.'}/>
        <Work img={'https://miditator.ru/upload/iblock/261/temnyy_strogiy_shablon_sayta.png'} title={'Praries'} description={'This work was make for East States.'}/>
      </div>
    </div>
  </div>
}

export default Works;
import React from "react";
import styles from './Works.module.scss'
import commonStyles from '../common/styles/Container.module.scss'
import Work from "./work/Work";
import CommonTitle from "../common/components/title/CommonTitle";
import TodoImage from '../common/assets/todolist.jpg'
import SocialImage from '../common/assets/social3.jpg'
import Fade from "react-reveal/Fade";

const Works = (props) => {

  const todolist = {
    backgroundImage: `url(${TodoImage})`
  }
  const social = {
    backgroundImage: `url(${SocialImage})`
  }

  return <div className={styles.worksBlock}>
    <Fade top>
    <div className={`${commonStyles.container} ${styles.worksContainer}`}>
      <CommonTitle text={'Latest Projects'}/>
      <div className={styles.works}>
        <Work style={todolist} title={'Todolist'} description={'REACT REDUX JS HTML CSS'}/>
        <Work style={social} title={'Social Network'} description={'REACT REDUX JS HTML CSS'}/>
      </div>
    </div>
    </Fade>
  </div>
}

export default Works;
import React from "react";
import styles from './Works.module.scss'
import commonStyles from '../common/styles/Container.module.scss'
import Work from "./work/Work";
import CommonTitle from "../common/components/title/CommonTitle";
import TodoImage from '../common/assets/todolist.jpg'
import SocialImage from '../common/assets/social3.jpg'
import CardsImage from '../common/assets/learncards22.svg.png'
import Fade from "react-reveal/Fade";

const ghCards = 'https://github.com/tatiankris/autumn-project'
const ghTodolist = 'https://github.com/tatiankris/Todolist-2'
const ghNetwork = 'https://github.com/tatiankris/social-network'

const Works = (props) => {

  const cards = {
    backgroundImage: `url(${CardsImage})`
  }
  const todolist = {
    backgroundImage: `url(${TodoImage})`
  }
  const network = {
    backgroundImage: `url(${SocialImage})`
  }

  return <div id={'works'} className={styles.worksBlock}>
    <Fade top>
    <div className={`${commonStyles.container} ${styles.worksContainer}`}>
      <CommonTitle text={'Latest Projects'}/>
      <div className={styles.works}>
        <Work style={cards} href={ghCards} title={'Learning cards'} description={'REACT/ TS/ REDUX-TOOLKIT/ MUI/ CSS'}/>
        <Work style={todolist} href={ghTodolist} title={'Todolist'} description={'REACT/ TS/ REDUX/ MUI/ CSS'}/>
        <Work style={network} href={ghNetwork} title={'Social Network'} description={'REACT/ TS/ REDUX /SCSS'}/>
      </div>
    </div>
    </Fade>
  </div>
}

export default Works;
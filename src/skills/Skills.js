import React from "react";
import styles from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "./Skill/Skill";
import CommonTitle from "../common/components/title/CommonTitle";
import jsImg from "../common/assets/js-svgrepo-com.svg";
import reactImg from "../common/assets/react-svgrepo-com.svg";
import reduxImg from "../common/assets/redux-svgrepo-com.svg";
import cssImg from "../common/assets/sass-svgrepo-com.svg";
import Fade from "react-reveal/Fade";


function Skills () {

    const js = {
        backgroundImage: `url(${jsImg})`
    }
    const react = {
        backgroundImage: `url(${reactImg})`
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`
    }
    const css = {
        backgroundImage: `url(${cssImg})`
    }

    return <div className={styles.skillsBlock}>
        <Fade top>
        <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
            <CommonTitle text={'Skills'}/>
            <div className={styles.description}>
                I use the most trusted web application development tools such as...
            </div>
            <div className={styles.skills}>
                    <Skill style={js} title={"JS"} description={""}/> {/*I know main principles of JS*/}
                <Skill style={react} title={"React"} description={""}/> {/*I make React App*/}
                <Skill style={redux} title={"Redux"} description={""}/> {/*I use this library the most*/}
                <Skill style={css} title={"CSS"} description={""}/> {/*I use SASS*/}
            </div>
        </div>
        </Fade>
    </div>
}

export default Skills;
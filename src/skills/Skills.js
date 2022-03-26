import React from "react";
import styles from "./Skills.module.css"
import styleContainer from "../../src/common/styles/Container.module.css"
import Skill from "./Skill/Skill";

function Skills () {
    return <div className={styles.skillsBlock}>
        <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills}>
                <Skill title={"JS"} description={"htllo lflflf lfflflf llflfflfl"}/>
                <Skill title={"CSS"} description={"htllo lflflf lfflflf llflfflfl"}/>
                <Skill title={"React"} description={"htllo lflflf lfflflf llflfflfl jdjdjjjdjdjd jdjdjdjdjdj djdjdjdjdjjdd jdjdjdjjd " +
                "kjhkjhkjhfh hfhgfhgf jhgjhgjhg jhg jhg  fdgfdgfdgfd iuykjh j"}/>
            </div>
        </div>
    </div>
}

export default Skills;
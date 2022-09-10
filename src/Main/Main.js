import React from "react";
import styles from "./Main.module.scss"
import photoImg from "../common/assets/main/my_photo.jpg";
import Particle from "../common/components/Particle";
import Fade from 'react-reveal/Fade';


function Main () {

    const photo = {
        backgroundImage: `url(${photoImg})`
    }

    return <div className={styles.mainBlock}>
        <Fade top>
                <Particle className={styles.particles}/>
               <div className={styles.container}>
                    <div className={styles.text}>
                        <h1><span className={styles.span}>I</span> AM TATIANA.</h1>
                        <div className={styles.description}>
                            <span >I am React JS developer</span>
                        </div>

                    </div>
                    <div className={styles.photo} style={photo}>

                    </div>
               </div>
        </Fade>
    </div>
}

export default Main;
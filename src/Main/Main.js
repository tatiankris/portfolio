import React from "react";
import styles from "./Main.module.scss"
import photoImg from "../common/assets/main/my_photo.jpg";
import Particle from "../common/components/Particle";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


function Main () {

    const photo = {
        backgroundImage: `url(${photoImg})`
    }

    return <div className={styles.mainBlock}>

                <Particle className={styles.particles}/>
            <Fade top>
               <div className={styles.container}>
                    <div className={styles.text}>
                        <h1><span className={styles.span}>I</span> AM TATIANA.</h1>
                        <div className={styles.description}>
                            <ReactTypingEffect
                                text={["Frontend Developer"]}
                            />
                        </div>
                    </div>
                   <Tilt options={{ max : 20 }}>
                       <div className={styles.photo} style={photo}></div>
                   </Tilt>
               </div>
        </Fade>
    </div>
}

export default Main;
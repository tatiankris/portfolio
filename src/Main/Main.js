import React from "react";
import styles from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import photoImg from "../common/assets/main/my_photo.jpg";

function Main () {

    const photo = {
        backgroundImage: `url(${photoImg})`
    }

    return <div className={styles.mainBlock}>
               <div className={styleContainer.container}>
                    <div className={styles.text}>
                        <h1><span className={styles.span}>I</span> AM TATIANA.</h1>
                        <div className={styles.description}>
                            <span >I am React JS developer</span>
                        </div>

                    </div>
                    <div className={styles.photo} style={photo}>

                    </div>
               </div>
    </div>
}

export default Main;
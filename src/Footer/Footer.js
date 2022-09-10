import React from "react";
import styles from './Footer.module.scss'
import container from '../common/styles/Container.module.scss'
import Link from './Link/Link'
import instImg from "../common/assets/footer/instagram-logo-svgrepo-com.svg";
import vkImg from "../common/assets/footer/vk-logo-svgrepo-com.svg";
import tgImg from "../common/assets/footer/telegram-logo-svgrepo-com.svg";
import ghImg from "../common/assets/footer/logo-github-svgrepo-com.svg";

const Footer = (props) => {

    const instagram = {
        backgroundImage: `url(${instImg})`
    }
    const vk = {
        backgroundImage: `url(${vkImg})`
    }
    const telegram = {
        backgroundImage: `url(${tgImg})`
    }
    const github = {
        backgroundImage: `url(${ghImg})`
    }

    return <div className={styles.footerBlock}>
        <div className={`${container.container} ${styles.footerContainer}`}>
            <h2>Tatiana Kriskevich</h2>
            <div className={styles.links}>
                <div className={styles.link}>
                    <Link href={'https://www.instagram.com'} style={instagram}/>
                </div>
                <div className={styles.link}>
                    <Link href={'https://vk.com'} style={vk}/>
                </div>
                <div className={styles.link}>
                    <Link href={'https://web.telegram.org/z/'} style={telegram}/>
                </div>
                <div className={styles.link}>
                    <Link href={'https://github.com/tatiankris'} style={github}/>
                </div>
            </div>
            <h3>Ⓒ 2022 All rights reserved</h3>
        </div>
    </div>

}

export default Footer;
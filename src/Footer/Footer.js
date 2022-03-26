import React from "react";
import styles from './Footer.module.css'
import container from '../common/styles/Container.module.css'
import Link from './Link/Link'

const Footer = (props) => {

    return <div className={styles.footerBlock}>
        <div className={`${container.container} ${styles.footerContainer}`}>
            <h2>Tatiana Kriskevich</h2>
            <div className={styles.links}>
                <Link href={'https://www.instagram.com'} img={'https://pngicon.ru/file/uploads/instagram-256x256.png'}/>
                <Link href={'https://vk.com'} img={'https://pngicon.ru/file/uploads/vk-256x256.png'}/>
                <Link href={'https://web.telegram.org/z/'} img={'https://papik.pro/uploads/posts/2021-11/thumbs/1636144586_45-papik-pro-p-logotip-telegramma-foto-46.png'}/>
                <Link href={'https://github.com/tatiankris'} img={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}/>
            </div>
            <h2>Ⓒ 2022 All rights reserved</h2>
        </div>
    </div>

}

export default Footer;
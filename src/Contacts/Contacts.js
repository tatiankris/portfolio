import React from "react";
import styles from './Contacts.module.css';
import container from '../common/styles/Container.module.css'
import button from '../common/styles/Button.module.css'


let Contacts = () => {

    return (
        <div className={styles.contactsBlock}>
            <div className={`${container.container} ${styles.contactsContainer}`}>
                <h2>Contacts</h2>

               <div className={styles.form}>
                   <p>Name</p><input className={styles.input} type={'text'} name={'Name'}/>
                   <p>Email</p><input className={styles.input} type={'text'} name={'Email'}/>
                   <p>Details</p><textarea className={styles.textarea} name={'Details'}></textarea>
               </div>


                <button className={button.button}>Send</button>
            </div>
        </div>
    )
}

export default Contacts;
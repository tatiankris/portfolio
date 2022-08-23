import React from "react";
import styles from './Contacts.module.scss';
import container from '../common/styles/Container.module.scss'
import button from '../common/styles/Button.module.scss'
import CommonTitle from "../common/components/title/CommonTitle";


let Contacts = () => {

    return (
        <div className={styles.contactsBlock}>
            <div className={`${container.container} ${styles.contactsContainer}`}>
                {/*<h2>Contacts</h2>*/}
                <CommonTitle text={'Contacts'}/>

               <form className={styles.form}>
                   <p>Name</p><input className={styles.input} type={'text'} name={'Name'}/>
                   <p>Email</p><input className={styles.input} type={'text'} name={'Email'}/>
                   <p>Details</p><textarea className={styles.textarea} name={'Details'}></textarea>
                   <button type={'submit'} className={`${button.button} ${styles.button}`}>Send</button>
               </form>



            </div>
        </div>
    )
}

export default Contacts;
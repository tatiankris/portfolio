import React from "react";
import styles from './Contacts.module.css'
import container from '../common/styles/Container.module.css'
import button from '../common/styles/Button.module.css'

const Contacts1 = () => {

    return <div className={styles.contactsBlock}>
        <div className={`${container.container} ${styles.contactsContainer}`}>

            <form >
                <label>
                    Имя:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Отправить" />
            </form>




            </div>
        </div>
        }

export default Contacts1;
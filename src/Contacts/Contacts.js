import React, {useState} from "react";
import styles from './Contacts.module.scss';
import container from '../common/styles/Container.module.scss'
import button from '../common/styles/Button.module.scss'
import CommonTitle from "../common/components/title/CommonTitle";
import Fade from 'react-reveal/Fade';
import axios from "axios";

let Contacts = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [details, setDetails] = useState('')
    let [disabled, setDisabled] = useState(false)

    const stylesDisabled = {}

    const handleSubmit = (e) => {
            setDisabled(true);
            e.preventDefault();

            axios.post('https://smtp-nodejs-gmail.herokuapp.com/sendMessage', {
                    name: name,
                    email: email,
                    message: details
            }).then(() => {
                setDisabled(false);
                alert('Message sent!')
                setName('')
                setEmail('')
                setDetails('')
            })
   }

    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <Fade top>
            <div className={`${container.container} ${styles.contactsContainer}`}>
                {/*<h2>Contacts</h2>*/}
                <CommonTitle text={'Contacts'}/>

               <form onSubmit={handleSubmit} className={styles.form}>
                   <p>Name</p><input className={styles.input} value={name} onChange={e => setName(e.currentTarget.value)} type={'text'} name={'Name'}/>
                   <p>Email</p><input className={styles.input} value={email} onChange={e => setEmail(e.currentTarget.value)} type={'text'} name={'Email'}/>
                   <p>Details</p><textarea className={styles.textarea} value={details} onChange={e => setDetails(e.currentTarget.value)} name={'Details'}></textarea>
                   <button disabled={disabled} type={'submit'} className={disabled ? `${button.button} ${styles.buttonDisabled}` : `${button.button} ${styles.button}`}>Send</button>
               </form>
            </div>
            </Fade>
        </div>
    )
}

export default Contacts;
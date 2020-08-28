import React, {useState} from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
    const [state, setState] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/send.php', state).then((res) => {
            notify.show('Сообщение отправлено', 'success');
        }).catch(err => {
            notify.show('Произошла ошибка, попробуйте позже', 'error');
        });
    }
    const onChange = ({target: {name, value}}) => {
        setState((prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        }));
    }
    return <div className={styles.ContactFormSection}>
        <div className={styles.contentWrap}>
            <h2 className={styles.ContactFormSectionHeader}>Оставьте заявку и я с вами свяжусь</h2>
            <div className={styles.formWrap}>
                <form name="contact" action="" method="POST" onSubmit={onSubmit} className={styles.form}>
                    <input className={styles.formInput} type="text" name="name" placeholder="Имя" onChange={onChange} required/>
                    <input className={styles.formInput} type="email" name="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                           placeholder="e-mail" onChange={onChange} required/>
                    <input className={styles.formInput} type="tel" pattern="(\+?\d[- .]*){7,13}" name="tel"
                           placeholder="телефон" onChange={onChange}/>
                    <textarea className={styles.formTextarea} name="comment" id="comment" cols="30" rows="10"
                              placeholder="коментарий" onChange={onChange}></textarea>
                    <button type="submit" className={styles.formSubmitBtn}>Отправить</button>
                </form>
            </div>
        </div>
        <Notifications options={{zIndex: 200, top: '45%'}}/>
    </div>
}

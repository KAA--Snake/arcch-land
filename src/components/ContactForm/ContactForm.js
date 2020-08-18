import React, {useState} from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
    return <div className={styles.ContactFormSection}>
     <div className={styles.contentWrap}>
         <h2 className={styles.ContactFormSectionHeader}>Оставьте заявку и я с вами свяжусь</h2>
        <div className={styles.formWrap}>
            <form name="contact_form" action="send.php" method="POST" className={styles.form}>
                <input className={styles.formInput} type="text" name="name" placeholder="Имя" required/>
                <input className={styles.formInput} type="email" name="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                       placeholder="e-mail" required/>
                <input className={styles.formInput} type="tel" pattern="(\+?\d[- .]*){7,13}" name="tel"
                       placeholder="телефон"/>
                <textarea className={styles.formTextarea} name="comment" id="comment" cols="30" rows="10"
                          placeholder="коментарий"></textarea>
                <button type="submit" className={styles.formSubmitBtn}>Отправить</button>
            </form>
        </div>
    </div>
    </div>
}

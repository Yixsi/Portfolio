'use client';
import Layout from '../components/Layout.jsx';
import styles from '../styles/contact.module.css';
import { ImLocation2 } from 'react-icons/im';
import { BsFillPhoneFill, BsMailbox2, BsLinkedin, BsSendFill, BsFillEnvelopeAtFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { validate } from '../utils/validate';
import axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';

export default function Contact() {

    const [mailData, setMailData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;

        setMailData({
            ...mailData,
            [name]: value
        });

        setErrors(validate({
            ...mailData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.entries(errors).length) {
            axios
            .post('/api/handler', mailData).then((res) => res && swal(
                {
                    title: "Great!",
                    text: res.data.message,
                    icon: "success",
                    }
                
                    )).catch((error) => error && swal(error.response.data.error));
        } else {
            swal('Empty or invalid data.')
        }
    }

    return (
        <Layout title='Contact' description='description' content='Get in touch with me'>
            <h2 className={styles.contactTitle}>CONTACT</h2>
            <section className={styles.contactSection}>
                <article className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit} method='POST'>
                        <input type='text' placeholder='Name' className={styles.input} onChange={handleInput} name='name' value={mailData.name} required/>
                        {errors.name && <p className={styles.error}>{errors.name}</p>}

                        <input type='email' placeholder='Email' className={styles.input} name='email' value={mailData.email} onChange={handleInput} required />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}

                        <textarea placeholder='Let me know what you think...' className={styles.textarea} rows='6' type='text' name='message' value={mailData.message} onChange={handleInput} required></textarea>


                        <button type='submit' className={styles.button}>
                            Send <BsSendFill className={styles.buttonIcon}/>
                        </button>
                    </form>
                </article>

                <aside className={styles.info}>
                    <ul>
                        <li><span><ImLocation2 /></span>Santa Marta - Colombia</li>
                        <li><span><BsFillPhoneFill /></span>+57 323-598-16-92</li>
                        <li><span><BsMailbox2 /></span>yixsi3103@gmail.com</li>
                    </ul>
                    <div className={styles.social}>
                        <a href='https://www.linkedin.com/in/yisney-soto/' target='_blank'><BsLinkedin className={styles.socialIcon} /></a>
                        <a href='https://github.com/Yixsi' target='_blank'><AiFillGithub className={styles.socialIcon} /></a>
                        <a href="mailto:yixsi3103@gmail.com"><BsFillEnvelopeAtFill className={styles.socialIcon} /></a>
                    </div>
                </aside>
            </section>
        </Layout>
    )
}
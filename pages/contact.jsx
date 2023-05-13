import Layout from '../components/Layout.jsx';
import styles from '../styles/contact.module.css';
import { ImLocation2 } from 'react-icons/im';
import { BsFillPhoneFill, BsMailbox2, BsLinkedin, BsSendFill } from 'react-icons/bs';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';


export default function Contact() {
    return (
        <Layout title='Contact' description='description' content='Get in touch with me'>
            <h2 className={styles.contactTitle}>CONTACT</h2>


            <article className={styles.formContainer}>
                <form className={styles.form}>
                    <input type='name' placeholder='Name' className={styles.input} />
                    <input type='email' placeholder='Email' className={styles.input} />
                    <textarea placeholder='Let me know what you think...' className={styles.textarea} rows='8'></textarea>
                    <button type='submit' className={styles.button}>Send <BsSendFill className={styles.buttonIcon}/></button>
                </form>
            </article>

            <aside className={styles.info}>
                <ul>
                    <li><span><ImLocation2 /></span>Santa Marta - Colombia</li>
                    <li><span><BsFillPhoneFill /></span>+57 323-598-16-92</li>
                    <li><span><BsMailbox2 /></span>yixsi3103@gmail.com</li>
                </ul>
                <div className={styles.social}>
                    <BsLinkedin className={styles.socialIcon} />
                    <AiFillGithub className={styles.socialIcon} />
                    <AiFillInstagram className={styles.socialIcon} />
                </div>
            </aside>
        </Layout>
    )
}
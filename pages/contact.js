import Head from 'next/head'
import Layout from '../components/Layout';
import styles from '../styles/contact.module.css';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name='description' content='about me' />
            </Head>

            <Layout>
                <div className={styles.contact}>
                    <h2 className={styles.contactTitle}>Contact</h2>

                    <aside className={styles.info}>
                        <ul>
                            <li>Santa Marta - Colombia</li>
                            <li>+57 323-598-16-92</li>
                            <li>yixsi3103@gmail.com</li>
                        </ul>

                    </aside>
                
                    <article className={styles.formContainer}>
                        <form className={styles.form}>
                            <input type='name' placeholder='Name' className={styles.input}/>
                            <input type='email' placeholder='Email' className={styles.input}/>
                            <textarea placeholder='Say something' className={styles.textarea} rows='4'></textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </article>
                </div>
            </Layout>
        </>
    )
}
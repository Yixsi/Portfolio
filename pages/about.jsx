import Layout from '../components/Layout.jsx';
import styles from '../styles/about.module.css';
import { BsDownload } from 'react-icons/bs';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Layout title='About' description='Get to know more about me'>

                <h2 className={styles.title}>ABOUT</h2>
                <section className={styles.profile}>
                    <article>
                        <p className={styles.text}>Hi, I'm an enthusiastic and detail-oriented web developer, who enjoys building solutions that meet the needs of clients and end-users. I'm always eager to learn and apply the best practices in my code to ensure good performance for the sites I create or collaborate on with my teams.</p>
                        <div className={styles.more}>
                            <span>See more </span><a href='CV_SOTO' download className={styles.cv}>CV <BsDownload className={styles.cvIcon} /></a>
                        </div>
                    </article>
                    <aside>
                        <Image
                            src='/me.png'
                            alt='Yisney'
                            width={151}
                            height={229}
                            className={styles.me}
                        />
                    </aside>
                </section>
            </Layout>
        </>
    )
}
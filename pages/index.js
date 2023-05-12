import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name='description' content='Welcome to my Next.js Portfolio!' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
                <link href='https://fonts.googleapis.com/css2?family=Cabin+Condensed&family=Poppins:ital,wght@0,200;0,400;0,600;1,200&display=swap' rel='stylesheet'/>
            </Head>

            <Layout>
                <h1>Full Stack Developer</h1>
                <p className={styles.slogan}>Solving problems, one <span>detail</span> at a time.</p>
            </Layout>
        </>
    )
}
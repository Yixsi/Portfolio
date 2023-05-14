import Layout from '../components/Layout.jsx';
import styles from '../styles/about.module.css'
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Layout title='About' description='Get to know more about me'>
                <h2>About</h2>
                <p>This is the about page.</p>
                <Image
                    src='/me.png'
                    alt='Yisney'
                    width={195}
                    height={253}
                    className={styles.me}
                />
            </Layout>
        </>
    )
}
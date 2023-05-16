import Layout from '../components/Layout.jsx';
import styles from '../styles/index.module.css';

export default function Home() {
    return (
        <>
            <Layout title='Home' description='description' content='Welcome to my Next.js Portfolio!'>
                <h1>Yisney Soto Avendaño</h1>
                <p className={styles.slogan}>Solving problems, one <span>detail</span> at a time.</p>
            </Layout>
        </>
    )
}
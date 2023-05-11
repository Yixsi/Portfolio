import Head from 'next/head'
import Layout from '../components/Layout'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name='description' content='about me' />
            </Head>

            <Layout>
                <h1>Contact</h1>
                <p>This is the contact page.</p>
            </Layout>
        </>
    )
}
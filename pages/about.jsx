import Head from 'next/head'
import Layout from '../components/Layout.jsx'

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name='description' content='about me' />
            </Head>

            <Layout>
                <h1>About</h1>
                <p>This is the about page.</p>
            </Layout>
        </>
    )
}
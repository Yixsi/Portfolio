import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';


export default function Layout({ children, title, description, content }) {
    return (
        <div className='container'>
            <Head>
                <title>{title}</title>
                <meta name={description} content={content} />
                <link rel='icon' href='../public/favicon.ico'></link>
            </Head>
            <Header />
            <main >{children}</main>
            <Footer />
        </div>
    );
}

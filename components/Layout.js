import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';


export default function Layout({ children, title, description, contact }) {
    return (
        <div className='container'>
            <Head>
                <title>{title}</title>
                <meta name={description} content={contact} />
            </Head>
            <Header />
                <main >{children}</main>
            <Footer />
        </div>
    );
}

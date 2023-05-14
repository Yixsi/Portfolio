import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <> 
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
                <link href='https://fonts.googleapis.com/css2?family=Cabin+Condensed&family=Poppins:ital,wght@0,200;0,400;0,600;1,200&display=swap' rel='stylesheet' />
            </Head>
            <Component {...pageProps} />
          </>
}

export default MyApp
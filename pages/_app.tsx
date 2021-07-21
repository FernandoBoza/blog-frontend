import '../styles/globals.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/fontawesome.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/solid.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/brands.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/light.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/regular.scss';

import Head from 'next/head';
import { ApolloProvider } from "@apollo/react-hooks";
import withData from '../apollo/apollo';
import Nav from '../components/Nav.component';
import Footer from '../components/Footer.component';
import { useState, useEffect } from 'react';

const MyApp = ({ Component, pageProps, apollo }) => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Fernando Boza</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;900&display=swap" rel="stylesheet"/>
      </Head>
      <Nav data={scroll ? "shadow" : ""} />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}


export default withData(MyApp);

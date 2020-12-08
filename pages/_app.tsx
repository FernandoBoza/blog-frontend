import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import * as gtag from "../utils/gtag";

import '../styles/globals.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/fontawesome.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/solid.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/brands.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/light.scss';
import '../styles/fontawesome-pro-5.15.1-web/scss/regular.scss';
import '../styles/animate.scss';


import Head from 'next/head';
import { ApolloProvider } from "@apollo/react-hooks";
import withData from '../apollo/apollo';
import Nav from '../components/Nav.component';
import Footer from '../components/Footer.component';

const MyApp = ({ Component, pageProps, apollo }) => {
  // let isProduction = true;
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     /* invoke analytics function only for production */
  //     if (isProduction) gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ApolloProvider client={apollo}>
      <Nav />
      <Head>
        <title>Fernando Boza</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}


export default withData(MyApp);

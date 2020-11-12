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

const MyApp = ({ Component, pageProps, apollo }) => {
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

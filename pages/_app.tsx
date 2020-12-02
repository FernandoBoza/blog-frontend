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
import { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class MyApp extends Component<{ Component: any, pageProps: any, apollo: any }> {

  componentDidMount() {
    new WOW.WOW().init()
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
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
}

export default withData(MyApp);

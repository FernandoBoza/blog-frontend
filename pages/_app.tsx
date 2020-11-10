import '../styles/globals.scss'
import Head from 'next/head';
import { ApolloProvider } from "@apollo/react-hooks";
import withData from '../apollo/apollo';

const MyApp = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Fernando Boza</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withData(MyApp);

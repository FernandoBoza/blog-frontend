import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#90cdf4" />
                    <link rel="apple-touch-icon" href="images/logo-96x96.png" />
                    <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6MV56X9TG9"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'G-6MV56X9TG9');
                                `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        );
    }
}

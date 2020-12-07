import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../utils/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6MV56X9TG9" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-6MV56X9TG9');
                            `,
                        }}
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
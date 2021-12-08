import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="yolo" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Noto+Serif+Display:wght@300;400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}
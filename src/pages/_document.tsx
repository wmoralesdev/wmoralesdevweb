import Document, { Html, Head, Main, NextScript } from 'next/document'
import meta from '../../public/res/meta.png'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:image" content="https://drive.google.com/file/d/1hQiGloNgiLZuUPMrpyAGzY-RE4Hg_a8p/view?usp=sharing" key="image" />
                    <meta property="twitter:image" content="https://drive.google.com/file/d/1hQiGloNgiLZuUPMrpyAGzY-RE4Hg_a8p/view?usp=sharing" key="image" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
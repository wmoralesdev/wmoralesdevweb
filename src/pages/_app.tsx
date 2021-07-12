import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
          openGraph={{
            images: [{
              url: 'https://cursobacks3.s3.amazonaws.com/meta.png',
              width: 1200,
              height: 627,
              alt: 'banner'
            }]
          }}
        />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

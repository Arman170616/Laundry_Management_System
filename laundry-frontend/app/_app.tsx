import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Laundryheap</title>
        <meta name="description" content="Laundry Management System" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

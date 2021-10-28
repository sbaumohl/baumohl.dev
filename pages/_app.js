import "../styles/global.scss";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>SamBaumohl.com</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="Sam Baumohl" />
    </Head>
    <Component {...pageProps} />
  </>;
}

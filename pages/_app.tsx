// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/tailwind.css'

import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <a href="#main" className="sr-only">
        Skip to main
      </a>
      <Header />
      <main id="main" role="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp

import Script from "next/script";
import {AppRoot} from '../styles/global';
import Head from "next/head";
import type { AppProps } from 'next/app'
import { Navbar } from "../layouts";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <div className="app">
      <AppRoot/>
         <Head>
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
               crossOrigin="anonymous"
            />
         </Head>
         <Navbar/>
         <Component {...pageProps} />
         <Script
            id="bootstrap-cdn"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      </div>
   )
}

export default MyApp

import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Head from "next/head";
import React from "react";
import "../styles/globals.scss"
import "autobahn-ui/dist/app.css"

const abel = localFont({ src: '../styles/fonts/Abel-Regular.ttf' })

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Autobahn</title>
                <meta name="description" content="Rent luxury vehicles online." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${abel.className}`}>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default App;
import type { AppProps } from "next/app";
import "../styles/globals.scss"
import HeadComponent from "../components/HeadComponent";
import localFont from "@next/font/local";

const abel = localFont({ src: '../styles/fonts/Abel-Regular.ttf' })

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <HeadComponent title="Autobahn" description="Rent luxury vehicles online." />
            <main className={abel.className}>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default App;
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import "../styles/globals.scss"
import "autobahn-ui/dist/app.css"
import { AppContext } from "../contexts/AppContext";
import {UserProps} from "../types";
import {useRouter} from "next/router";

const abel = localFont({ src: '../styles/fonts/Abel-Regular.ttf' })

const App = ({ Component, pageProps }: AppProps) => {
    const apiUrl = "http://localhost:8000/api"
    const [user, setUser] = useState<undefined | null | UserProps>(undefined)
    const [token, setToken] = useState<string|null|undefined>(undefined)
    const router = useRouter();

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    useEffect(() => {
        if (typeof token !== "undefined") {
            fetch(`${apiUrl}/.user/user`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
            }).then(r => {
                if (r.ok) {
                    return r.json()
                }
                throw new Error('Erreur')
            }).then((user: UserProps) => {
                user.token = token
                setUser(user);
                if(user.isAdmin) {
                    void router.push("/admin")
                }
            }).catch(() => {
                setUser(null)
                // localStorage.removeItem('token')
            })
        } else if(token === null) {
            setUser(null)
        }
    }, [token])

    return (
        <AppContext.Provider
            value={{
                apiUrl: apiUrl,
                user,
                setUser,
                token,
                setToken,
            }}>
            <Head>
                <title>Autobahn</title>
                <meta name="description" content="Rent luxury vehicles online." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${abel.className}`}>
                <Component {...pageProps} />
            </main>
        </AppContext.Provider>
    )
}

export default App;
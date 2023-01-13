import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import React, {useContext, useEffect} from "react";
import SignInComponent from "../components/SignInComponent";
import NavigateBackComponent from "../components/NavigateBackComponent";
import styles from "../styles/pages/signin.module.scss";
import {AppContext} from "../contexts/AppContext";
import {useRouter} from "next/router";
import LoadingComponent from "../components/LoadingComponent";

const SignIn:NextPage = () => {
    const {apiUrl, setUser, user, setToken} = useContext(AppContext)
    const router = useRouter();

    useEffect(() => {
    }, [])

    const handleSignIn = (data: FormData) => {
        const body = {
            email: data.get('email'),
            password: data.get('password'),
        }
        fetch(`${apiUrl}/.user/login`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error('Erreur')
        }).then((payload: {token: string}) => {
            localStorage.setItem('token', payload.token)
            setToken(payload.token)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        if(typeof user !== "undefined" && user !== null) {
            if(user.roles?.includes("ROLE_ADMIN")) {
                void router.push('/admin')
            } else {
                void router.push('/')
            }
        }
    }, [user])

    if(typeof user === "undefined") {
        return <LoadingComponent title="Authentification en cours.." />
    }

    return (
        <>
            <HeaderComponent />

            <section className={`${styles.signInFormContainer}`}>
                <NavigateBackComponent />
                <SignInComponent onSubmit={data => handleSignIn(data)} />
            </section>

            <FooterComponent />
        </>
  )
}

export default SignIn

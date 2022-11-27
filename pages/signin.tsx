import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import React from "react";
import SignInComponent from "../components/SignInComponent";
import NavigateBackComponent from "../components/NavigateBackComponent";
import styles from "../styles/pages/signin.module.scss";

const SignIn:NextPage = () => {

    const handleSignIn = () => {
        console.log('LOG IN...')
    }

    return (
        <>
            <HeaderComponent />

            <section className={`container ${styles.signInForm}`}>
                <NavigateBackComponent />
                <SignInComponent onSubmit={() => handleSignIn()} />
            </section>

            <FooterComponent />
        </>
  )
}

export default SignIn

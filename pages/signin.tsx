import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/pages/home.module.scss";
import {InputComponent, SelectComponent} from "autobahn-ui";
import FooterComponent from "../components/FooterComponent";
import RegistrationSentComponent from "../components/RegistrationSentComponent";
import SignUpComponent from "../components/SignUpComponent";
import React from "react";
import SignInComponent from "../components/SignInComponent";
import NavigateBackComponent from "../components/NavigateBackComponent";

const SignIn:NextPage = () => {

    const handleSignIn = () => {
        console.log('LOG IN...')
    }

    return (
        <>
            <HeaderComponent />

            <section className="container">
                <NavigateBackComponent />
                <SignInComponent onSubmit={() => handleSignIn()} />
            </section>

            <FooterComponent />
        </>
  )
}

export default SignIn

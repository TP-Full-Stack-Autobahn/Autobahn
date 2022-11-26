import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SignUpComponent from "../components/SignUpComponent";
import styles from "../styles/pages/home.module.scss";
import React, {useState} from "react";
import RegistrationSentComponent from "../components/RegistrationSentComponent";

const Home:NextPage = () => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
    const [isRegistrationSent, setRegistrationSent] = useState<boolean>(false)

    const handleSignUp = () => {
        setRegistrationSent(true)
    }

    return (
        <>
            <HeaderComponent />

            <section>
                <div className={styles.bannerContainer}>
                    <p className='container'>
                        ▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France
                        (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
                        Notre expérience est à votre service pour répondre à toutes vos demandes.
                    </p>
                </div>
                {isRegistrationSent ?
                    <RegistrationSentComponent />
                    :
                    <SignUpComponent onSubmit={handleSignUp} />
                }
            </section>

            <FooterComponent />
        </>
  )
}


export default Home

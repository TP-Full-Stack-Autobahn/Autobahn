import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SignUpComponent from "../components/SignUpComponent";
import styles from "../styles/pages/home.module.scss";
import React, {useContext, useEffect, useState} from "react";
import RegistrationSentComponent from "../components/RegistrationSentComponent";
import {AppContext} from "../contexts/AppContext";
import {set} from "immutable";

const Home:NextPage = () => {
    const [isRegistrationSent, setRegistrationSent] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const {apiUrl, user} = useContext(AppContext)

    useEffect(() => {
        const registrationSent = localStorage.getItem('registrationSent')
        if (registrationSent) {
            setRegistrationSent(true)
        }
    }, [])

    const handleSignUp = (data: FormData) => {
        setLoading(true)
        const body = {
            "client": data.get('client'),
            "email": data.get('email'),
            "lastname": data.get('lastname'),
            "firstname": data.get('firstname'),
            "phone": data.get('phone'),
            "nationality": data.get('nationality')
        }
        fetch(`${apiUrl}/.user/inscription`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error('Erreur')
        }).then(() => {
            localStorage.setItem('registrationSent', JSON.stringify(true))
            setLoading(false)
            setRegistrationSent(true)
        }).catch(e => {
            setLoading(false)
            console.log(e)
        })
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
                {user?.token ?
                    <div style={{padding: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        PAGE CONNECTÉ..
                    </div>
                    :
                    isRegistrationSent ?
                        <RegistrationSentComponent />
                        :
                        <SignUpComponent loading={loading} onSubmit={data => handleSignUp(data)} />
                }
            </section>

            <FooterComponent />
        </>
  )
}

export default Home

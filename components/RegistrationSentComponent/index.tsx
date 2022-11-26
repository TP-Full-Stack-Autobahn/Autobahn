import React from "react";
import styles from "./RegistrationSentComponent.module.scss";
import Image from "next/image";

const RegistrationSentComponent:React.FC = () => {
    return (
        <div className="container vertical-margin">
            <h1 className="title">Inscription</h1>
            <p>
                Votre demande d’inscription a bien été prise en compte.
                Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.
            </p>
            <div className={styles.downloadContainer}>
                <Image src="/app-store.png" alt="App store download logo" width="180" height="52" />
                <Image src="/google-play.png" alt="Google play logo" width="180" height="52" />
            </div>
        </div>
    )
}

export default RegistrationSentComponent
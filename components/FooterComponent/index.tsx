import React from "react";
import styles from "./FooterComponent.module.scss";

const FooterComponent:React.FC = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>Contact</li>
                <li>Conditions générales d'utilisation (CGU)</li>
            </ul>
            <p>Autobahn {new Date().getFullYear()} - Tout droits reservés</p>
        </footer>
    )
}

export default FooterComponent
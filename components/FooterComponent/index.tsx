import React from "react";
import styles from "./FooterComponent.module.scss";
import Link from "next/link";
import Image from "next/image";

const FooterComponent:React.FC = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href="/">
                    <li>Contact</li>
                </Link>
                <Link href="/">
                    <li>Conditions générales d'utilisation (CGU)</li>
                </Link>
            </ul>
            <p>Autobahn {new Date().getFullYear()} - Tout droits reservés</p>
        </footer>
    )
}

export default FooterComponent
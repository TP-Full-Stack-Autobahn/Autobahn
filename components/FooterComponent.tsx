import React from "react";

const FooterComponent:React.FC = () => {
    return (
        <footer>
            <ul>
                <li>Contact</li>
                <li>Conditions générales d'utilisation (CGU)</li>
            </ul>
            <p>Autobahn {new Date().getFullYear()} - Tout droits reservés</p>
        </footer>
    )
}

export default FooterComponent
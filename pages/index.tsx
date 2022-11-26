import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import styles from "../styles/pages/home.module.scss";
import {InputComponent, RadioComponent, SelectComponent} from "autobahn-ui";

const Home:NextPage = () => {
    return (
        <>
            <HeaderComponent />

            <section>
                <div className={`${styles.fullContainer} ${styles.bannerContainer}`}>
                    <p className='container'>
                        ▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour répondre à toutes vos demandes
                    </p>
                </div>
                <form className="container">
                    <h1 className={styles.title}>Inscription</h1>
                    <p className={styles.subTitle}>Je suis :</p>
                    <div className={styles.radioContainer}>
                        <RadioComponent label="Une entreprise" value="company" name="client" />
                        <RadioComponent label="Un particulier" value="individual" name="client" />
                    </div>
                    <InputComponent type="text" name="lastname" label="Nom" />
                    <InputComponent type="text" name="firstname" label="Prénom" />
                    <InputComponent type="email" name="email" label="Email" />
                    <InputComponent type="number" name="phone" label="Téléphone" />
                    <SelectComponent name="nationality" label="Nationalité" options={{"none": "Séléctionner une nationalité", "french": "Française", "english": "Anglaise"}} />
                </form>
            </section>

            <FooterComponent />
        </>
  )
}


export default Home

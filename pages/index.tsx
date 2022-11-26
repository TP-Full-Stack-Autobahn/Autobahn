import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import styles from "../styles/pages/home.module.scss";
import {InputComponent, SelectComponent} from "autobahn-ui";

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
                    <p>Je suis :</p>
                    <input type="radio" id="company" name="client" value="company" />
                    <label htmlFor="company">Une entreprise</label>
                    <input type="radio" id="individual" name="client" value="individual" />
                    <label htmlFor="individual">Un particulier</label>
                    <InputComponent type="text" name="lastname" label="Nom" />
                    <InputComponent type="text" name="firstname" label="Prénom" />
                    <InputComponent type="email" name="email" label="Email" />
                    <InputComponent type="number" name="phone" label="Téléphone" />
                    {/*<SelectComponent name="nationality" options={['stezig','gfujazeno']} />*/}
                </form>
            </section>

            <FooterComponent />
        </>
  )
}


export default Home

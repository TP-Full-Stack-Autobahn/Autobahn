import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const Home:NextPage = () => {
    return (
        <>
            <HeaderComponent />

            <section>
                <div className="full-container">
                    <div className="container infos-container">
                        <p>
                            ▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour répondre à toutes vos demandes
                        </p>
                    </div>
                </div>
                <form className="container">
                    <h1 className="title">Inscription</h1>
                    <p>Je suis :</p>
                    <label htmlFor="company">Une entreprise</label>
                    <input type="radio" id="company" name="client" value="company" />
                    <label htmlFor="individual">Un particulier</label>
                    <input type="radio" id="individual" name="client" value="individual" />
                </form>
            </section>

            <FooterComponent />
        </>
  )
}


export default Home

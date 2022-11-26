import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/pages/home.module.scss";
import {InputComponent, SelectComponent} from "autobahn-ui";
import FooterComponent from "../components/FooterComponent";

const SignIn:NextPage = () => {
  return (
      <>
          <HeaderComponent />

          <section>
              Sign in
          </section>

          <FooterComponent />
      </>
  )
}

export default SignIn

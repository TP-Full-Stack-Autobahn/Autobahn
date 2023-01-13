import React, {FormEvent, useState} from "react";
import styles from "./SignInComponent.module.scss";
import {ButtonComponent, InputComponent} from "autobahn-ui";

type SignUpProps = {
    loading: boolean,
    onSubmit: (formData: FormData) => void
}

const SignInComponent:React.FC<SignUpProps> = (props) => {
    const {onSubmit, loading} = props
    const [idError, setIdError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formError:boolean = false
        setIdError('')
        setPasswordError('')

        // @ts-ignore
        const formData = new FormData(e.target)

        if (!formData.get('email')) {
            setIdError('Veuillez entrer votre identifiant.')
            formError = true
        }
        if (!formData.get('password')) {
            setPasswordError('Veuillez entrer votre mot de passe.')
            formError = true
        }

        if (formError) {
            return
        }

        onSubmit(formData)
    }

    return (
        <form className={`${styles.signInForm}`} onSubmit={e => handleSubmit(e)}>
            <h1 className="title">Connexion</h1>

            <div className={styles.inputContainer}>
                <InputComponent type="text" name="email" label="Identifiant" />
                {idError && <p className={styles.error}>{idError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="password" name="password" label="Mot de passe" />
                {passwordError && <p className={styles.error}>{passwordError}</p>}
            </div>

            <ButtonComponent loading={loading} className={styles.submitBtn}>Connexion</ButtonComponent>
        </form>
    )
}

export default SignInComponent
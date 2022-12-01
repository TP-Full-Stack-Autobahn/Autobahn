export type ErrorsReducerState = {
    clientError: string,
    lastnameError: string,
    firstnameError: string,
    emailError: string,
    phoneError: string,
    nationalityError: string,
    validateError: string
}

export type ErrorsReducerActions =
    | "setClientError"
    | "setLastnameError"
    | "setFirstnameError"
    | "setEmailError"
    | "setPhoneError"
    | "setNationalityError"
    | "setValidateError"
    | "cleanError"

export const errorsReducerDefault: ErrorsReducerState = {
    clientError: "",
    lastnameError: "",
    firstnameError: "",
    emailError: "",
    phoneError: "",
    nationalityError: "",
    validateError: ""
}

const errorReducer = (
    state: ErrorsReducerState,
    action: ErrorsReducerActions
): ErrorsReducerState => {
    switch (action) {
        case "setClientError":
            return {
                ...state,
                clientError: "Veuillez séléctionner une option."
            }
        case "setLastnameError":
            return {
                ...state,
                lastnameError: "Veuillez indiquer votre nom."
            }
        case "setFirstnameError":
            return {
                ...state,
                firstnameError: "Veuillez indiquer votre prénom."
            }
        case "setEmailError":
            return {
                ...state,
                emailError: "Veuillez indiquer votre email."
            }
        case "setPhoneError":
            return {
                ...state,
                phoneError: "Veuillez indiquer votre téléphone."
            }
        case "setNationalityError":
            return {
                ...state,
                nationalityError: "Veuillez indiquer votre nationalité."
            }
        case "setValidateError":
            return {
                ...state,
                validateError: "Veuillez cocher cette option."
            }
        case "cleanError":
            return errorsReducerDefault
    }
}
export default errorReducer
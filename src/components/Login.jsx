import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    validateEmail,
    emailValidationMessage,
    validatePassword,
    passwordValidationMessage
} from "../shared/validators";
import { useLogin } from "../shared/hooks";
import "bulma/css/bulma.min.css"


export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "email":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(formState.email.value, formState.password.value);
    };

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid;
    return (
        // <>
        //     <div className="container flex-direction: column"
        //         // style={{
        //         //     marginTop: "6%",
        //         //     width: "100%",
        //         //     height: "auto",
        //         //     display: "flex",
        //         //     justifyContent: "center",
        //         //     alignItems: "center"
        //         // }}
        //     >
        //         <div className="card"
        //             // style={
        //             //     {
        //             //         width: "30%",
        //             //         height: "auto",
        //             //         marginBottom: "1.5rem",
        //             //         display: "flex",
        //             //         justifyContent: "center",
        //             //         alignItems: "center",
        //             //         textAlign: "center",
        //             //         // backgroundColor: "#0E46A3  ",
        //             //     }
        //             // }
        //         >
        //             <div className="card-content" style={{
        //                 // display: "flex",
        //                 // flexDirection: "column",
        //                 // alignItems: "center",
        //                 // justifyContent: "center",
        //                 // width: "400px",
        //                 // margin: "0 auto",

        //             }}>

        //                 <Logo />
        //                 <form>
        //                     <Input
        //                         field="email"
        //                         label="Username"
        //                         value={formState.email.value}
        //                         onChangeHandler={handleInputValueChange}
        //                         type="text"
        //                         showErrorMessage={formState.email.showError}
        //                         validationMessage={emailValidationMessage}
        //                         onBlurHandler={handleInputValidationOnBlur}
        //                         placeholder={"Username"}
        //                     />
        //                     <Input
        //                         field="password"
        //                         label="Password"
        //                         value={formState.password.value}
        //                         onChangeHandler={handleInputValueChange}
        //                         type="password"
        //                         showErrorMessage={formState.password.showError}
        //                         validationMessage={passwordValidationMessage}
        //                         onBlurHandler={handleInputValidationOnBlur}
        //                         placeholder={"Password"}
        //                     />
        //                     <div>
        //                         <button onClick={handleLogin} disabled={isSubmitButtonDisabled} className="button is-success"
        //                             style={
        //                                 {
        //                                     marginTop: "10%",
        //                                     width: "30%",
        //                                     cursor: "pointer",
        //                                     color: "white",
        //                                 }
        //                             }
        //                         >
        //                             Login
        //                         </button>
        //                     </div>

        //                 </form>
        //                 <span onClick={switchAuthHandler} className="subtitle is-6"
        //                     style={{
        //                         cursor: "pointer",
        //                         marginTop: "1rem",
        //                         color: "white",
        //                     }}
        //                 >
        //                     ¿Do you don't have an account? Register here!
        //                 </span>
        //             </div>
        //         </div >
        //     </div>
        // </>

        <div className="container flex-direction: column">
            <div className="columns is-centered">
                <div className="column is-one-third ">
                    <div className="card">
                        <div className="card-content has-text-centered">
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBot: "1rem"
                            }}>
                            <Logo />
                        </div>

                        <form>
                            <Input
                                field="email"
                                label="Username"
                                value={formState.email.value}
                                onChangeHandler={handleInputValueChange}
                                type="text"
                                showErrorMessage={formState.email.showError}
                                validationMessage={emailValidationMessage}
                                onBlurHandler={handleInputValidationOnBlur}
                                placeholder="Username"
                            />
                            <Input
                                field="password"
                                label="Password"
                                value={formState.password.value}
                                onChangeHandler={handleInputValueChange}
                                type="password"
                                showErrorMessage={formState.password.showError}
                                validationMessage={passwordValidationMessage}
                                onBlurHandler={handleInputValidationOnBlur}
                                placeholder="Password"
                            />
                            <div>
                                <button onClick={handleLogin} disabled={isSubmitButtonDisabled} className="button is-success">
                                    Login
                                </button>
                            </div>
                            <div><br /></div>
                        </form>
                        <span onClick={switchAuthHandler} className="subtitle is-6">
                            ¿Do you don't have an account? Register here!
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div >


    );

}

import { useState } from "react"
import { Login } from "../../components/Login"

import "bulma/css/bulma.min.css"

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev)
    }

    return (
        <div className="field">
            {isLogin ? (
                <Login switchAuthHandler={handleAuthPageToggle} />
            ) : (
                <div>
                    <h1>Page change</h1>
                </div>
            )
            }
        </div>
    )
}
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/almacenadoraIcon.png'
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import "bulma/css/bulma.min.css"

const NavLogo = () => {
    return (

        <div className="nav-item">
            <img
                src={logo}
            />
        </div>

    )
}

const NavButton = ({ text, onclickHandler }) => {
    return (
        <span className="button is-danger" onClick={onclickHandler}>
            {text}
        </span>
    );
};

export const Navbar = () => {
    const { logout } = useUserDetails();

    const navigate = useNavigate()

    const handleLgout = () => {
        logout()
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLogo />
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-ligth">
                                <NavButton text="Logout" onclickHandler={handleLgout} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
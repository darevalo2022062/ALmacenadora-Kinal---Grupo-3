import logo from '../assets/img/almacenadoraIcon.png'
import "bulma/css/bulma.min.css"
export const Logo = () => {
    return (
        <figure className="image is-128x128">
            <img className="is-rounded" src={logo} />
        </figure>
    )
}
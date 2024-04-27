import logo from '../assets/img/almacenadoraIcon.png'
import "bulma/css/bulma.min.css"
export const Logo = () => {
    return (
        <figure class="image is-128x128">
            <img class="is-rounded" src={logo} />
        </figure>
    )
}
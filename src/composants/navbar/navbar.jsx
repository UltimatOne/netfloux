import { Link } from "react-router-dom";
import "./navbar.css"
import Logo from "../Logo/logo";
import { Bouton } from "../Bouton/bouton";

export default function Navbar(){
    return (
        <div id="navD1">
            <Logo />
            <Link to="./composants/pages/offres/offres">Offres</Link>
            <Link to="./composants/pages/programmes/programmes">Programmes</Link>
            <Link to="./composants/pages/actuallites/actuallites">Actualités</Link>
            <Bouton text="Inscription"/>
            <Bouton text="Se connecter" color="red"/>
        </div>
    )
}
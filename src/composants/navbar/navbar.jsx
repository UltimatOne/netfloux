
import "./navbar.css"
import Logo from "../Logo/logo";
import { Bouton } from "../Bouton/bouton";

export default function Navbar(){
    return (
        <div id="navD1">
            <Logo />
            <link rel="stylesheet" href="#" />
            <link rel="stylesheet" href="#" />
            <link rel="stylesheet" href="#" />
            <Bouton text="Inscription"/>
            <Bouton text="Se connecter"/>
        </div>
    )
}
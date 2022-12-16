import { Link } from "react-router-dom";
import "./navbar.css"
import Logo from "../Logo/logo-netfloux.png";
import { Bouton } from "../Bouton/bouton";

export default function Navbar(){
    return (
        <div id="navD1">
            <Link to="/" id="nl1"><img src={Logo} alt="Accueil logo Netfloux" id="logo"/></Link>
            <Link to="/offres" id="nl2">Offres</Link>
            <Link to="/programmes" id="nl3">Programmes</Link>
            <Link to="/actuallites" id="nl4">Actualités</Link>
            <Bouton id="nb1" text="Inscription" color="#669024"/>
            <Bouton id="nb2" text="Se connecter" color="#0094FF"/>
        </div>
    )
}
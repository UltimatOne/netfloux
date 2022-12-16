import "./aside.css"
import { Bouton } from "../Bouton/bouton"
export default function Aside(){
    return (
        <div id="aside">
            <Bouton color="#3F6602" text="FILMS"id="aB1"/>
            <Bouton text="SERIES" id="aB2"/>
            <Bouton color="#FFCA3A" text="MUSIQUES" id="aB3"/>
            <Bouton color="#007C97" text="GAMING" id="aB4"/>
            <Bouton text="FORUM" id="aB5"/>
            <Bouton color="#FFCA3A" text="FRESH NEWS" id="aB6"/>
            <Bouton text="YouTube"id="aB7"/>
        </div>)
}
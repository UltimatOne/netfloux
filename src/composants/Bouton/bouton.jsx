import "bouton.css";


export const Bouton = (props) =>{
return (
    <button className="Bouton" onClick={props.onClick}>
        {props.text}
        </button>


)

}












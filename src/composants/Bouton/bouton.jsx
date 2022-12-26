import "./bouton.css";

export const Bouton = (props) => {
    return (
      <button className="Bouton" onClick={props.onClick} style={{backgroundColor: props.color|| "#FF4047"}} id={props.id}>
        {props.text}
      </button>
    );
  };

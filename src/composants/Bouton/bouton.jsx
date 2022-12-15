import "./bouton.css";

export const Bouton = (props) => {
    return (
      <button className="Bouton" id="Bouton" onClick={props.onClick}>
        {props.text}
      </button>
    );
  };

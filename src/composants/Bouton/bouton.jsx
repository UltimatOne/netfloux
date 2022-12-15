import "./bouton.css";

export const Bouton = (props) => {
    return (
      <button className="Bouton" onClick={props.onClick} style={{backgroundColor: props.color|| "purple"}}>
        {props.text}
      </button>
    );
  };

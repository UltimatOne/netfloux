import "./asideSug.css";

export default function AsideSug(props) {
  return (
    <>
      <div id="asideSug">
        <div id="titreAsug">
          <h4>SUGGESTIONS</h4>
        </div>
        {props.element1}
        {props.element2}
        {props.element3}
        {props.element4}
      </div>
    </>
  );
}

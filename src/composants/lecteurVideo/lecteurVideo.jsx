import "./lecteurVideo.css";
export default function LecteurVideo(props) {
  return (
    <>
      <div id={props.id}>
        <div id="lecteurVideo"></div>
        {props.text}
      </div>
    </>
  );
}

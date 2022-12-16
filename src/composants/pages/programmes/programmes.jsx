import AsideNav from "../../asideNav/asideNav";
import AsideSug from "../../asideSug/asideSug";
import LecteurVideo from "../../lecteurVideo/lecteurVideo";
import "./programmes.css";

function Programmes() {
  return (
    <div id="programmes">
      <AsideNav />
      <div id="programmesMain">
        <h1>Programmes</h1>
      </div>
      <AsideSug 
      element1={<LecteurVideo id="lecteur1" text="DIE HARD 10" />}
      element2={<LecteurVideo id="lecteur2" text="MAD MAX 7" />}
      element3={<LecteurVideo id="lecteur3" text="LES FANTOMES DE NOEL" />}
      element4={<LecteurVideo id="lecteur4" text="SELECTION YOUTUBE" />}/>
    </div>
  );
}
export default Programmes;


import AsideNav from "../../asideNav/asideNav";
import AsideSug from "../../asideSug/asideSug";
import LecteurVideo from "../../lecteurVideo/lecteurVideo";
import "./offres.css";

function Offres() {
  return (
    <div id="offres">
      <AsideNav />
      <div id="offresMain">
        <h1>Offres</h1>
      </div>
      <AsideSug
       element1={<LecteurVideo id="lecteur1" text="AVATAR 2" />}
       element2={<LecteurVideo id="lecteur2" text="STAR TREK DISCOVERY" />}
       element3={<LecteurVideo id="lecteur3" text="HITS DE NOEL" />}
       element4={<LecteurVideo id="lecteur4" text="SELECTION YOUTUBE" />}/>
    </div>
  );
}
export default Offres;

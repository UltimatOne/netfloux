import AsideNav from "../../asideNav/asideNav";
import AsideSug from "../../asideSug/asideSug";
import LecteurVideo from "../../lecteurVideo/lecteurVideo";
import "./actuallites.css";
function Actuallites() {
  return (
    <div id="actuallites">
      <AsideNav />
      <div id="actuallitesMain">
        <h1>Actuallités</h1>
      </div>
      <AsideSug
       element1={<LecteurVideo id="lecteur1" text="YOUTUBE GAMES" />}
       element2={<LecteurVideo id="lecteur2" text="YOUTUBE CRITIQUES" />}
       element3={<LecteurVideo id="lecteur3" text="YOUTUBEUR FANS" />}
       element4={<LecteurVideo id="lecteur4" text="YOUTUBE GAMES" />}/>
    </div>
  );
}
export default Actuallites;

import "./landingPage.css";

export default function LandingPage() {
  return (
    <div>
      <header>
        <video className="video-intro" autoplay loop muted>
          <source
            src="video_trailer.mov"
            type="video/mp4"
          />
        </video>
        <h1 className="titre-Intro-h1">Faites le plein d'émotions</h1>
        <h2 className="titre-Intro-h2">
          L'abonnement Netfloux Premium vous permet de regarder de nombreux
          films et séries populaires
        </h2>
      </header>
    </div>
  );
}

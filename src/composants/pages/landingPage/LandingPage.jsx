import "./landingPage.css";

export default function LandingPage() {
  return (
    <div>
      <video id="videoIntro" autoPlay loop muted>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          type="video/mp4"
        />
      </video>
      <div className="containerIntro">
        <h1 className="titre-Intro-h1">Faites le plein d'émotions <br/><span className="h1Span">L'abonnement Netfloux Premium vous permet de</span> <span className="h1Span">regarder de nombreux
films et séries populaires</span></h1>
        
          
          
      </div>
    </div>
  );
}

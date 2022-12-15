import "landingPage.css";

export default function landingPage() {
  return (
    <div>
      <header>
        <video className="video-intro" autoplay loop muted>
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
        <h1>Faites le plein d'émotions</h1>
        <h2>
          L'abonnement Netfloux Premium vous permet de regarder de nombreux
          films et séries populaires
        </h2>
      </header>
    </div>
  );
}

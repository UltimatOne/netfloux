import Navbar from "./composants/navbar/navbar";

import logo from './logo-netfloux.png';
import './App.css';
import { BoutonLeft } from "./composants/leftAside/leftAside";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header"> 
      <div className="containerLeft">
      <BoutonLeft name="FILM" /><br/>
      <BoutonLeft name="SERIES" /><br/>
      <BoutonLeft name="MUSIQUES" /><br/>
      <BoutonLeft name="GAMING" /><br/>
      <BoutonLeft name="FORUM" /><br/>
      <BoutonLeft name="FRESH NEWS" /><br/>
      <BoutonLeft name="YouTube" /><br/>

    </div>
      
        <img src={logo} className="App-logo" alt="logo" /> 
     
       </header>
       
      
    
    </div>
  );
}

export default App;

import React from "react";
import "../styles/home.css"

function Home() {
  return (
    <>
      <div className="home">
        <div className="titolo">
          <h1>Officina Mobile LV</h1>
        </div>
      </div>
      <div className="paragrafo">
        <p>
          Offriamo servizi di riparazione e manutenzione di veicoli a domicilio.
          Siamo a vostra disposizione per interventi urgenti o programmabili.
        </p>
      </div>
    </>
  );
}

export default Home;

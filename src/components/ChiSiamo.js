import React from "react";
import companyLogo from "../assets/Logo.svg";
import "../styles/ChiSiamo.css";

function ChiSiamo() {
  return (
    <div>
      <h2>Chi Siamo</h2>
      <div className="company-info">
        <img src={companyLogo} alt="Logo dell'azienda" /> 
        <p>
          La nostra azienda è specializzata nella riparazione e manutenzione di
          veicoli di ogni marca e modello. Con anni di esperienza nel settore,
          il nostro team di meccanici altamente qualificati è pronto ad
          assistervi per ogni vostra esigenza. La nostra missione è fornire un
          servizio di alta qualità e garantire la massima soddisfazione del
          cliente. Contattaci per ulteriori informazioni o per prenotare il tuo
          prossimo appuntamento!
        </p>
      </div>
    </div>
  );
}

export default ChiSiamo;

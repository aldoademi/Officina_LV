import React from "react";
import '../styles/Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Grazie per averci contattato!");
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contatti</h2>
      <p className="contact-description">
        Per richiedere un preventivo o per qualsiasi altra informazione, non
        esitate a contattarci.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-label">
            Nome:
          </label>
          <input type="text" id="name" required className="contact-input" />
        </div>

        <div className="contact-form-group">
          <label htmlFor="email" className="contact-label">
            Email:
          </label>
          <input type="email" id="email" required className="contact-input" />
        </div>

        <div className="contact-form-group">
          <label htmlFor="message" className="contact-label">
            Messaggio:
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="contact-textarea"
          />
        </div>

        <button type="submit" className="contact-button">
          Invia
        </button>
      </form>
    </div>
  );
}

export default Contact;

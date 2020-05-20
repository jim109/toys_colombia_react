import React from "react";

function Contact() {
  return (
    <section className="contact">
      <form action="/suscripcion/" className="form-email">
        <p>¿Tienes alguna duda, escribenos?</p>
        <input type="text" placeholder="Dejame tu email" id="email" />
        <button>Enviar</button>
      </form>
      <div className="social">
        <p className="title-social">Siguenos en nuestras redes sociales.</p>
        <at
          href="https://twitter.com/jimwy109"
          className="social-link twitter"
        ></at>
        <at
          href="https://facebook.com/toys.col"
          className="social-link facebook"
        ></at>
        <at
          href="https://instagram.com/jimmy_osma"
          className="social-link instagram"
        ></at>
      </div>
    </section>
  );
}

export default Contact;

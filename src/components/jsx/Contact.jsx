import React from "react";

const Contact = () => {
  return (
    <div>
      <title>Contacto - Estarlincito</title>
      <form
        className="form"
        action="https://formspree.io/f/mzbovyaw"
        method="POST"
      >
        <div className="form__container">
          <h2 className="form__title">Contáctanos</h2>
          <label className="form__label">Nombre</label>
          <input
            type="text"
            className="form__input"
            name="name"
            title="Por favor escriba su nombre"
            required
          />

          <label className="form__label">Correo electrónico</label>
          <input
            type="text"
            className="form__input"
            name="email"
            title="Por favor escriba su correo electrónico"
            required
          />

          <label className="form__label">Número telefónico</label>
          <input
            type="number"
            className="form__input"
            name="phoneNumber"
            title="Por favor escriba su número telefónico"
            required
          />

          <label className="form__label">Asunto</label>
          <input
            type="text"
            className="form__input"
            name="requestSubject"
            title="Por favor escriba su asunto"
            required
          />

          <label className="form__label">Mensaje</label>
          <textarea
            className="form__input form__input--message"
            name="message"
            title="Por favor escriba su mensaje"
            required
          ></textarea>
          <input type="submit" value="Enviar" className="form__cta" />
        </div>
      </form>
    </div>
  );
};

export default Contact;

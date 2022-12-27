import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/UserContext";

const Contact = () => {
  const { subtitle_value, HelmetData } = useContext(Context);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    subtitle_value === "" ? null : setSubject(subtitle_value);
  }, []);

  return (
    <>
      <HelmetData title="Contacto" />
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
            autoFocus
            required
          />

          <label className="form__label">Correo electrónico</label>
          <input
            type="email"
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
    </>
  );
};

export default Contact;

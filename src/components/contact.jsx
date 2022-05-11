import React from "react";

const Contact = () =>{
    return(
        <div>
            <title>Contacto - Estarlincito</title>
            <form 
                className="form" action="https://formspree.io/f/mzbovyaw" method="POST"
            >

                <div className="form__container">
                    <h2 className="form__title">Contáctame</h2>
                    <label className="form__label">Nombre</label>
                    <input type="text" className="form__input" name="name"/>

                    <label className="form__label">Correo electrónico</label>
                    <input type="text" className="form__input" name="email"/>

                    <label className="form__label">Número telefónico</label>
                    <input type="number" className="form__input" name="phoneNumber"/>

                    <label className="form__label">Asunto</label>
                    <input type="text" className="form__input" name="requestSubject"/>

                    <label className="form__label">Mensaje</label>
                    <textarea className="form__input form__input--message" name="message"></textarea>
                    <input type="submit" value="Enviar" className="form__cta"/>
                </div>
            </form>
        </div>
    )
}

export default Contact;
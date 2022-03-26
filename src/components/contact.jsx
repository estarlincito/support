import React from "react";

const contact = () =>{
    return(
        <div className="container">
            <title>Contacto - Estarlincito</title>
            <form 
                className="form" action="https://formspree.io/f/mzbovyaw" method="POST"
            >

                <div className="form__container">
                    <h2 className="form__title">Contáctame</h2>
                    <input type="text" className="form__input" placeholder="Nombre:" name="name"/>
                    <input type="text" className="form__input" placeholder="Email:" name="email"/>
                    <input type="number" className="form__input" placeholder="Número Telefónico:" name="phoneNumber"/>
                    <input type="text" className="form__input" placeholder="Asunto:" name="requestSubject"/>
                    <textarea className="form__input form__input--message" placeholder="Mensaje:" name="message"></textarea>
                    <input type="submit" value="Enviar" className="form__cta"/>
                </div>
            </form>
        </div>
    )
}

export default contact;
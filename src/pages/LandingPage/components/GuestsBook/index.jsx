import React from "react";
import "./styles/styles.css";

require("dotenv").config();

function GuestsBook() {
  return (
      <div className="guests-book-container">
      <form action={`https://formsubmit.co/${process.env.REACT_APP_SEND_MSG_TO_EMAIL}`} method="POST">
          <input type="hidden" name="_subject" value="Alguém assinou seu Livro de Visitas!" />
        <section className="section-user-credentials">
          <h1>Livro de Visitas</h1>
          <fieldset>
            <input name="Nome" placeholder="Nome" type="text" required />
            <input name="E-mail" placeholder="E-mail" type="email" required />
          </fieldset>
        </section>
        <section className="section-user-message">
          <h2>Envie sua mensagem!</h2>
          <fieldset>
            <textarea
              name="Mensagem"
              cols="30"
              rows="10"
              placeholder="Digite aqui..."
              required
            ></textarea>
          </fieldset>
        </section>
        <fieldset className="fieldset-btns-form">
          <button type="submit">Enviar</button>
          <button type="reset">Limpar campos</button>
        </fieldset>
      </form>
    </div>
  );
}

export default GuestsBook;

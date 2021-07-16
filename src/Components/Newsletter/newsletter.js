import React from 'react';

import './style.css';

export default function Newsletter() {
  return (
    <div className="newsletter">
      <h1>CADASTRE-SE PARA RECEBER AS OFERTAS DO BLACK FRIDAY!</h1>
      <p>Preparamos muitas promoções incriveis para você.</p>
      <p>Venha Conferir e ganhe frete grátis em todas as compras no site!</p>

      <div className="formNewsletter">
        <form>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <button>Inscrever</button>
        </form>
      </div>
    </div>
  );
}

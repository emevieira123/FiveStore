import React, { useState } from 'react';

import './style.css';

export default function Newsletter() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');

  function handleInscrever(e) {

    e.preventDefault();

    if (usuario && email != null) {
      localStorage.setItem('Name', JSON.stringify(usuario));
      localStorage.setItem('E-mail', JSON.stringify(email));
      alert('Cadastrado com sucesso!')
    } else {
      alert('ERROR - Verifique os dados e tente novamente!')
    }

  }

  return (
    <div className="newsletter">
      <h1>CADASTRE-SE PARA RECEBER AS OFERTAS DO BLACK FRIDAY!</h1>
      <p>Preparamos muitas promoções incriveis para você.</p>
      <p>Venha Conferir e ganhe frete grátis em todas as compras no site!</p>

      <div className="formNewsletter">
        <form>
          <input type="text" placeholder="Nome" value={usuario} onChange={e => setUsuario(e.target.value)} required />
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
          <button type="button" onClick={handleInscrever}>Inscrever</button>
        </form>
      </div>
    </div>
  );
}

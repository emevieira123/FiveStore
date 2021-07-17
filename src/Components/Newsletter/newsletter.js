import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './style.css';

export default function Newsletter() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');

  function handleInscrever(e) {
    const MySwal = withReactContent(Swal)

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome === '' || email === '') {
      let campoEmBranco = (nome === '') ? 'nome' : 'email';
      mensagemRetorno('error', `Falha, Verifique o campo de  ${campoEmBranco}.`);
      return;
    }

    let dadosInseridos = {
      nome: nome,
      email: email
    };

    localStorage.setItem('dataForm', JSON.stringify(dadosInseridos));
    mensagemRetorno('success', "Cadastro realizado com sucesso!!!");

    document.getElementById("nome").value = '';
    document.getElementById("email").value = '';

    function mensagemRetorno(tipo, msg) {
      MySwal.fire({
        position: 'center',
        icon: tipo,
        title: '',
        text: msg,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });

    }
  }

  return (
    <div className="newsletter">
      <h1>CADASTRE-SE PARA RECEBER AS OFERTAS DO BLACK FRIDAY!</h1>
      <p>Preparamos muitas promoções incriveis para você.</p>
      <p>Venha Conferir e ganhe frete grátis em todas as compras no site!</p>

      <div className="formNewsletter">
        <form>
          <input type="text" placeholder="Nome" id="nome" value={usuario} onChange={e => setUsuario(e.target.value)} required />
          <input type="email" placeholder="E-mail" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <button type="button" onClick={handleInscrever}>Inscrever</button>
        </form>
      </div>
    </div>
  );
}

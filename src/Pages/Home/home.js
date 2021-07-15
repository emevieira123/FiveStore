import React from 'react'
import Menu from '../../Components/Menu';

import './style.css';

export default function Home() {
  return (
    <div className="containerBody">

      <img src="./assets/black.jpeg" alt="" />
      <Menu />
      {/* <div className="container1">1</div> */}

      <div className="container2">

        <p>
          Temos ofertas especiais esperando por você!</p>
        <p>Cadastre-se</p>
        <input placeholder="Informe seu E-mail!" />
        <button>Enviar</button>
      </div>
    </div>
  );
}

import React from 'react'
import Menu from '../../Components/Menu';
import { Link } from 'react-scroll';

import './style.css';

export default function Home() {
  return (
    <div className="containerBody">

      <img src="./assets/black.jpeg" alt="" />
      <Menu />

      <div className="container2">
        <p>Vem ai a maior liquidação de todos os tempos, com produtos com desconto de até</p>
        <h1 id="promotionText1">70%</h1>
        <h3 id="promotionText2">OFF</h3>
        <p id="text1">Cadastre-se em nossa <b>NEWSLETTER</b> e fique por dentro de todas as novidades.</p>

        <Link
          activeClass="active"
          to="newsletter"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button>Cadastrar-se</button>
        </Link>
      </div>
    </div>
  );
}

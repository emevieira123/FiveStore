import React from 'react';
import { Link } from 'react-scroll';

import './style.css';

const Menu = () => {
  return (
    <div className="Menu">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Home</button>
      </Link>
      <Link
        activeClass="active"
        to="product"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Produtos</button>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Contato</button>
      </Link>
    </div>
  );
}

export default Menu;

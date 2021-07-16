import React from 'react'
import Menu from '../../Components/Menu'
import Newsletter from '../../Components/Newsletter/newsletter'

import './style.css'

export default function Products() {
  return (
    <div className="productsBody">
      {/* <img src="./assets/fundo1.jpeg" alt="" /> */}
      <Menu />
      {/* <h1>Produtos</h1> */}
      <div className="containerProducts">
        <div className="gridProducts"></div>
        <div className="gridProducts"></div>
        <div className="gridProducts"></div>
      </div>
      <Newsletter />
    </div>
  );
}

import React from 'react'
import Menu from '../../Components/Menu'
import Newsletter from '../../Components/Newsletter/newsletter'

import './style.css'

export default function Products() {
  return (
    <div className="productsBody">
      {/* <img src="./assets/fundo1.jpeg" alt="" /> */}

      {/* <h1>Produtos</h1> */}
      <div className="containerProducts">

        <div className="gridProducts">
          <div className="productImage">
            <img src="./assets/galaxyA1.jpeg" alt="" />
          </div>
          <h3 className="titleProduct">Samsung Galaxy A1</h3>
          <p className="descritionProduct">Com seu display HD+ de 5,3 polegadas, o Galaxy A01 Core oferece uma experiência imersiva na tela grande. Assim, você pode aproveitar seus conteúdos em um belo design.</p>
          <button className="buttonProduct">Saiba Mais!</button>
        </div>

        <div className="gridProducts">
          <div className="productImage">
            <img src="./assets/notLenovo.jpeg" alt="" />
          </div>
          <h3 className="titleProduct">Notebook Lenovo IdeaPad S145</h3>
          <p className="descritionProduct">No ideapad S145 você tem a possibilidade de utilizar o armazenamento de forma híbrida e ganhar muito mais agilidade e produtividade no seu dia a dia. Com o slot disponível, você tem a opção de adicionar um SSD ou HDD.</p>
          <button className="buttonProduct">Saiba Mais!</button>
        </div>

        <div className="gridProducts">
          <div className="productImage">
            <img src="./assets/impressora.jpeg" alt="" />
          </div>
          <h3 className="titleProduct">Impressora Epson L3150</h3>
          <p className="descritionProduct">Impressora Multifuncional Epson L3150 - Wireless EcoTank Tanque de Tinta Baixo custo de Impressão, Design novo, Resolução Alta, Wi-fi Direct Integrado e Muito Mais!</p>
          <button className="buttonProduct">Saiba Mais!</button>
        </div>
      </div>
      <Menu />
      <div className="lineProduct"></div>
      <Newsletter />
    </div>
  );
}

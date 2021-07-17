import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { IoLocationSharp } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';

import './style.css'

export default function Contact() {
  return (
    <div className="contactBody">

      <div className="gripContact">
        <h2 className="tituloPatrocinio">Patrocínio</h2>
        <img className="imgPatrocinio" src="./assets/logoVTEX.svg" alt="" />
        <img className="imgPatrocinio" src="./assets/logoGama.png" alt="" />
      </div>

      <div className="gripContact">
        <h2 className="tituloSociais">Redes Sociais</h2>
        <div className="containerIcon">
          <a href="https://www.linkedin.com/in/emerson-vieira-9416267b/" target="_blank" rel="noreferrer">
            <FaLinkedin className="iconSociais" />
          </a>
          <a href="https://github.com/emevieira123/" target="_blank" rel="noreferrer">
            <FaGithub className="iconSociais" />
          </a>
          <a href="https://www.facebook.com/emersonvie/" target="_blank" rel="noreferrer">
            <FaFacebook className="iconSociais" />
          </a>
          <a href="https://www.instagram.com/emerson_vchaves/" target="_blank" rel="noreferrer">
            <GrInstagram className="iconSociais" />
          </a>
        </div>
      </div>

      <div className="gripContact">
        {/* <h2 className="tituloContact">Contato</h2> */}
        <div className="contact">
          <div className="contactInterna">
            <HiOutlineMail className="iconContact" />
            <p>emevieira@gmail.com</p>
          </div>
          <div className="contactInterna">
            <FaWhatsapp className="iconContact" />
            <p>(65) 99258-4915</p>
          </div>
          <div className="contactInterna">
            <IoLocationSharp className="iconContact" />
            <p>Mato-Grosso</p>
          </div>

        </div>
      </div>

      <div className="footer">
        © Copyright 2021 | Todos os direitos reservados.
      </div>
    </div>
  );
}

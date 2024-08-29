import React from "react";
import logo from "../../assets/logo.png"; // Import the logo image
import Cart from "../Cart/cart"; // Import the Cart component
import { FaWhatsapp } from "react-icons/fa"; // Import the FaWhatsapp icon
import "./navbar.css";

function Navbar({ itemsCount }) {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <>
      <div className="navbar">
        <a href="/src/pages/home.jsx">
          <img src={logo} className="logotipo" alt="Logotipo do site" />
        </a>

        <button onClick={openSidebar} className="button">
          <i className="fa-solid fa-cart-shopping"></i>
          Seu Carrinho
          {itemsCount > 0 && <span className="badge">{itemsCount}</span>}
        </button>

        <Cart />
      </div>

      {/* Ícone do WhatsApp */}
      <a
        href="https://wa.me/+5521988359825"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
}

export default Navbar;

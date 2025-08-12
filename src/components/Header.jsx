import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header>
      <div className="navbar container">
        <img src={logo} alt="CBS Terraplenagem Logo" className="logo" />

        <nav>
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleLinkClick}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className={location.pathname === "/sobre" ? "active" : ""} onClick={handleLinkClick}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/servicos" className={location.pathname === "/servicos" ? "active" : ""} onClick={handleLinkClick}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" className={location.pathname === "/contato" ? "active" : ""} onClick={handleLinkClick}>
                Contato
              </Link>
            </li>
            <li>
              <Link to="/faq" className={location.pathname === "/faq" ? "active" : ""} onClick={handleLinkClick}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

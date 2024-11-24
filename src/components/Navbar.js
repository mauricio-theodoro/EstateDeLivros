import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Caminho correto para o arquivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      {/* Links para as rotas */}
      <Link to="/" className="navbar-link">
        Página Principal
      </Link>
      <Link to="/search" className="navbar-link">
        Buscar Livros
      </Link>
    </nav>
  );
}

export default Navbar;

// src/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; // Crearemos este archivo para los estilos del layout

function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Propiedades</Link>
          </li>
          <li>
            <Link to="/panorama">Vista Panorámica</Link>
          </li>
          <li>
            <Link to="/mapa">Ver Mapa</Link>
          </li>

          {/* Puedes añadir más enlaces aquí */}
        </ul>
      </nav>
      <main className="content">
        <Outlet /> {/* Aquí se renderizará el componente de la ruta actual */}
      </main>
    </div>
  );
}

export default Layout;
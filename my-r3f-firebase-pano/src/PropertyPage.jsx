// src/PropertyPage.jsx
import React from 'react';
import PropertyList from './components/PropertyList'; // Asumiendo que PropertyList está en components
import './App.css'; // Podemos reutilizar algunos estilos generales de App.css

function PropertyPage() {
  return (
    <div className="App"> {/* Usamos la clase App para un layout similar si es deseado */}
      <header className="App-header">
        <h1>Propiedades Disponibles</h1>
      </header>
      <div className="properties-section">
        <PropertyList />
      </div>
    </div>
  );
}

export default PropertyPage;
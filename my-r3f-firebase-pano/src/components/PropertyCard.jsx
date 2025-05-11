// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css'; // Crearemos este archivo CSS para los estilos

function PropertyCard({ property }) {
    const { title, location, description, bathrooms, bedrooms, id } = property;

    // Ya no necesitamos handleViewDetails, usaremos Link directamente

  return (
    <div className="property-card">
      <div className="property-card-image-placeholder">
        {/* Podrías añadir una imagen aquí si la tuvieras */}
        <span>Imagen no disponible</span>
      </div>
      <div className="property-card-content">
        <h3 className="property-card-title">{title || 'Título no disponible'}</h3>
        <p className="property-card-location">{location || 'Ubicación no disponible'}</p>
        <p className="property-card-description">{description || 'Descripción no disponible'}</p>
        <div className="property-card-details">
          <span>Baños: {bathrooms !== undefined ? bathrooms : 'N/A'}</span>
          <span>Habitaciones: {bedrooms !== undefined ? bedrooms : 'N/A'}</span>
        </div>
        <Link to={`/property/${id}`} className="property-card-details-button">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
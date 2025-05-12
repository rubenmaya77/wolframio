// src/MapPage.jsx
import React from 'react';
import './MapPage.css'; // Crearemos este archivo para los estilos

function MapPage() {
  // Puedes obtener una URL de Google Maps para incrustar.
  // Ve a Google Maps, busca una ubicación, haz clic en "Compartir" y luego en "Insertar un mapa".
  // Copia la URL del atributo src del iframe que te proporcionan.
  // Ejemplo de una ubicación genérica:
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521200940501!2d-75.5669708857399!3d6.200000095514005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429c9b9b9b9b9%3A0x8e4429c9b9b9b9b9!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1622233445566!5m2!1ses!2sco";

  return (
    <div className="map-page-container">
      <h2 className="map-page-title">Ubicación en el Mapa</h2>
      <div className="map-responsive-container">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Embed"
        ></iframe>
      </div>
      <p className="map-page-info">Este es un mapa incrustado. Para mostrar ubicaciones específicas de tus propiedades, necesitaríamos integrar una API de mapas más avanzada y obtener las coordenadas de tus propiedades desde Firebase.</p>
    </div>
  );
}

export default MapPage;
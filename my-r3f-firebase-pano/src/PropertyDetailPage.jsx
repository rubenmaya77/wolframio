// src/PropertyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase-config'; // Asegúrate que la ruta es correcta
import './PropertyDetailPage.css'; // Crearemos este archivo CSS

function PropertyDetailPage() {
  const { propertyId } = useParams(); // Obtiene el ID de la URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPropertyDetails = async () => {
      if (!propertyId) return;
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, 'properties', propertyId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProperty({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Propiedad no encontrada.');
        }
      } catch (err) {
        console.error("Error al obtener detalles de la propiedad:", err);
        setError('Error al cargar los datos de la propiedad.');
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  if (loading) {
    return <div className="property-detail-loading">Cargando detalles de la propiedad...</div>;
  }
  if (error) {
    return <div className="property-detail-error" style={{ color: 'red' }}>Error: {error}</div>;
  }

  // Si después de cargar y sin errores, la propiedad sigue siendo null,
  // es mejor mostrar un mensaje indicando que no se encontró o no está disponible.
  if (!property) {
    return <div className="property-detail-info">No se encontró información para esta propiedad o la propiedad no existe.</div>;
  }

  return (
    <div className="property-detail-page">
      <header className="property-detail-header">
        <h1>{property?.title || 'Detalle de Propiedad'}</h1>
      </header>
      <div className="property-detail-content">
        <div className="property-detail-image-large-placeholder">
          {/* Si tuvieras una property.imageUrl, la mostrarías aquí */}
          <span>Espacio para imagen grande de la propiedad</span>
        </div>
        <div className="property-detail-info">
          <h2>{property?.title || 'Título no disponible'}</h2>
          <p><strong>Ubicación:</strong> {property?.location || 'No especificada'}</p>
          <p><strong>Descripción:</strong> {property?.description || 'No disponible'}</p>
          <div className="property-specs">
            <span><strong>Baños:</strong> {property?.bathrooms !== undefined ? property.bathrooms : 'N/A'}</span>
            <span><strong>Habitaciones:</strong> {property?.bedrooms !== undefined ? property.bedrooms : 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailPage;

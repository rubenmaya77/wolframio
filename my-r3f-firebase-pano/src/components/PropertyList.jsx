// src/components/PropertyList.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config'; // Asegúrate que la ruta es correcta
import PropertyCard from './PropertyCard';
import './PropertyList.css'; // Crearemos este archivo CSS

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const propertiesCollectionRef = collection(db, 'properties');
        const data = await getDocs(propertiesCollectionRef);
        
        const fetchedProperties = data.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProperties(fetchedProperties);

      } catch (err) {
        console.error("Error al obtener las propiedades:", err);
        setError("Error al cargar las propiedades desde Firebase.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="property-list-loading">Cargando propiedades...</div>;
  }

  if (error) {
    return <div className="property-list-error" style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div className="property-list-container">
      <h2>Propiedades Disponibles</h2>
      <div className="property-list">
        {properties.length > 0 ? (
          properties.map(property => <PropertyCard key={property.id} property={property} />)
        ) : (
          <p>No hay propiedades disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default PropertyList;
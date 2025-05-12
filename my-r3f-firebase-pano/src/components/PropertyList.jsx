// src/components/PropertyList.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config'; // Asegúrate que la ruta es correcta
import PropertyCard from './PropertyCard';
import './PropertyList.css'; // Crearemos este archivo CSS

function PropertyList() {
  const [allProperties, setAllProperties] = useState([]); // Almacena todas las propiedades
  const [filteredProperties, setFilteredProperties] = useState([]); // Almacena las propiedades filtradas 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
        setAllProperties(fetchedProperties);
        setFilteredProperties(fetchedProperties); // Inicialmente, mostrar todas

      } catch (err) {
        console.error("Error al obtener las propiedades:", err);
        setError("Error al cargar las propiedades desde Firebase.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    // Filtrar propiedades cuando searchTerm cambie
    if (searchTerm === '') {
      setFilteredProperties(allProperties);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = allProperties.filter(property =>
        property.location?.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredProperties(filteredData);
    }
  }, [searchTerm, allProperties]);

  if (loading) {
    return <div className="property-list-loading">Cargando propiedades...</div>;
  }

  if (error) {
    return <div className="property-list-error" style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div className="property-list-container">
      <h2>Propiedades Disponibles</h2>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Buscar por dirección..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="property-list">
      {filteredProperties.length > 0 ? (
          filteredProperties.map(property => <PropertyCard key={property.id} property={property} />)
        ) : (
          <p>No hay propiedades disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default PropertyList;
// src/App.jsx
import React, { useState, useEffect, Suspense } from 'react';
// import { Canvas } from '@react-three/fiber'; // Ya no se usa directamente aquí
// import { OrbitControls } from '@react-three/drei'; // Ya no se usa directamente aquí
// import { doc, getDoc } from 'firebase/firestore'; // Descomentar si se carga desde Firebase
// import { db } from './firebase-config'; // Descomentar si se carga desde Firebase
import ErrorBoundary from './components/ErrorBoundary'; // Importa el ErrorBoundary
import PanoramaDisplay from './components/PanoramaDisplay'; // Usamos el nuevo componente

import './App.css'; // Estilos básicos para el canvas

function App() {
    // Lógica para obtener la imageUrl para la vista panorámica principal (/panorama)
    // Puede ser una URL fija, cargada de un documento específico de Firebase, etc.
    const [mainPanoramaUrl, setMainPanoramaUrl] = useState('/mi-panorama.jpeg'); // Ejemplo de imagen local por defecto
    const [loading, setLoading] = useState(false); // Ajustar si se carga de Firebase
    const [error, setError] = useState(null);

    // const documentId = 'p29jykBRILenW8GuN2lC';
    // const collectionName = 'properties'; 

    /*
    // Comentamos temporalmente la carga desde Firebase
    useEffect(() => {
        const fetchMainPanoramaData = async () => {
            try {
                setLoading(true);
                setError(null);
                // Lógica para cargar la URL de la panorámica principal desde Firebase
                // Ejemplo: const docRef = doc(db, 'generalSettings', 'mainPanorama');
                // const docSnap = await getDoc(docRef);
                // if (docSnap.exists() && docSnap.data().url) {
                //     setMainPanoramaUrl(docSnap.data().url);
                // } else { setError("Panorámica principal no encontrada."); }
            } catch (err) {
                console.error("Error al cargar panorámica principal:", err);
                setError("Error al cargar la panorámica principal.");
            } finally {
                setLoading(false);
            }
        };
        // fetchMainPanoramaData();
    }, []);
    */

    if (loading) {
        return <div className="loading-screen">Cargando panorama...</div>;
    }

    if (error) {
        return <div className="error-screen" style={{ color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div className="App"> {/* Este div App y canvas-container son para la página /panorama */}
            <div className="canvas-container">
                {/* El componente PanoramaDisplay se encarga del Canvas y sus contenidos */}
                <ErrorBoundary>
                  <PanoramaDisplay imageUrl={mainPanoramaUrl} />
                </ErrorBoundary>
            </div>
        </div>
    );
}
export default App;

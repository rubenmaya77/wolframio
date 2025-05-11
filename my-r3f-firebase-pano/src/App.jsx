// src/App.jsx
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import PanoramaSphere from './components/PanoramaSphere'; // Importa el componente PanoramaSphere como default

import './App.css'; // Estilos básicos para el canvas

function App() {
    // Para probar con una imagen local:
    const [imageUrl, setImageUrl] = useState('/mi-panorama.jpeg'); // <-- CAMBIA 'mi-panorama.jpg' por el nombre de tu archivo en la carpeta public
    const [loading, setLoading] = useState(false); // <-- Empezamos sin cargar, ya que la imagen es local
    const [error, setError] = useState(null);

    // Define aquí el ID del documento y el nombre de la colección
    // const documentId = 'p29jykBRILenW8GuN2lC';
    // const collectionName = 'properties'; 

    /*
    // Comentamos temporalmente la carga desde Firebase
    useEffect(() => {
        const fetchImageData = async () => {
            try {
                setLoading(true);
                setError(null);
                const docRef = doc(db, collectionName, documentId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data.imageUrl) {
                        setImageUrl(data.imageUrl);
                    } else {
                        setError("El documento no contiene una 'imageUrl'.");
                    }
                } else {
                    setError("El documento no existe.");
                }
            } catch (err) {
                console.error("Error al obtener el documento:", err);
                setError("Error al cargar los datos de Firebase.");
            } finally {
                setLoading(false);
            }
        };

        fetchImageData();
    }, [documentId, collectionName]); // Dependencias para re-ejecutar si cambian
    */

    if (loading) {
        return <div className="loading-screen">Cargando panorama...</div>;
    }

    if (error) {
        return <div className="error-screen" style={{ color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Vista Panorámica con R3F (Prueba Local)</h1>
            </header>
            <div className="canvas-container">
                {imageUrl ? (
                    <Canvas camera={{ fov: 60, position: [0, 0, 0.1] }}> {/* Disminuimos el FOV para una vista con más "zoom" */}
                        <Suspense fallback={null}> {/* Suspense para la carga de la textura */}
                            <PanoramaSphere imageUrl={imageUrl} />
                        </Suspense>
                        {/* OrbitControls para mover la cámara alrededor y ver el panorama */}
                        <OrbitControls enableZoom={false} enablePan={false} />
                    </Canvas>
                ) : (
                    <div className="no-image">No hay imagen panorámica para mostrar.</div>
                )}
            </div>
        </div>
    );
}

export default App;
// src/components/PanoramaDisplay.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PanoramaSphere from './PanoramaSphere'; // Asumiendo que PanoramaSphere está en el mismo directorio

// Este componente solo se encarga de renderizar el canvas con la panorámica
function PanoramaDisplay({ imageUrl }) {
  if (!imageUrl) {
    return (
      <div className="no-image-placeholder" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: '#e0e0e0', color: '#757575', fontStyle: 'italic'}}>
        No hay imagen panorámica disponible.
      </div>
    );
  }

  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 0.1] }} style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={null}>
        <PanoramaSphere imageUrl={imageUrl} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default PanoramaDisplay;
// src/components/PanoramaSphere.jsx
import React, { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, BackSide } from 'three';
function PanoramaSphere({ imageUrl }) {
    // useLoader para cargar la textura de forma asíncrona
    const texture = useLoader(TextureLoader, imageUrl);

    // Mostrar un mensaje de carga mientras la textura se carga
    if (!texture) {
        return null; // O un componente de carga 3D si lo deseas
    }

    return (
        <mesh>
            {/* Esfera con geometría invertida para verla desde dentro */}
            <sphereGeometry args={[5, 60, 40]} /> {/* Radio, segmentos horizontales, segmentos verticales */}
            <meshBasicMaterial map={texture} side={BackSide} /> {/* Aplica la textura y BackSide */}
        </mesh>
    );
}
export default PanoramaSphere;
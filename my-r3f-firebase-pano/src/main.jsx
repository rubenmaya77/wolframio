import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import App from './App.jsx'; // Tu componente de Panorama
import PropertyPage from './PropertyPage.jsx' 
import PropertyDetailPage from './PropertyDetailPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas anidadas que usarán el Layout */}
          <Route index element={<PropertyPage />} /> {/* Página principal de propiedades */}
          <Route path="property/:propertyId" element={<PropertyDetailPage />} />
          <Route path="panorama" element={<App />} /> {/* Tu página de panorama */}
          {/* Puedes añadir una ruta para "Not Found" aquí */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

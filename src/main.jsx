import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { ProductosProvider } from './contexts/ProductosContext'
import { CarritoProvider } from './contexts/CarritoContext'

createRoot(document.getElementById('root')).render(
  <ProductosProvider>

  <CarritoProvider>
    <App />

  </CarritoProvider>
  </ProductosProvider>

)

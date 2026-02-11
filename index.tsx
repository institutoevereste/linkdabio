import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Importa o App sem chaves

// Garante que o elemento root existe antes de tentar renderizar
const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("ERRO CRÍTICO: Não encontrei a div com id 'root' no index.html")
}

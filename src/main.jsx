import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./app.jsx"

import 'bootstrap/dist/css/bootstrap.min.css'
// JavaScript (opcional, só se usar componentes JS)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>

  </React.StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore, applyMiddleware} from "redux"
import  {Provider} from "react-redux"
import promise from "redux-promise"
import multi from "redux-multi"
import { thunk } from 'redux-thunk'

import App from "./app.jsx"
import reducers from "reducers.js"

import 'bootstrap/dist/css/bootstrap.min.css'
// JavaScript (opcional, só se usar componentes JS)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

const store = applyMiddleware(multi, promise)(createStore)(reducers)



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>

  </React.StrictMode>
)
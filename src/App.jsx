import React from 'react'
import Todo from './todo/todo'
import About from './about/about.jsx'
import Menu from "./template/menu.jsx"
import AppRouter from './routes.jsx'
import "./template/custom.css"



export default props => (
    <div className='container'>
        <h1>Teste</h1>
        <Menu></Menu>
        <AppRouter/>
    </div>
)
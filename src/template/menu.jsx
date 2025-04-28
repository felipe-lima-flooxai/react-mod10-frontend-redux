import React from "react";

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <i className="fas fa-calendar-check me-2"></i>
                TodoApp
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#/todos">Tarefas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/about">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
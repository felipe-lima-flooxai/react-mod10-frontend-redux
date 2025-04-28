import React from "react";

export default props => (
    <header className="page-header">
        <h2>
            {props.name} 
            <span className="text-muted fs-6 ms-2">{props.small}</span>
        </h2>
    </header>
)
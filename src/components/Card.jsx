import React from 'react';
import "./Card.css";


export const Card = ({title, children}) => (
    <div className="card">
        <div>
            {title}
            <i class="info fas fa-info-circle"></i>
        </div>
        {children}
    </div>
);
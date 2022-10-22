import React from 'react';
import './DoorCard.scss';

const DoorCard = ({ number }) => {
    
    return(
        <div class="card">
            <div className="cardTop">
                <h1>{number}</h1>
            </div>
            <div className="cardBottom">
                <h2>{number}.12.2022</h2>
            </div>
        </div>
    );
}

export default DoorCard;
import React from 'react';
import './Traineeship_info.css';
import praktikaImage from '../../../assets/pictures/Praktika/Praktikajoonis.png';

const TraineeshipsInfo = () => {
    return (
        <div className="praktika-container">
            <h1>Praktika</h1>
            <div className="praktika-pilt-container">
                <img 
                    src={praktikaImage} 
                    alt="Praktika illustratiivne pilt" 
                    className="praktika-pilt" 
                />
            </div>
        </div>
    );
};

export default TraineeshipsInfo;
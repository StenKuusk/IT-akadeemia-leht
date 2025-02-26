import React from 'react';
import './Specialties.css';
import tehnoloogiad from '../../../assets/pictures/tehnoloogiad.png';

const KestlikudTehnoloogiad = () => {
    return (
        <div className="specialty-container">
            <img src={tehnoloogiad} alt="Kestlikud tehnoloogiad" />
            <h1>Kestlikud tehnoloogiad</h1>
            <p>Õppetöö toimub nii VOCO-s kui ka Tartu Kunstikoolis. Võrdselt on väärtustatud nii teadmised kui oskused. Lahendad väljakutseid tiimides. Uued metoodikad, nagu disainmõtlemine ja tiimicoachimine. Sinu isiklik ar...</p>
            <span>IT kool | põhihariduse baasil | koolipõhine | 4 aastat</span>
        </div>
    );
};

export default KestlikudTehnoloogiad;

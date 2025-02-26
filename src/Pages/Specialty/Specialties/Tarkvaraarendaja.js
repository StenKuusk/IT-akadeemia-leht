import React from 'react';
import './Specialties.css';
import tarkvaraarendaja from '../../../assets/pictures/tarkvaraarendaja.png';

const Tarkvaraarendaja = () => {
    return (
        <div className="specialty-container">
            <img src={tarkvaraarendaja} alt="Tarkvaraarendaja" />
            <h1>Tarkvaraarendaja</h1>
            <p>Tarkvaraarendaja on kõrgelt hinnatud spetsialist, kelle põhiliseks tööks on tarkvara lähtekoodi kirjutamine. Tarkvaraarendajat läheb vaja kodulehe, mitmesuguste e-teenuste ja -poodide või hoopis andmebaasi keskk...</p>
            <span>IT kool | põhihariduse baasil | koolipõhine | 4 aastat</span>
        </div>
    );
};

export default Tarkvaraarendaja;

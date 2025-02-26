import React from 'react';
import './Specialties.css';
import noorem_tarkvaraarendaja from '../../../assets/pictures/noorem_tarkvaraarendaja.png';

const NooremTarkvaraarendaja = () => {
    return (
        <div className="specialty-container">
            <img src={noorem_tarkvaraarendaja} alt="Noorem tarkvaraarendaja" />
            <h1>Noorem tarkvaraarendaja</h1>
            <p>Koodikirjutamine on tänapäeva digitaalne kirjaoskus. Hästi toimiv koduleht, äpp või mõni muu vajalik rakendus on parim visiitkaart igale ettevõtmisele. Noorem-tarkvaraarendaja põhitöö ongi tarkvara lähtekood...</p>
            <span>IT kool | keskhariduse baasil | sessioonõpe | 2 aastat ja 6 kuud</span>
        </div>
    );
};

export default NooremTarkvaraarendaja;

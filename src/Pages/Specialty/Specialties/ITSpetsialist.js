import React from 'react';
import './Specialties.css';
import itSpetsialist from '../../../assets/pictures/it_spetsialist.png';

const ITSpetsialist = () => {
    return (
        <div className="specialty-container">
            <img src={itSpetsialist} alt="IT-süsteemide spetsialist" />
            <h1>IT-süsteemide spetsialist</h1>
            <p>Kui soovid tulevikus olla tegija IT-taristu arendamise ja arvutisüsteemide haldamise vallas ning sulle pakub pinget nii teiste kui omaloodud süsteemide testimine ja seire, siis on Tartu Rakendusliku Kolledži IT Akadee...</p>
            <span>IT Kool | põhihariduse baasil | koolipõhine | 4 aastat</span>
        </div>
    );
};

export default ITSpetsialist;

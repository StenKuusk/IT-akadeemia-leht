import React from 'react';
import './Specialties.css';
import itNooremspetsialist from '../../../assets/pictures/it_nooremspetsialist.png';

const ITNooremspetsialist = () => {
    return (
        <div className="specialty-container">
            <img src={itNooremspetsialist} alt="IT-süsteemide nooremspetsialist" />
            <h1>IT-süsteemide nooremspetsialist</h1>
            <p>Kui soovid, et IT-vahendite kasutamine ja arvutivõrkude haldamine oleks sinu erialane kirjaoskus, siis on õige aeg sellel alal profiks õppida. Tartu Rakendusliku Kolledži päevakohase riist- ja tarkvarga arvutiklassides ning...</p>
            <span>IT Kool | keskhariduse baasil | koolipõhine | 2 aastat</span>
        </div>
    );
};

export default ITNooremspetsialist;

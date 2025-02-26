import React from 'react';
import './Specialties.css';
import UX_UI_nooremspetsialist from '../../../assets/pictures/UX_UI_nooremspetsialist.png';

const UXUINooremspetsialist = () => {
    return (
        <div className="specialty-container">
            <img src={UX_UI_nooremspetsialist} alt="UX/UI disaini nooremspetsialist" />
            <h1>UX/UI disaini nooremspetsialist</h1>
            <p>UX (kasutajakogemuse) disain keskendub positiivsete emotsioonide tekitamisele ning sellele, kuidas kasutajad navigeerivad kõigi erinevate UI-elementide vahel. UI (kasutajaliidese) disain viitab aga sellele, mid...</p>
            <span>IT kool | keskhariduse baasil | koolipõhine | 1 aasta ja 6 kuud</span>
        </div>
    );
};

export default UXUINooremspetsialist;
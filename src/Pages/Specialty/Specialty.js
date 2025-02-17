import React from 'react';
import './Specialty.css';

// Importi pildid
import itNooremspetsialist from '../../assets/pictures/it_nooremspetsialist.png';
import itSpetsialist from '../../assets/pictures/it_spetsialist.png';
import tehnoloogiad from '../../assets/pictures/tehnoloogiad.png';
import tarkvaraarendaja from '../../assets/pictures/tarkvaraarendaja.png';
import noorem_tarkvaraarendaja from '../../assets/pictures/noorem_tarkvaraarendaja.png';
import UX_UI_nooremspetsialist from '../../assets/pictures/UX_UI_nooremspetsialist.png';

const Specialty = () => {
    return (
        <section className="erialad-container">
            <h1>Erialad</h1>
            <div className="filters">
                <select>
                    <option>Haridusnõue (kõik)</option>
                </select>
                <select>
                    <option>Saavutatav tase (kõik)</option>
                </select>
                <select>
                    <option>Õppekorraldus (kõik)</option>
                </select>
                <button>Otsi eriala</button>
            </div>
            <div className="erialad-list">
                <div className="eriala-kaart">
                    <img src={itNooremspetsialist} alt="IT-süsteemide nooremspetsialist" />
                    <div className="eriala-info">
                        <h2>IT-süsteemide nooremspetsialist</h2>
                        <p>Kui soovid, et IT-vahendite kasutamine ja arvutivõrkude haldamine oleks sinu erialane kirjaoskus, siis on õige aeg sellel alal profiks õppida. Tartu Rakendusliku Kolledži päevakohase riist- ja tarkvarga arvutiklassides ning...</p>
                        <span>IT Kool | keskhariduse baasil | koolipõhine | 2 aastat</span>
                    </div>
                </div>
                <div className="eriala-kaart">
                    <img src={itSpetsialist} alt="IT-süsteemide spetsialist" />
                    <div className="eriala-info">
                        <h2>IT-süsteemide spetsialist</h2>
                        <p>Kui soovid tulevikus olla tegija IT-taristu arendamise ja arvutisüsteemide haldamise vallas ning sulle pakub pinget nii teiste kui omaloodud süsteemide testimine ja seire, siis on Tartu Rakendusliku Kolledži IT Akadee...</p>
                        <span>IT Kool | põhihariduse baasil | koolipõhine | 4 aastat</span>
                    </div>
                </div>
                <div className="eriala-kaart"> 
                    <img src={tehnoloogiad} alt="Kestlikud tehnoloogiad" />
                    <div className="eriala-info"> 
                        <h2>Kestlikud tehnoloogiad</h2>
                        <p>Õppetöö toimub nii VOCO-s kui ka Tartu Kunstikoolis. Võrdselt on väärtustatud nii teadmised kui oskused. Lahendad väljakutseid tiimides. Uued metoodikad, nagu disainmõtlemine ja tiimicoachimine. Sinu isiklik ar...</p>
                        <span>IT kool | põhihariduse baasil | koolipõhine | 4 aastat</span>
                    </div>
                </div>
                <div className="eriala-kaart"> 
                    <img src={tarkvaraarendaja} alt="Tarkvaraarendaja" />
                    <div className="eriala-info"> 
                        <h2>Tarkvaraarendaja</h2>
                        <p>Tarkvaraarendaja on kõrgelt hinnatud spetsialist, kelle põhiliseks tööks on tarkvara lähtekoodi kirjutamine. Tarkvaraarendajat läheb vaja kodulehe, mitmesuguste e-teenuste ja -poodide või hoopis andmebaasi keskk...</p>
                        <span>IT kool | põhihariduse baasil | koolipõhine | 4 aastat</span>
                    </div>
                </div>
                <div className="eriala-kaart"> 
                    <img src={noorem_tarkvaraarendaja} alt="Noorem tarkvaraarendaja" />
                    <div className="eriala-info"> 
                        <h2>Noorem tarkvaraarendaja</h2>
                        <p>Koodikirjutamine on tänapäeva digitaalne kirjaoskus. Hästi toimiv koduleht, äpp või mõni muu vajalik rakendus on parim visiitkaart igale ettevõtmisele. Noorem-tarkvaraarendaja põhitöö ongi tarkvara lähtekood...</p>
                        <span>IT kool | keskhariduse baasil | sessioonõpe | 2 aastat ja 6 kuud</span>
                    </div>
                </div>
                <div className="eriala-kaart">
                    <img src={UX_UI_nooremspetsialist} alt="UX/UI disaini nooremspetsialist" />
                    <div className="eriala-info"> 
                        <h2>UX/UI disaini nooremspetsialist</h2>
                        <p>UX (kasutajakogemuse) disain keskendub positiivsete emotsioonide tekitamisele ning sellele, kuidas kasutajad navigeerivad kõigi erinevate UI-elementide vahel. UI (kasutajaliidese) disain viitab aga sellele, mid...</p>
                        <span>IT kool | keskhariduse baasil | koolipõhine | 1 aasta ja 6 kuud</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specialty;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Specialty.css';

// Importi pildid
import itNooremspetsialist from '../../assets/pictures/it_nooremspetsialist.png';
import itSpetsialist from '../../assets/pictures/it_spetsialist.png';
import tehnoloogiad from '../../assets/pictures/tehnoloogiad.png';
import tarkvaraarendaja from '../../assets/pictures/tarkvaraarendaja.png';
import noorem_tarkvaraarendaja from '../../assets/pictures/noorem_tarkvaraarendaja.png';
import UX_UI_nooremspetsialist from '../../assets/pictures/UX_UI_nooremspetsialist.png';
import heroImage from '../../assets/logos/voco_muster_hero.png';

const specialties = [
    {
        img: itNooremspetsialist,
        title: "IT-süsteemide nooremspetsialist",
        description: "Kui soovid, et IT-vahendite kasutamine ja arvutivõrkude haldamine oleks sinu erialane kirjaoskus, siis on õige aeg sellel alal profiks õppida. Tartu Rakendusliku Kolledži päevakohase riist- ja tarkvarga arvutiklassides ning...",
        details: "IT Kool | keskhariduse baasil | koolipõhine | 2 aastat",
        filters: {
            education: "Keskhariduse baasil",
            level: "Esmaõppe õppekava, EKR5",
            type: "Koolipõhine õpe"
        },
        path: "/specialties/it-nooremspetsialist"
    },
    {
        img: itSpetsialist,
        title: "IT-süsteemide spetsialist",
        description: "Kui soovid tulevikus olla tegija IT-taristu arendamise ja arvutisüsteemide haldamise vallas ning sulle pakub pinget nii teiste kui omaloodud süsteemide testimine ja seire, siis on Tartu Rakendusliku Kolledži IT Akadee...",
        details: "IT Kool | põhihariduse baasil | koolipõhine | 4 aastat",
        filters: {
            education: "Põhihariduse baasil",
            level: "Esmaõppe õppekava, EKR4",
            type: "Koolipõhine õpe"
        },
        path: "/specialties/it-spetsialist"
    },
    {
        img: tehnoloogiad,
        title: "Kestlikud tehnoloogiad",
        description: "Õppetöö toimub nii VOCO-s kui ka Tartu Kunstikoolis. Võrdselt on väärtustatud nii teadmised kui oskused. Lahendad väljakutseid tiimides. Uued metoodikad, nagu disainmõtlemine ja tiimicoachimine. Sinu isiklik ar...",
        details: "IT kool | põhihariduse baasil | koolipõhine | 4 aastat",
        filters: {
            education: "Põhihariduse baasil",
            level: "Esmaõppe õppekava, EKR4",
            type: "Koolipõhine õpe"
        },
        path: "/specialties/kestlikud-tehnoloogiad"
    },
    {
        img: tarkvaraarendaja,
        title: "Tarkvaraarendaja",
        description: "Tarkvaraarendaja on kõrgelt hinnatud spetsialist, kelle põhiliseks tööks on tarkvara lähtekoodi kirjutamine. Tarkvaraarendajat läheb vaja kodulehe, mitmesuguste e-teenuste ja -poodide või hoopis andmebaasi keskk...",
        details: "IT kool | põhihariduse baasil | koolipõhine | 4 aastat",
        filters: {
            education: "Põhihariduse baasil",
            level: "Esmaõppe õppekava, EKR4",
            type: "Koolipõhine õpe"
        },
        path: "/specialties/tarkvaraarendaja"
    },
    {
        img: noorem_tarkvaraarendaja,
        title: "Noorem tarkvaraarendaja",
        description: "Koodikirjutamine on tänapäeva digitaalne kirjaoskus. Hästi toimiv koduleht, äpp või mõni muu vajalik rakendus on parim visiitkaart igale ettevõtmisele. Noorem-tarkvaraarendaja põhitöö ongi tarkvara lähtekood...",
        details: "IT kool | keskhariduse baasil | sessioonõpe | 2 aastat ja 6 kuud",
        filters: {
            education: "Keskhariduse baasil",
            level: "Esmaõppe õppekava, EKR5",
            type: "Sessioonõpe"
        },
        path: "/specialties/noorem-tarkvaraarendaja"
    },
    {
        img: UX_UI_nooremspetsialist,
        title: "UX/UI disaini nooremspetsialist",
        description: "UX (kasutajakogemuse) disain keskendub positiivsete emotsioonide tekitamisele ning sellele, kuidas kasutajad navigeerivad kõigi erinevate UI-elementide vahel. UI (kasutajaliidese) disain viitab aga sellele, mid...",
        details: "IT kool | keskhariduse baasil | koolipõhine | 1 aasta ja 6 kuud",
        filters: {
            education: "Keskhariduse baasil",
            level: "Esmaõppe õppekava, EKR5",
            type: "Koolipõhine õpe"
        },
        path: "/specialties/ux-ui-nooremspetsialist"
    }
];

const Specialty = () => {
    const [selectedEducation, setSelectedEducation] = useState("Kõik");
    const [selectedLevel, setSelectedLevel] = useState("Kõik");
    const [selectedType, setSelectedType] = useState("Kõik");
    const [appliedFilters, setAppliedFilters] = useState({
        education: "Kõik",
        level: "Kõik",
        type: "Kõik"
    });

    const navigate = useNavigate();

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        if (name === "education") setSelectedEducation(value);
        if (name === "level") setSelectedLevel(value);
        if (name === "type") setSelectedType(value);
    };

    const applyFilters = () => {
        setAppliedFilters({
            education: selectedEducation,
            level: selectedLevel,
            type: selectedType
        });
    };

    const handleSpecialtyClick = (path) => {
        navigate(path);
    };

    const filteredSpecialties = specialties.filter((specialty) => {
        return (
            (appliedFilters.education === "Kõik" || specialty.filters.education === appliedFilters.education) &&
            (appliedFilters.level === "Kõik" || specialty.filters.level === appliedFilters.level) &&
            (appliedFilters.type === "Kõik" || specialty.filters.type === appliedFilters.type)
        );
    });

    return (
        <section className="erialad-container">
            <h1>Erialad</h1>
            <div className="filters">
                <select name="education" value={selectedEducation} onChange={handleFilterChange}>
                    <option value="Kõik">Haridusnõue (kõik)</option>
                    <option value="Haridusnõudeta">Haridusnõudeta</option>
                    <option value="Põhihariduse baasil">Põhihariduse baasil</option>
                    <option value="Keskhariduse baasil">Keskhariduse baasil</option>
                </select>
                <select name="level" value={selectedLevel} onChange={handleFilterChange}>
                    <option value="Kõik">Saavutatav tase (kõik)</option>
                    <option value="Jätkuõppe õppekava, EKR5">Jätkuõppe õppekava, EKR5</option>
                    <option value="Jätkuõppe õppekava, EKR4">Jätkuõppe õppekava, EKR4</option>
                    <option value="Esmaõppe õppekava, EKR5">Esmaõppe õppekava, EKR5</option>
                    <option value="Esmaõppe õppekava, ERK4">Esmaõppe õppekava, ERK4</option>
                    <option value="Esmaõppe õppekava, EKR3">Esmaõppe õppekava, EKR3</option>
                </select>
                <select name="type" value={selectedType} onChange={handleFilterChange}>
                    <option value="Kõik">Õppekorraldus (kõik)</option>
                    <option value="Koolipõhine õpe">Koolipõhine õpe</option>
                    <option value="Töökohapõhine õpe">Töökohapõhine õpe</option>
                    <option value="Sessioonõpe">Sessioonõpe</option>
                </select>
                <button onClick={applyFilters}>Otsi eriala</button>
            </div>
            <div className="erialad-list">
                {filteredSpecialties.length > 0 ? (
                    filteredSpecialties.map((specialty, index) => (
                        <div
                            className="eriala-kaart"
                            key={index}
                            onClick={() => handleSpecialtyClick(specialty.path)}
                        >
                            <img src={specialty.img} alt={specialty.title} />
                            <div className="eriala-info">
                                <h2>{specialty.title}</h2>
                                <p>{specialty.description}</p>
                                <span>{specialty.details}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>Vabandame! Otsingu tulemusele vastavat eriala ei leitud.</p>
                    </div>
                )}
            </div>
            <section className="hero-section">
                <img src={heroImage} alt="Hero" />
                <div className="hero-text">
                    <h2>Pole kindel mida soovid õppida?</h2>
                    <p>Helista või kirjuta meie õppenõustajale
                    ja leiame koos sulle parima õppimisvõimaluse!</p>
                    <p className='bold'>Helen Johanson</p>
                    <p className='regular'>helen.johanson@voco.ee</p>
                    <p className='regular'>58868004</p>
                </div>
            </section>
        </section>
    );
};

export default Specialty;
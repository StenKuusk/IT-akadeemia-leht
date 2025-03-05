import React, { useState } from 'react';
import './Specialties.css';
import noorem_tarkvaraarendaja from '../../../assets/pictures/noorem_tarkvaraarendaja_highres.jpg';
import step1Image from '../../../assets/logos/step1.png';
import step2Image from '../../../assets/logos/step2.png';
import step3Image from '../../../assets/logos/step3.png';
import step4Image from '../../../assets/logos/step4.png';

const NooremTarkvaraarendaja = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handleLearnMoreClick = () => {
        window.open('https://voco.ee/sisseastumine/', '_blank');
    };

    return (
        <div className="specialty-container">
            <div className="banner">
                <div className="banner-image">
                    <img src={noorem_tarkvaraarendaja} alt="Noorem tarkvaraarendaja" />
                </div>
                <div className="banner-box">
                    <p>IT-KOOL</p>
                </div>
            </div>

            <div className="content-section">
                <div className="main-content">
                    <div className="content">
                        <h1>Noorem tarkvaraarendaja</h1>
                        <h3>IT kool | keskhariduse baasil | sessioonõpe | 2 aastat</h3>
                        <p>
                            Koodikirjutamine on tänapäeva digitaalne kirjaoskus. Hästi toimiv koduleht, äpp või mõni muu vajalik rakendus on parim visiitkaart igale ettevõtmisele. Noorem-tarkvaraarendaja põhitöö ongi tarkvara lähtekoodi kirjutamine ja disainile tehniliste lahenduste väljapakkumine.<br /><br />
                            Tartu Rakendusliku Kolledžisse ootavad oma ala spetsialistidest õpetajad õppima ja teooriat kohe praktikas rakendama tehnoloogilise lugemisoskusega õppijaid. Teravaid pliiatseid, kes tahavad tänapäeva infotehnoloogia abil kõikvõimalike valdkondade probleeme lahendada – idufirmadest suurkorporatsioonideni.<br /><br />
                            Kui oled lõpetanud varem mõne muu eriala, võib olla Sul tulevikus võimalus just selle valdkonna tarbeks tarkvara arendada.
                        </p>
                        <h2>Kellele?</h2>
                        <p>
                            Õppima ootame vähemalt 18-aastaseid õppijaid, kellel on keskharidus.
                        </p>
                        <h2>Kuidas?</h2>
                        <p>
                            Praktika maht on 20 õppenädalat, mis sooritatakse tarkvaraarendusega tegelevates ettevõtetes või erinevate valdkondade tarkvaraarenduse tiimides. Praktikaettevõtetes tegeletakse veebiteenuste pakkumisega, e-poodide loomise või infosüsteemide väljatöötamise ja haldusega. Tublimad õpilased saavad võimaluse välispraktikaks.<br /><br />
                            Eriala kirjeldavad märksõnad: veebileht, mobiilirakendus, agiilne arendus, GITHUB, kood, äpp, tarkvaraarendus, pilverakendused, kasutajaliidese disain, full stack arendus
                        </p>
                    </div>

                    <div className="accordion-section">
                        <div>
                            <button className="accordion" onClick={() => handleAccordionClick(0)}>
                                Vastuvõtutingimused
                                <span className={`arrow ${activeAccordion === 0 ? 'flipped' : ''}`}>▼</span>
                            </button>
                            {activeAccordion === 0 && (
                                <div className="accordion-content">
                                    <p>
                                        • Läbida eelnevalt veebikursus: “Make a website: https://www.codecademy.com/learn/make-a-website.”<br />
                                        • Motivatsioonikiri (motivatsioonikirja lõppu lisatakse codecademy kasutajanimi)<br />
                                        • Vestlus: inglise keeles (osaliselt)<br />
                                        • Praktiline ülesanne: HTML, CSS teadmiste kontrollimiseks.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="accordion" onClick={() => handleAccordionClick(1)}>
                                Oskused
                                <span className={`arrow ${activeAccordion === 1 ? 'flipped' : ''}`}>▼</span>
                            </button>
                            {activeAccordion === 1 && (
                                <div className="accordion-content">
                                    <p>
                                        • Õpetusega taotletakse, et õppija omandab kompetentsid, mis on vajalikud töötamiseks noorem tarkvaraarendajana oskusliku meeskonna liikmena ning luuakse eeldused õpingute jätkamiseks ja elukestvaks õppeks.<br />
                                        • Kasutab omandatava kutse tasemel kokkulepitud erialast oskussõnavara, põhimõtteid, tehnoloogiaid, protsesse, töövahendeid ja seadmeid.<br />
                                        • Järgib protseduurireegleid ja parimaid praktikaid ning täidab iseseisvalt noorem tarkvaraarendaja tööülesandeid.<br />
                                        • Teab tarkvara arendusprotsessi põhietappe ja agiilset arendusmetoodikaid, kasutab valitud arendusmetoodikat.<br />
                                        • Loob lihtsamaid rakendusi (mõnes) enamlevinud peavoolu programmeerimiskeeles, kasutades objektorienteeritud lähenemist.<br />
                                        • Kasutab rakenduste loomisel ja testimisel tarkvaraarenduse vahendeid.<br />
                                        • Töötab tarkvaraarenduse meeskonnaliikmena.<br />
                                        • Dokumenteerib enda ja teiste meeskonnaliikmete tööd.<br />
                                        • Lõpus saab õppija lõputunnistuse koos hinnetelehega.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="accordion" onClick={() => handleAccordionClick(2)}>
                                Praktikavõimalus
                                <span className={`arrow ${activeAccordion === 2 ? 'flipped' : ''}`}>▼</span>
                            </button>
                            {activeAccordion === 2 && (
                                <div className="accordion-content">
                                    <p>
                                        • Praktika raames ta õpib tundma tarkvaraarenduse meeskonna igapäevatööd ja saab ülevaate tarkvaraarenduse protsessist tarkvaraprojekti rakendamisel projektimeeskonnas.<br />
                                        • Töötab praktika organisatsioonis ühe praktikaperioodi kestel vähemalt ühes tarkvaraarenduse projekti meeskonnas noorem tarkvaraarendajana.<br />
                                        • Teeb koostööd kolleegide ja klientidega.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="accordion" onClick={() => handleAccordionClick(3)}>
                                Eelised tööturul
                                <span className={`arrow ${activeAccordion === 3 ? 'flipped' : ''}`}>▼</span>
                            </button>
                            {activeAccordion === 3 && (
                                <div className="accordion-content">
                                    <p>
                                        • Värsked oskused ja teadmised: Nooremad tarkvaraarendajad on sageli kursis uusimate tehnoloogiate, platvormide ja programmeerimiskeeltega.<br />
                                        • Paindlikkus ja kohanemisvõime: Noored arendajad on sageli paindlikumad ja kohanemisvõimelisemad uute projektide ja meeskonnadünaamika suhtes.<br />
                                        • Innovatiivsus ja loovus: Nooremad tarkvaraarendajad võivad tuua uusi ideid ja lähenemisviise.<br />
                                        • Suhtlemis- ja koostööoskused: Nooremad tarkvaraarendajad on sageli harjunud suhtlema ja koostööd tegema erinevate meeskonnaliikmetega.<br />
                                        • Karjäärivõimalused ja arengupotentsiaal: Noorel tarkvaraarendajal võib olla rohkem võimalusi kasvada ja areneda karjääris.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="accordion" onClick={() => handleAccordionClick(4)}>
                                Õpi edasi
                                <span className={`arrow ${activeAccordion === 4 ? 'flipped' : ''}`}>▼</span>
                            </button>
                            {activeAccordion === 4 && (
                                <div className="accordion-content">
                                    <p>
                                        Edasiõppimise võimalusi pakuvad:<br /><br />
                                        • Rakenduskõrghariduse tasemel:<br />
                                        ◦ Eesti Ettevõtluskõrgkool Mainor.<br />
                                        • Kõrghariduse tasemel:<br />
                                        ◦ Erinevad IKT-haridust pakkuvad ülikoolid<br />
                                        ◦ Eesti Lennuakadeemia
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="side-content">
                    <div className="materials">
                        <h3>Vajalikud materjalid</h3>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=659&_gl=1*1ir7l9n*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ3MzguMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ3MzguNTcuMC4w" target="_blank" rel="noopener noreferrer">Õppekava PDF</a>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=659&rakenduskavad=jah&oppegrupp=uldine&_gl=1*1ir7l9n*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ3MzguMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ3MzguNTcuMC4w" target="_blank" rel="noopener noreferrer">Rakenduskava PDF</a>
                    </div>

                    <div className="contact">
                        <h3>Küsi lisainfot</h3>
                        <p>Eriala ja õppekava kohta:</p>
                        <p><strong>Signe Vedler</strong></p>
                        <p>Erialajuht</p>
                        <p>Email: <p1>signe.vedler@voco.ee</p1></p>
                    </div>
                    <div className="contact">
                        <h3>Küsi lisainfot</h3>
                        <p>Õppimise ja sisseastumise kohta:</p>
                        <p><strong>Helen Johanson</strong></p>
                        <p>Tugikeskuse juht</p>
                        <p>Email: <p1>helen.johanson@voco.ee</p1></p>
                    </div>
                </div>
            </div>

            <div className="admission">
                <h2>Sisseastumine käib kiirelt ja kergelt</h2>
                <div className="steps">
                    <div className="step" style={{ backgroundImage: `url(${step1Image})` }}></div>
                    <div className="step" style={{ backgroundImage: `url(${step2Image})` }}></div>
                    <div className="step" style={{ backgroundImage: `url(${step3Image})` }}></div>
                    <div className="step" style={{ backgroundImage: `url(${step4Image})` }}></div>
                </div>
                <button className="learn-more" onClick={handleLearnMoreClick}>Loe lähemalt</button>
            </div>
        </div>
    );
};

export default NooremTarkvaraarendaja;
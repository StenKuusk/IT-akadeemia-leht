import React, { useState } from 'react';
import './Specialties.css';
import UX_UI_nooremspetsialist from '../../../assets/pictures/UX_UI_nooremspetsialist_highres.jpg';
import step1Image from '../../../assets/logos/step1.png';
import step2Image from '../../../assets/logos/step2.png';
import step3Image from '../../../assets/logos/step3.png';
import step4Image from '../../../assets/logos/step4.png';

const UXUINooremspetsialist = () => {
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
                    <img src={UX_UI_nooremspetsialist} alt="UX/UI disaini nooremspetsialist" />
                </div>
                <div className="banner-box">
                    <p>IT-KOOL</p>
                </div>
            </div>

            <div className="content-section">
                <div className="main-content">
                    <div className="content">
                        <h1>UX/UI disaini nooremspetsialist</h1>
                        <h3>IT kool | keskhariduse baasil | koolipõhine | 1 aasta ja 6 kuud</h3>
                        <p>
                            UX (kasutajakogemuse) disain keskendub positiivsete emotsioonide tekitamisele ning sellele, kuidas kasutajad navigeerivad kõigi erinevate UI-elementide vahel. UI (kasutajaliidese) disain viitab aga sellele, mida kasutajad tegelikult rakenduse ekraanil näevad – tekst, värvid, taustad, ikoonid ja liikuvad elemendid. UX/UI disaini nooremspetsialist loob kasutajaliideseid, mis on kasutajakesksed, esteetilised ja funktsionaalsed. Ta mõistab, kuidas kasutajad erinevates olukordades käituvad ja kuidas neid aidata, et nad saaksid soovitud tulemusi saavutada. Ta oskab kasutada erinevaid disainitööriistu ja -meetodeid, et luua kasutajaliideseid, mis on lihtsad ja intuitiivsed. Ta on hea meeskonnaliige, kes suudab koostöös teiste spetsialistidega luua terviklikke ja kasutajakeskseid lahendusi.
                        </p>
                        <h2>Kellele?</h2>
                        <p>
                            UX/UI-disaineritel on erinevad tööülesanded, mille käigus peavad nad näiteks planeerima, kaardistama kasutajateekonda, kujundama ekraane, viima läbi uuringud jne. See eeldab head suhtlemisoskust, tähelepanu ja keskendumisvõimet. UX/UI teadmisi ja oskusi saab rakendada väga erinevates valdkondades ning nõudmine tööturul selliste spetsialistide järele on suur.<br /><br />
                            Tartu Rakenduslik Kolledž on IT-valdkonnas tunnustatud kogemustega õppeasutus. Moodsa riist- ja tarkvaraga varustatud arvutiklassides ning laborites õpetavad spetsialistidest oma ala tipud. Kuna kasutajakogemuse disaini valdkond eeldab erinevate valdkondade head tundmist, siis tehakse koostööd Tartu Kunstikooliga ja kaasatakse praktikuid töömaailmast.<br /><br />
                            Hea kasutajakogemuse ja kasutajaliidese disainer on süsteemne, hea suhtleja ning vajadusel ka läbirääkija, süstemaatiline, analüütiline ning suure empaatiavõimega, et kasutajakogemust esiplaanile seada. Ta on innustunud ja alati valmis juurde õppima, sest valdkond areneb väga kiiresti.
                        </p>
                        <h2>Kuidas toimub õpe?</h2>
                        <p>
                            Põhiõpingutest moodustab praktika 23 EKAPit.<br />
                            Eriala kirjeldavad märksõnad: UI/UX, kasutaja sõbralikkus, koodid.
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
                                        • Läbida e-kursus: Codecademy introduction to UI and UX Design (<a href="https://www.codecademy.com/learn/paths/ui-and-ux-design" target="_blank" rel="noopener noreferrer">SIIN</a>). Selle põhjal tuleb praktiline ülesanne.<br />
                                        • E-portfoolio link (portfooliosse sobivad tehtud joonistused, skitseeringud, veebileht)<br />
                                        • Vestlus: inglise keeles (osaliselt)
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
                                        Pärast õpingute lõpetamist õppija:<br />
                                        • kasutab omandatava kutse tasemel kokkulepitud erialast oskussõnavara, põhimõtteid, tehnoloogiaid, protsesse, töövahendeid ja seadmeid;<br />
                                        • tunneb suhtlemise ja psühholoogia aluseid ning seostab neid UX/UI disaini nooremspetsialisti tööga;<br />
                                        • järgib protseduurireegleid ja parimaid praktikaid ning täidab UX/UI disaini nooremspetsialisti tööülesandeid;<br />
                                        • tunneb UX/UI testimise võimalusi ning vahendeid;<br />
                                        • kasutab kasutajaliidese loomisel ja testimisel tarkvaraarendus- ja kujundusvahendeid;<br />
                                        • töötab tarkvaraarenduse meeskonna liikmena;<br />
                                        • dokumenteerib enda ja teiste meeskonnaliikmete tööd.
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
                                        Erinevates omandivormides olevad ettevõtted ja organisatsioonid, kus õppijal on võimalik juhendaja juhendamisel täita praktikajuhendis toodud praktikaülesandeid.<br /><br />
                                        Praktikaülesanded:<br /><br />
                                        • Õppija seostab kasutaja käitumismustreid psühholoogiaga (sh sihtrühmade erinevused)<br />
                                        • tunneb kasutajakogemuse analüüsi põhimõtteid<br />
                                        • rakendab kasutajaliidese disaini põhimõtteid oma töös<br />
                                        • kasutab struktureeritud, optimeeritud CSS koodi ja semantilist HTML koodi lähtudes W3C standardist ja kokkulepitud koodistandardist<br />
                                        • rakendab ajakohaseid veebitehnoloogiaid oma töös<br />
                                        • teostab kliendiprojekti lähtudes kliendi vajadustest, standarditest ja agiilse arenduse põhimõtetest.
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
                                        Suur nõudlus UX/UI disainerite järele, konkurentsivõimeline palk, võimalus töötada rahvusvahelistes ettevõtetes.
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
                                        Võimalus jätkata õpinguid kõrgkoolis disaini ja IT-valdkonna erialadel.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="side-content">
                    <div className="materials">
                        <h3>Vajalikud materjalid</h3>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=584&_gl=1*17m1yfm*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDM1MDguMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDM1MDguNjAuMC4w" target="_blank" rel="noopener noreferrer">Õppekava PDF</a>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=584&rakenduskavad=jah&oppegrupp=uldine&_gl=1*9ft41v*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDM1MDguMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDM1MDguNjAuMC4w" target="_blank" rel="noopener noreferrer">Rakenduskava PDF</a>
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

export default UXUINooremspetsialist;
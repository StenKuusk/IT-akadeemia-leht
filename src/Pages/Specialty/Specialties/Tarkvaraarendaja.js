import React, { useState } from 'react';
import './Specialties.css';
import tarkvaraarendaja from '../../../assets/pictures/tarkvaraarendaja.png';
import step1Image from '../../../assets/logos/step1.png';
import step2Image from '../../../assets/logos/step2.png';
import step3Image from '../../../assets/logos/step3.png';
import step4Image from '../../../assets/logos/step4.png';

const Tarkvaraarendaja = () => {
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
                    <img src={tarkvaraarendaja} alt="Tarkvaraarendaja" />
                </div>
                <div className="banner-box">
                    <p>IT-KOOL</p>
                </div>
            </div>

            <div className="content-section">
                <div className="main-content">
                    <div className="content">
                        <h1>Tarkvaraarendaja</h1>
                        <h3>IT kool | põhihariduse baasil | koolipõhine | 4 aastat</h3>
                        <p>
                            Tarkvaraarendaja on kõrgelt hinnatud spetsialist, kelle põhiliseks tööks on tarkvara lähtekoodi kirjutamine. Tarkvaraarendajat läheb vaja kodulehe, mitmesuguste e-teenuste ja -poodide või hoopis andmebaasi keskkonna loomiseks.
                        </p>
                        <h2>Kellele?</h2>
                        <p>
                            IT-valdkonna kiire areng ja uued suunad eeldavad, et tunned teema vastu huvi ja oled valmis pidevalt täiendama oma oskusi.
                        </p>

                        <h2>Kuidas toimub õpe?</h2>
                        <p>
                            Õpe toimub päevases õppes ja kestab 4 aastat.<br />
                            Sellel õppekaval on võimalik osa aineid läbida tasemeõppes osalejate poolt.
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
                                        • Õppima asumise eelduseks on põhiharidus.<br />
                                        • Grupivestlus (hindame suhtlemisoskust, meeskonnatööoskust, eriala teadlikku valikut).<br />
                                        • Praktiline ülesanne – enne vastuvõtu katseid tuleb läbida konkreetne Codecademy kursus: (Siin). Kursus on tasuline, kuid seitsme päeva jooksul on võimalik kursust tasuta läbida.<br />
                                        • Motivatsioonikiri – palume motivatsioonikirja lõppu lisada Codecademy kasutajanimi. Motivatsioonikirjas palume selgitada varasemaid IT ja tehnoloogiaalaseid kokkupuuteid ning millisena näed oma edasist karjääri IT-valdkonnas. Kui sa omad varasemat töö- või õpikogemust, siis ka seda, mida võiks õpitav tarkvaraarendaja eriala õpe sellele juurde anda või seostuda.
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
                                        • Omandatavad oskused: tarkvara arendamine, programmeerimine, probleemide lahendamine.
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
                                        • Praktikavõimalused: koostöö erinevate IT-ettevõtetega, praktiline töö reaalsetes projektides.
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
                                        • Eelised tööturul: suur nõudlus tarkvaraarendajate järele, konkurentsivõimeline palk, võimalus töötada rahvusvahelistes ettevõtetes.
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
                                        • Õpi edasi: võimalus jätkata õpinguid kõrgkoolis IT-valdkonna erialadel.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="side-content">
                    <div className="materials">
                        <h3>Vajalikud materjalid</h3>
                        <button>Õppekava PDF</button>
                        <button>Rakenduskava PDF</button>
                        <button>Praktika info</button>
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

export default Tarkvaraarendaja;

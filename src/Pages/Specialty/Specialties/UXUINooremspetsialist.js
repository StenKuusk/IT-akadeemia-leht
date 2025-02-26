import React, { useState } from 'react';
import './Specialties.css';
import UX_UI_nooremspetsialist from '../../../assets/pictures/UX_UI_nooremspetsialist.png';
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
                            UX (kasutajakogemuse) disain keskendub positiivsete emotsioonide tekitamisele ning sellele, kuidas kasutajad navigeerivad kõigi erinevate UI-elementide vahel. UI (kasutajaliidese) disain viitab aga sellele, kuidas kasutajaliides välja näeb ja kuidas see toimib.
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
                                        • Õppima asumise eelduseks on keskharidus.<br />
                                        • Grupivestlus (hindame suhtlemisoskust, meeskonnatööoskust, eriala teadlikku valikut).<br />
                                        • Praktiline ülesanne – enne vastuvõtu katseid tuleb läbida konkreetne Codecademy kursus: (Siin). Kursus on tasuline, kuid seitsme päeva jooksul on võimalik kursust tasuta läbida.<br />
                                        • Motivatsioonikiri – palume motivatsioonikirja lõppu lisada Codecademy kasutajanimi. Motivatsioonikirjas palume selgitada varasemaid IT ja tehnoloogiaalaseid kokkupuuteid ning millisena näed oma edasist karjääri IT-valdkonnas. Kui sa omad varasemat töö- või õpikogemust, siis ka seda, mida võiks õpitav UX/UI disaini nooremspetsialisti eriala õpe sellele juurde anda või seostuda.
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
                                        • Omandatavad oskused: kasutajaliideste disainimine, kasutajakogemuse analüüs, prototüüpide loomine.
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
                                        • Praktikavõimalused: koostöö erinevate disaini- ja IT-ettevõtetega, praktiline töö reaalsetes projektides.
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
                                        • Eelised tööturul: suur nõudlus UX/UI disainerite järele, konkurentsivõimeline palk, võimalus töötada rahvusvahelistes ettevõtetes.
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
                                        • Õpi edasi: võimalus jätkata õpinguid kõrgkoolis disaini ja IT-valdkonna erialadel.
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

export default UXUINooremspetsialist;
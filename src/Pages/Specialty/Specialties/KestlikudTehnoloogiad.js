import React, { useState } from 'react';
import './Specialties.css';
import tehnoloogiad from '../../../assets/pictures/tehnoloogiad_highres.jpg';
import step1Image from '../../../assets/logos/step1.png';
import step2Image from '../../../assets/logos/step2.png';
import step3Image from '../../../assets/logos/step3.png';
import step4Image from '../../../assets/logos/step4.png';

const KestlikudTehnoloogiad = () => {
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
                    <img src={tehnoloogiad} alt="Kestlikud tehnoloogiad" />
                </div>
                <div className="banner-box">
                    <p>IT-KOOL</p>
                </div>
            </div>

            <div className="content-section">
                <div className="main-content">
                    <div className="content">
                        <h1>Kestlikud tehnoloogiad</h1>
                        <h3>IT kool | põhihariduse baasil | koolipõhine | 4 aastat</h3>
                        <p>
                            • Õppetöö toimub nii VOCO-s kui ka Tartu Kunstikoolis.<br />
                            • Võrdselt on väärtustatud nii teadmised kui oskused.<br />
                            • Lahendad väljakutseid tiimides.<br />
                            • Uued metoodikad, nagu disainmõtlemine ja tiimicoachimine.<br />
                            • Sinu isiklik areng on toetatud.<br />
                            • Saad ise õppekava raames valikuid teha.
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
                                        Sisseastumiskatseteks on tegevuspäev ja vestlus.
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
                                        Kestlikke tehnoloogiaid õppides saad:<br />
                                        • Tugeva keskhariduse<br />
                                        • Teadmised ja oskused valitud suunal<br />
                                        • Osa disainmõtlemisest ja koostööprojektidest<br />
                                        • Paremaks tulevikuks vajalikud roheoskused<br />
                                        • Julguse, ambitsiooni ja tutvused kogu eluks<br />
                                        • Õppimise ajal puutud kokku õpetajate ja mentoritega, kellel on silmapaistev kogemustepagas ning kellest saavad Sinu unistuste tuleviku rajamise koostööpartnerid. Tuleviku tehnoloogiate õppekaval omandatu annab Sulle tugeva põhja suurteks tegudeks.
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
                                        Vastavalt suunale:<br />
                                        • NUTIKAD SEADMED: Teerajajad nutikas maailmas – seadmed, masinad ja robotid!<br />
                                        • MATERJALIRINGLUS: Tunned erinevate materjalide päritolu, omadusi, eluea parandamise ja taaskasutamise võimalusi.<br />
                                        • MULTIMEEDIA: Kõneled visuaalses keeles, kasutades nii kätt kui ka digipliiatsit.<br />
                                        • DIGITEHNOLOOGIA: Digitehnoloogia aitab võtta kasutusele asjade interneti, tehisaru võimalused ning hallata andmeid. Samuti annab see võimaluse andmete põhjal teha prognoose.
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
                                        Minna tööle: tööstus 5.0, IT sektor, disain ja loomemajandus, inseneeria, vt siit https://industry40.ee/<br />
                                        Tuleviku tööturg: valdkonnad tekstiilitööstus, pakenditööstus, toiduainete töötlus, jäätmekäitlus, IT-sektor, disaini- ja loomemajandussektor.
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
                                        Edasi õppida kõrghariduses:<br />
                                        inseneeria, materjalitehnoloogia, tootearenduse, disaini, informaatika jm valdkonnad.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="side-content">
                    <div className="materials">
                        <h3>Vajalikud materjalid</h3>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=736&_gl=1*1rfozva*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ4MTMuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ4MTMuNTguMC4w" target="_blank" rel="noopener noreferrer">Õppekava PDF</a>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=736&rakenduskavad=jah&oppegrupp=uldine&_gl=1*1rfozva*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ4MTMuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ4MTMuNTguMC4w" target="_blank" rel="noopener noreferrer">Rakenduskava PDF</a>
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

export default KestlikudTehnoloogiad;

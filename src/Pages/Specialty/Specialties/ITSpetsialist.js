import React, { useState } from 'react';
import './Specialties.css';
import itSpetsialist from '../../../assets/pictures/it_spetsialist_highres.jpg';
import step1Image from '../../../assets/logos/step1.png';
import step2Image from '../../../assets/logos/step2.png';
import step3Image from '../../../assets/logos/step3.png';
import step4Image from '../../../assets/logos/step4.png';

const ITSpetsialist = () => {
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
                    <img src={itSpetsialist} alt="IT-süsteemide spetsialist" />
                </div>
                <div className="banner-box">
                    <p>IT-KOOL</p>
                </div>
            </div>

            <div className="content-section">
                <div className="main-content">
                    <div className="content">
                        <h1>IT-süsteemide spetsialist</h1>
                        <h3>IT Kool | põhihariduse baasil | koolipõhine | 4 aastat</h3>
                        <p>
                            Kui soovid tulevikus olla tegija IT-taristu arendamise ja arvutisüsteemide haldamise vallas ning sulle pakub pinget nii teiste kui omaloodud süsteemide testimine ja seire, siis on Tartu Rakendusliku Kolledži IT Akadeemia õige valik. Arvutiklassides ja laborites õpetavad Sind igapäevaselt valdkonna spetsialistid, õppetöösse kaasatakse erialapraktikuid ka ettevõtetest.
                        </p>
                        <h2>Kellele?</h2>
                        <p>
                            Parimaid tulemusi IT valdkonnas saavutavad loovalt ratsionaalsed isiksused, kellel on loomulik huvi uute võimaluste ja lahenduste otsimiseks. Sõbralik ja avatud meel on abiks inimestega suhtlemisel ja nende probleemide lahendamisel. Vajalik on kiire tehniline taip, kasuks tuleb loogiline mõtlemine ja keskendumisvõime pidevalt vahelduvate ülesannete vahel. Lai silmaring ja teadmised muudest valdkondadest võimaldavad tulevikus leida ühist keelt koostööpartnerite ja tööandjatega, kelle tööd või tootmisprotsesse hakkad IT abil kergemaks ja tulusamaks muutma.
                        </p>

                        <h2>Kuidas toimub õpe?</h2>
                        <p>
                            Tartu Rakendusliku Kolledži IT-süsteemide spetsialist õpib ka üldaineid: laia matemaatikat, emakeelt ja inglise keelt ning sooritab õppe lõpus riigieksamid. See tähendab, et õpid gümnasistidega võrreldavas mahus üldaineid. Teise aasta lõpus teed eesti ja inglise keele riigieksamid, 3. aasta lõpus matemaatika ning neljandal aastal oled praktikal ja lõputööna oled loonud toimiva IT-halduse lahenduse koos dokumentatsiooniga. Pärast seda on Sul võimalus jätkata õpinguid kõrgkoolis või asuda tööle kiiresti arenevas valdkonnas.<br />
                            Eriala kirjeldavad märksõnad: IT, spetsialist, programmeerimine. 
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
                                        • Kandideerima ootame põhikoolilõpetajaid;<br />
                                        • Grupivestlus (hindame suhtlemisoskust, meeskonnatööoskust, silmaringi);<br />
                                        • Kutsesobivustest, mis hindab edukaks erialaseks tööks vajalikke isikuomadusi ja võimekust: loogiline mõtlemine, funktsionaalne lugemisoskus, tähelepanuvõime, keskendumisvõime, mälu;<br />
                                        • Praktiline ülesanne – enne vastuvõtukatseid tuleb läbida konkreetne Codecademy kursus: https://www.codecademy.com/learn/learn-the-command-line. Kursus on tasuline, kuid seitsme päeva jooksul on võimalik kursus tasuta läbida;
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
                                        Tartu Rakendusliku Kolledži lõpetanud IT-süsteemide spetsialist:<br />
                                        • arendab organisatsiooni IT-taristut – pakub välja ja juurutab erinevaid tehnilisi lahendusi, arvestades süsteemi kui tervikut;<br />
                                        • tunneb IT-süsteemide riistvara;<br />
                                        • mõistab arvutivõrgu aluseid ja oskab rakendada võrguseadmeid;<br />
                                        • haldab arvutivõrke ja võrguteenuseid;<br />
                                        • haldab majutuskeskkonna riistvara ja klientseadmeid;<br />
                                        • haldab Windows ja Linux/BSD-operatsioonisüsteeme;<br />
                                        • tunneb skriptimisvahendeid ning automatiseerib võimalusel haldustegevusi;<br />
                                        • valdab pilveteenuste haldust;<br />
                                        • pakub kasutaja- ja muudatuste tuge;<br />
                                        • osutab teenuseid ja pakub infoturbe tuge;<br />
                                        • osutab teenuseid ja pakub infoturbe tuge;<br />
                                        • oskab koostada vajalikku dokumentatsiooni;<br />
                                        • töötab meeskonnas ja lahendab ülesandeid iseseisvalt ka rahvusvahelistes tiimides;<br />
                                        • suudab oma tööd iseseisvalt organiseerida ja aega planeerida ning vastutust võtta;<br />
                                        • on läbinud laia matemaatika, emakeele ja inglise keele õppekava ning on sooritanud riigieksamid;<br />
                                        • sooritab õpingute lõpus IT-süsteemide spetsialisti 4. taseme kutseeksami.
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
                                        Kokku tehakse õpingute jooksul 7 kuud ettevõttepraktikat. Praktikaülesanneteks on arvutivõrkude ehitus ja seire ning serverite haldus, lisaks harjutatakse praktikal nii individuaalseid kui koostööoskusi. Õpingute ja praktika käigus saadakse ülevaade uutest tehnoloogiatest, õpetamisel kasutatakse probleem- ja projektõpet, nt teostatakse meeskonnaga kogukonna- ja ettevõtlusprojekt.<br /><br />
                                        Eriala lõpetamiseks meeskonnatööna kavandatakse ja teostatakse mõne rakenduse või teenuse arendus.<br /><br />
                                        • Praktikakohast kujuneb sageli esimene ja kindel töökoht.<br />
                                        • Tartu Rakenduslikus Kolledžis toimub õppetöö ja praktika kaasaegsetes õppeklassides ja -laborites.<br />
                                        • Tartu Rakenduslik Kolledž toetab õpilaste osalemist kutsevõistlustel. Edukas osalemine kutsevõistlustel loob kasulikke kontakte tööandjatega!<br />
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
                                        Tartu Rakendusliku Kolledži IT-süsteemide spetsialisti eriala lõpetajat ootab:<br /><br />
                                        • Kindel töö, hea palk ja valikuvõimalused spetsialiseerumiseks väga erinevates valdkondades:<br />
                                        ◦ IT-süsteemide spetsialistina,<br />
                                        ◦ klienditoespetsialistina,<br />
                                        ◦ võrgutehnikuna,<br />
                                        ◦ süsteemiadministraatorina.<br />
                                        • Kutsetunnistus kehtivusega Eestis ja teistes Euroopa riikides.<br />
                                        • Tegu on globaalse kasvava ettevõtlusvaldkonnaga, kus heade spetsialistide järele on pidevalt suur nõudlus, mistõttu IT-süsteemide spetsialist leiab hõlpsasti tööd ka väljaspool Eestit.<br />
                                        • Karjäärivõimalused:<br />
                                        ◦ Nutikad IT-süsteemide spetsialistid saavutavad pideva enesetäiendamise ja töökogemuse käigus peagi tähelepanuväärseid töötulemusi ja liiguvad karjääriredelil edasi.<br />
                                        ◦ Sõltumatuse eelistajad saavad end teostada IT-ettevõtjatena. Kuigi töö leiab tegijad üles sageli juba koolipingis, tasub jätkata õpinguid pidevalt arenevas ja kasvavas valdkonnas.
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
                                        • Kõrghariduse tasemel:<br />
                                        ◦ Informaatika<br />
                                        IT-süsteemide arendus või äriinfotehnoloogia<br />
                                        ◦ Tartu Ülikoolis<br />
                                        Informaatika ja Arvutitehnika erialad<br />
                                        ◦ Tallinna Ülikoolis<br />
                                        Informaatika eriala<br />
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
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=759&_gl=1*1xlr7y8*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ5MTkuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ5MTkuNTcuMC4w" target="_blank" rel="noopener noreferrer">Õppekava PDF</a>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=759&rakenduskavad=jah&oppegrupp=uldine&_gl=1*1v2ngxw*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ5MTkuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ5MTkuNTcuMC4w" target="_blank" rel="noopener noreferrer">Rakenduskava PDF</a>
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

export default ITSpetsialist;

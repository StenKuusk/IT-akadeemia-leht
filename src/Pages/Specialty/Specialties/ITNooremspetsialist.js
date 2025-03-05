import React, { useState } from 'react';
import './Specialties.css';
import itNooremspetsialist from '../../../assets/pictures/it_nooremspetsialist_highres.png';
import step1Image from '../../../assets/logos/step1.png';
import step2Image from '../../../assets/logos/step2.png';
import step3Image from '../../../assets/logos/step3.png';
import step4Image from '../../../assets/logos/step4.png';

const ITNooremspetsialist = () => {
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
                    <img src={itNooremspetsialist} alt="IT-süsteemide nooremspetsialist" />
                </div>
                <div className="banner-box">
                    <p>IT-KOOL</p>
                </div>
            </div>

            <div className="content-section">
                <div className="main-content">
                    <div className="content">
                        <h1>IT-süsteemide nooremspetsialist</h1>
                        <h3>IT kool | keskhariduse baasil | koolipõhine | 2 aastat</h3>
                        <p>
                            Kui soovid, et IT-vahendite kasutamine ja arvutivõrkude haldamine oleks sinu erialane kirjaoskus, siis on õige aeg sellel alal profiks õppida. Tartu Rakendusliku Kolledži päevakohase riist- ja tarkvarga arvutiklassides ning laborites saad tõhusa väljaõppe oma valdkonna spetsialistidelt, lisaks kaasatakse õppetöösse erialapraktikuid ettevõtetest. Oskuste omandamise käigus täieneb ka Sinu töökeeleoskus, sest kasutatavad lisaõppematerjalid on inglise keelsed.
                        </p>
                        <h2>Kellele?</h2>
                        <p>
                            IT-valdkonna kiire areng ja uued suunad eeldavad, et tunned teema vastu üle keskmise suurt huvi ja sinu soov oma oskusi pidevalt täiendada on iseenesest mõistetav. Kasuks tuleb kiire kohanemisvõime pidevalt vahelduvate uute ülesannetega, süvenemisvõime IT-probleemist heitunud inimeste kõrval, tehniline taip ja loogiline mõtlemine. Harjumus ise lahendusi leida, korrektsus ja kohusetunne annavad eelise valida tuleviku tööturu väljakutsetest parimad.
                        </p>

                        <h2>Kuidas toimub õpe?</h2>
                        <p>
                            Õpe toimub päevaõppes E-N. Kestvus 2 aastat.<br /><br />
                            Sellel õppekaval õppima asumisel on võimalik saada tasemeõppes osalemise toetust. Rohkem infot tasemeõppes osalemise toetuse kohta leiate Eesti Töötukassa kodulehelt.<br /><br />
                            Eriala kirjeldavad märksõnad: IT, loogiline mõtlemine, tehniline taip.
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
                                        • Motivatsioonikiri – palume motivatsioonikirja lõppu lisada Codecademy kasutajanimi. Motivatsioonikirjas palume selgitada varasemaid IT ja tehnoloogiaalaseid kokkupuuteid ning millisena näed oma edasist karjääri IT-valdkonnas. Kui sa omad varasemat töö- või õpikogemust, siis ka seda, mida võiks õpitav IT-süsteemide nooremspetsialisti eriala õpe sellele juurde anda või seostuda.
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
                                        Tartu Rakendusliku Kolledži lõpetanud IT-süsteemide nooremspetsialist:<br />
                                        • teab, kuidas hoida töökorras organisatsiooni infotehnoloogilist taristut;<br />
                                        • tunneb IT-süsteemide riistvara;<br />
                                        • mõistab arvutivõrgu aluseid ja oskab rakendada võrguseadmeid;<br />
                                        • haldab arvutivõrke ja võrguteenuseid;<br />
                                        • haldab majutuskeskkonna riistvara ja klientseadmeid;<br />
                                        • haldab Windows ja Linux/BSD-operatsioonisüsteeme;<br />
                                        • tunneb skriptimisvahendeid ning automatiseerib võimalusel haldustegevusi;<br />
                                        • toimetab pilveteenuste haldusega;<br />
                                        • pakub kliendituge ja muudatuste tuge;<br />
                                        • sooritab õpingute lõpus IT-süsteemide nooremspetsialisti 4. taseme kutseeksami.
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
                                        Tartu Rakendusliku Kolledži IT-süsteemide nooremspetsialisti eriala praktika sooritatakse organisatsioonides ja ettevõtetes, kus on kasutusel erinevaid IT-süsteeme ja kasutajaliideseid. Õppija, kes juba töötab ettevõttes, saab oma teoreetilisi teadmisi kohe praktikas rakendada.<br />
                                        Praktika maht on esimesel kursusel 10 nädalat ja teisel kursusel 15 nädalat.<br />
                                        Hea teada!<br />
                                        • Praktikakohast kujuneb sageli tänu uutele oskustele ka uute karjäärivõimalustega kindel töökoht.<br />
                                        • Tartu Rakenduslikus Kolledžis toimub õppetöö ja praktika kaasaegsetes õppeklassides ja -laborites.<br />
                                        • Tartu Rakenduslik Kolledž toetab õpilaste osalemist kutsevõistlustel. Edukas osalemine kutsevõistlustel loob kasulikke kontakte tööandjatega!
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
                                        Tartu Rakendusliku Kolledži IT-süsteemide nooremspetsialisti eriala lõpetajat ootab:<br />
                                        • Kindel töö, hea palk ja valikuvõimalused spetsialiseerumiseks väga erinevates valdkondades:<br />
                                        ◦ arvutitehnikuna,<br />
                                        ◦ klienditoetehnikuna (help desk),<br />
                                        ◦ kasutajatoe spetsialistina,<br />
                                        ◦ võrgutehnikuna,<br />
                                        ◦ võrguadministraatorina.<br />
                                        • Kutsetunnistus kehtivusega Eestis ja teistes Euroopa riikides.<br />
                                        • Karjäärivõimalused:<br />
                                        ◦ Nutikad IT-süsteemide nooremspetsialistid saavutavad pideva enesetäiendamise ja töökogemuse käigus peagi tähelepanuväärseid töötulemusi ja liiguvad karjääriredelil edasi.<br />
                                        ◦ Sõltumatuse eelistajad saavad end teostada IT-ettevõtjatena.<br />
                                        ◦ Kuigi töö leiab tegijad üles sageli juba koolipingis, tasub jätkata õpinguid pidevalt arenevas valdkonnas.
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
                                        Edasiõppimise võimalusi pakuvad:<br />
                                        • Kutsehariduse tasemel:<br />
                                        ◦ Tartu Rakenduslik Kolledž, Süsteemiadministraator<br />
                                        • Kõrghariduse tasemel:<br />
                                        ◦ Informaatika, IT-süsteemide arendus või äriinfotehnoloogia<br />
                                        ◦ Tartu Ülikool.<br />
                                        ◦ Informaatika ja Arvutitehnika erialad<br />
                                        ◦ Tallinna Ülikoolis<br />
                                        ◦ Informaatika eriala<br />
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
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=584&_gl=1*1wuuria*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDUwNTEuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDUwNTEuNTguMC4w" target="_blank" rel="noopener noreferrer">Õppekava PDF</a>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=584&rakenduskavad=jah&oppegrupp=uldine&_gl=1*1wuuria*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDUwNTEuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDUwNTEuNTguMC4w" target="_blank" rel="noopener noreferrer">Rakenduskava PDF</a>
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

export default ITNooremspetsialist;
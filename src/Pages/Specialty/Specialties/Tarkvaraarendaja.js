import React, { useState } from 'react';
import './Specialties.css';
import tarkvaraarendaja from '../../../assets/pictures/student_computer.jpeg';
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
                            Tarkvaraarendaja on kõrgelt hinnatud spetsialist, kelle põhiliseks tööks on tarkvara lähtekoodi kirjutamine. Tarkvaraarendajat läheb vaja kodulehe, mitmesuguste e-teenuste ja -poodide või hoopis andmebaasi keskkondade, mobiilirakenduste ja mängude loomiseks.
                        </p>
                        <h2>Kellele?</h2>
                        <p>
                            Hea tarkvaraarendaja osaleb keskkonna struktuuri ja süsteemi loomisel. Ta tunneb ja oskab välja pakkuda erinevaid tehnilisi lahendusi, kuidas süsteem kõige paremini töötaks ning oskab testida ja teostatud töid dokumenteerida, süsteeme hooldada, ennetada rünnakuid ja andmelekkeid. Hea tarkvaraarendaja on ka analüüsija, kaasa mõtleja ja lahenduste otsija, kuna tarkvara arendamine toimub projekti käigus. Ta suudab toime tulla enda töö ja aja planeerimisega ning on hea meeskonnaliige ka rahvusvahelistes tiimides.
                            Tartu Rakendusliku Kolledži tarkvaraarendaja õpib lisaks erialastele oskustele ka gümnasistidega võrreldavas mahus üldaineid – laia matemaatikat, emakeelt ja inglise keelt ning sooritab õppe lõpus riigieksamid. Ta on valmis jätkama kõrgharidusõppes või alustama karjääri tarkvaraarendusettevõtetes.<br /><br />
                            Tarkvaraarendajaid vajatakse väga erinevates valdkondades. Seega tuleb kasuks teha selgeks veel mõni valdkond, kus oma tarkvaraarenduse oskusi rakendada. Saad teha lennukat karjääri maailma kõige kiiremini kasvavas valdkonnas.
                        </p>
                        <h2>Kuidas toimub õpe?</h2>
                        <p>
                            Koolipõhine õpe ja kestvus 4 aastat. Õppes kasutatakse inglisekeelseid õppematerjale ja osa õppetööst
                            võib toimuda inglise keeles.<br /><br />
                            Vaata ka: https://startit.ee/tarkvaraarendaja/
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
                                        • Ootame õppima põhikoolilõpetajat.<br />
                                        • Test, mis hindab matemaatilist võimekust, funktsionaalset lugemisoskust, tähelepanu, keskendumisvõimet, mälu.<br />
                                        • Praktiline ülesanne – enne vastuvõtu katseid tuleb läbida konkreetne Codecademy kursus: https://www.codecademy.com/learn/learn-python-3.<br />
                                        • Kursus on tasuline, kuid seitsme päeva jooksul on võimalik kursust tasuta läbida;<br />
                                        • Vestlus (hindame suhtlemisoskust, meeskonnatööoskust, silmaringi)
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
                                        Tartu Rakendusliku Kolledži IT-akadeemia lõpetanud tarkvaraarendaja:<br />
                                        • oskab tarkvara lähtekoodi vastavalt väljatöötatud arhitektuurile ning disainile;<br />
                                        • osaleb tarkvara lahenduse väljatöötamisel ja pakub välja erinevaid tehnilisi lahendusi, arvestades süsteemi kui tervikut;<br />
                                        • kavandab ja töötab välja rakenduse;<br />
                                        • integreerib süsteemid, testib ja võtab lahenduse kasutusele;<br />
                                        • oskab leida ebakõlasid ülesande püstitusel ja anda sisendit ülesande täpsustamiseks ning muudatuste ja arenduste testimiseks;<br />
                                        • töötab meeskonnas ja lahendab ülesandeid iseseisvalt, mõistes ja rakendades meeskonnas kasutatavat tarkvara arenduse metoodikat;<br />
                                        • suudab oma tööd iseseisvalt organiseerida ja aega planeerida ning vastutust võtta;<br />
                                        • on hea meeskonnaliige ka rahvusvahelistes tiimides;<br />
                                        • on läbinud laia matemaatika, emakeele ja inglise keele õppekava ning on sooritanud riigieksamid;<br />
                                        • on sooritanud tarkvaraarendaja 4. taseme kutseeksami
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
                                        Tartu Rakendusliku Kolledži tarkvaraarendaja õppekavas on:<br />
                                        • projektõpe iseseisvalt või meeskonnas erialaste ülesannete teostamiseks;<br />
                                        • võimalus osaleda häkatonidel ning saada praktilist kogemust püstitatud eesmärkide lahendamiseks;<br />
                                        • kokku 7 kuud arendavat ettevõttepraktikat;<br />
                                        • võimalus käia välispraktikal või Eesti juhtivates IT ettevõtete suvekoolides;
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
                                        • Tarkvaraarendajal, kel on erialane kutseharidus, on palju võimalusi tööle asuda tarkvaraarenduse firmadesse programmeerijana ja tarkvaraarendajana.<br />
                                        • Tegu on globaalse kasvava ettevõtlusvaldkonnaga, kus heade spetsialistide järele on pidevalt suur nõudlus, mistõttu tarkvaraarendaja leiab hõlpsasti tööd ka väljaspool Eestit.<br />
                                        • Amet on suuresti rutiinivaba ning pakub pidevat pinget.<br />
                                        • Töötada saab väga erinevates valdkondades, lisaks tarkvaraarendusele spetsialiseerunud firmade ka näiteks panganduses, logistikas, meditsiinis, tööstuses jm.<br />
                                        • Mitmed tuntud ettevõtete ja start-up’ide juhid on alustanud oma karjääri just tarkvaraarendajatena.
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
                                        • TALTEC:<br />
                                        ◦ Informaatika<br />
                                        ◦ IT-süsteemide arendus<br />
                                        ◦ Äriinfotehnoloogia<br />
                                        • Tartu Ülikool:<br />
                                        ◦ Informaatika ja Arvutitehnika erialad<br />
                                        • Tallinna Ülikool:<br />
                                        ◦ Informaatika eriala<br />
                                        • Eesti Lennuakadeemia
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="side-content">
                    <div className="materials">
                        <h3>Vajalikud materjalid</h3>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=611&_gl=1*ht07sx*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ1NTYuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ1NTYuNTcuMC4w" target="_blank" rel="noopener noreferrer">Õppekava PDF</a>
                        <a href="https://siseveeb.voco.ee/veebivormid/oppekavad/oppekava_pdf?oppekava=611&rakenduskavad=jah&oppegrupp=uldine&_gl=1*py5c0d*_ga*MTU0MzI5Nzk3Ny4xNzI4NTQyNTQw*_ga_SVBCWCMRJK*MTc0MTIwMjMwMi4yNy4xLjE3NDEyMDQ1NTYuMC4wLjA.*_ga_C6W71SBM6T*MTc0MTIwMjMwMy4yNy4xLjE3NDEyMDQ1NTYuNTcuMC4w" target="_blank" rel="noopener noreferrer">Rakenduskava PDF</a>
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

import React from 'react';
import './Homepage.css';
import leftImage from '../../assets/logos/voco_muster_vasak.png';
import rightImage from '../../assets/logos/voco_muster_parem.png'; 
import studentImage from '../../assets/pictures/student_computer.jpeg'; 
import buildingImage from '../../assets/pictures/Voco_building.jpeg'; 

const Homepage = () => {
    return (
        <main className="homepage">
            <section className="hero">
                <img src={leftImage} alt="Left Decoration" className="hero-image left" />
                <div className="hero-content">
                    <h1>ÕPI END VABAKS</h1>
                    <p>Ühine VOCO IT Akadeemiaga!</p>
                </div>
                <img src={rightImage} alt="Right Decoration" className="hero-image right" />
            </section>
            
            <section className="content-section it-akadeemia">
                <div className="content-text">
                <h2>IT Akadeemia</h2>
                <ul>
                    <li>Tartu Rakendusliku Kolledži IT Akadeemias on võimalik õppida kuuel erialal: UX/UI disaini nooremspetsialist, (noorem) tarkvaraarendaja, IT-süsteemide (noorem)spetsialist ning kestlikud tehnoloogiad.</li>
                    <li>Õppekavad on loodud tihedas koostöös ettevõtetega, et tagada õpilastele tööturul vajalikud oskused.</li>
                    <li>Õppetöö on üles ehitatud põhimõttel "from zero to HERO", alustades algteadmistest ja liikudes edasi süvaoskusteni.</li>
                    <li>Õpilased saavad tuge nii õpetajatelt kui ka kaasõpilastest tuutoritelt, kes jagavad oma kogemusi ja teadmisi.</li>
                </ul>
                </div>
                <div className="content-image">
                    <img src={studentImage} alt="IT student working on computer" />
                </div>
            </section>
            

            <section className="content-section oppekeskkond">
                <div className="content-text">
                <h2>Õppekeskond</h2>
                <ul>
                    <li>IT Akadeemia tegutseb VOCO Kopli hoones (Kopli tn 1, Tartu).</li>
                    <li>Kopli hoone klassiruumid on varustatud tänapäevase tehnoloogiaga, sealhulgas arvutid, serverid ja muu IT-taristu, mis võimaldavad praktilist õppetööd.</li>
                    <li>Õppetöös kasutatakse projektipõhist lähenemist, kus õpilased töötavad praktiliste ülesannete ja reaalsete probleemide lahendamise kallal.</li>
                    <li>Keskendume individuaalsele arengule, et iga õppija saaks oma tempo ja vajaduste järgi areneda.</li>
                    <li>Koolivälisel ajal on õpilastel võimalus tegeleda erinevate hobidega ning osaleda kooli pakutavates lisategevustes, mis toetavad nende isiklikku arengut ja aitavad leida tasakaalu õppetöö ning vaba aja vahel.</li>
                </ul>
                </div>
                <div className="content-image">
                    <img src={buildingImage} alt="Voco building" />
                </div>
            </section>
            
            <section className="sundmused">
                <h2>Tulevased sündmused IT Akadeemias</h2>
                <div className="table-container">
                    <table>
                    <tbody>
                        <tr className="event-row">
                            <td className="date-column">18.01.2025</td>
                            <td className="event-column">VOCO Rohehäkaton</td>
                            <td className="location-column">
                                <div className="location-wrapper">
                                    <span className="location">Kammivabrik</span>
                                    <span className="tags">ITS, ITA, VS, UX</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="event-row">
                            <td className="date-column">14.02.2025</td>
                            <td className="event-column">VOCO Talvine lõpukahtus</td>
                            <td className="location-column">
                                <div className="location-wrapper">
                                    <span className="location">Vanemuise Kontserdimaja</span>
                                    <span className="tags">ITS, UX, VS</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="event-row">
                            <td className="date-column">02.03.2025</td>
                            <td className="event-column">Õppesõit Pipedrive-i</td>
                            <td className="location-column">
                                <div className="location-wrapper">
                                    <span className="location">Pipedrive Tartu kontor</span>
                                    <span className="tags">ITA24, VS24, UX24</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="event-row">
                            <td className="date-column">10.04.2025</td>
                            <td className="event-column">VOCO avatud uksed</td>
                            <td className="location-column">
                                <div className="location-wrapper">
                                    <span className="location">Voco Kopli hoone</span>
                                    <span className="tags">Kõik huvilised</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="event-row">
                            <td className="date-column">22.05.2025</td>
                            <td className="event-column">Ühised kevadtalgud</td>
                            <td className="location-column">
                                <div className="location-wrapper">
                                    <span className="location">Voco Kopli hoone</span>
                                    <span className="tags">Kõik huvilised</span>
                                </div>
                            </td>
                        </tr>                      
                    </tbody>
                </table>
            </div>
        </section>
    </main>
    );
};

export default Homepage;
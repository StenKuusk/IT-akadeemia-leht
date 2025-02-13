import React from 'react';
import './Homepage.css';
import leftImage from '../../assets/logos/voco_muster_vasak.png';
import rightImage from '../../assets/logos/voco_muster_parem.png'; 

const Homepage = () => {
    return (
        <div>
            <section className="hero">
                <img src={leftImage} alt="Left Decoration" className="hero-image left" />
                <div className="hero-content">
                    <h1>ÕPI END VABAKS</h1>
                    <p>Ühine VOCO IT Akadeemiaga!</p>
                </div>
                <img src={rightImage} alt="Right Decoration" className="hero-image right" />
            </section>
            
            <section className="it-akadeemia">
                <h2>IT Akadeemia</h2>
                <ul>
                    <li>Võimalik õppida kuuel erialal: UX/UI disain, tarkvaraarendus, IT-süsteemide spetsialist jne.</li>
                    <li>Õppekavad on loodud tihedas koostöös ettevõtetega.</li>
                    <li>Õppetöö on üles ehitatud põhimõttel "from zero to HERO".</li>
                    <li>Õpilased saavad tuge nii õpetajatelt kui kaasõpilastelt.</li>
                </ul>
            </section>
            
            <section className="oppekeskkond">
                <h2>Õppekeskond</h2>
                <p>IT Akadeemia tegutseb VOCO Kopli hoones (Tartu Kopli 1).</p>
                <p>Kool pakub kaasaegseid laboriruume ja praktilist õppetööd.</p>
            </section>
            
            <section className="sundmused">
                <h2>Tulevased sündmused IT Akadeemias</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Kuupäev</th>
                            <th>Sündmus</th>
                            <th>Asukoht</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>18.01.2025</td>
                            <td>VOCO Rohehäkaton</td>
                            <td>Kammivabrik</td>
                        </tr>
                        <tr>
                            <td>14.02.2025</td>
                            <td>VOCO Talvine lõpukahtus</td>
                            <td>Vanemuise Kontserdimaja</td>
                        </tr>
                        <tr>
                            <td>02.03.2025</td>
                            <td>Õppesõit Pipedrive-i</td>
                            <td>Pipedrive Tartu kontor</td>
                        </tr>
                        <tr>
                            <td>10.04.2025</td>
                            <td>VOCO avatud uksed</td>
                            <td>VOCO Kopli hoone</td>
                        </tr>
                        <tr>
                            <td>22.05.2025</td>
                            <td>Ühised kevadtalgud</td>
                            <td>VOCO Kopli hoone</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Homepage;
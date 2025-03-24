import React from 'react';
import './Traineeship_võta.css';

const TraineeshipsVõta = () => {
    return (
    <div>
        <div className="traineeshipsvota-container">
            <h1>Praktika arvestamine VÕTA-ga</h1>
            <div className="traineeshipsvota-text-container">
                <h2>VÕTA – varasemate õpingute ja töökogemuse arvestamine</h2>
                <p>Kui oled oma eelnevas haridus- ja tööelus juba nii mõndagi õppinud, on Sul võimalus neid õpingute osana või kutse taotlemisel kasutada. VÕTA eesmärgiks on väärtustada õpilase oskusi ja teadmisi, sõltumata sellest millal, kus ja millises vormis need omandati.</p>
            </div>
            <div className="video-container">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/sLwMADK1Od8" 
                        title="YouTube video VÕTA kohta" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
            </div>
            <div className="traineeshipsvota-text-container">
                <h2>VÕTAt saab kasutada</h2>
                <ul>
                   <li><strong>kunagi poolelijäänud õpingute jätkamisel,</strong> kui oled oma õpingud kutsekoolis varasemalt katkestanud või vahetad kooli õpingute käigus samal või sarnasel erialal, on võimalik arvestada õppekavas olevad juba läbitud ained omandatuks.</li>
                   <li><strong>gümnaasiumist kutsekooli tulles,</strong> kui on läbitud piisavas mahus õppeaineid, on võimalik need üle kanda kutseõppe õppekava üldaineteks.</li>
                   <li><strong>sisseastumisel,</strong> kui õpingute alustamiseks on vajalik kindel eelnev haridust (Tartu Rakendusliku Kolledži osadel jätkuõppe erialadel) ja Sul see puudub, kuid omad haridust sarnases valdkonnas, täiendkoolitust või erialast töökogemust, on Sul siiski võimalik sisseastumisnõudeid täita.</li>
                   <li><strong>kutse taotlemisel,</strong> kui varasemad õpingud ja töökogemus vastavad kutse taotlemisel sätestatud kompetentsinõuetele.</li>
                </ul>   
            </div>
            <div className="traineeshipsvota-text-container">
                <h2>VÕTAga on võimalik arvestada</h2>
                <ul>
                   <li>varasemalt õppeasutustes omandatud teadmisi ja oskusi</li>
                   <li>varasemalt läbitud täiendkoolituste raames omandatud teadmisi ja oskusi</li>
                   <li>varasemast töökogemusest saadud oskusi ja teadmisi, kusjuures töökogemusena loetakse ka vabatahtlikku tööd</li>
                </ul>
            </div>
            <div className="traineeshipsvota-text-container">
                <h2>Kuidas käib VÕTA taotlemine?</h2>
                <p>Enne VÕTA protsessi alustamist tuleb kindlasti tutvuda õppekavaga, millel õpid või asud õppima ja saada ülevaade õpingute sisust. Igal moodulil on õpiväljundid, mis õppe lõppedes saavutatakse. Kui oled nendega tutvunud ja tead, et Sinu varasemad teadmised ja oskused lubavad Sul antud väljundeid täita, siis saad esitada VÕTA taotluse.</p>
                <ul>
                   <li>Varasemate õpingute arvestamiseks on Sul vaja kindlasti sellekohast dokumenti (õpitulemuste tõend eelmisest koolist, lõputunnistus, väljavõte õppekavast). Tõendit on vaja ka täiendkoolitusest omandatud teadmiste ja oskuste ülekandmiseks</li>
                   <li>Töökogemuse arvestamiseks on vajalik eneseanalüüs, mille käigus pead kirjeldama ja suutma tõestada, mida ja kuidas töötamise käigus õppisid. Seda on kõige kergem teha STARR vormi abil (link). Lisa taotlusele kõik olemasolevad dokumendid, mis tõestavad töötamist (tööleping, erinevad töötamise ajal läbitud täiendkoolitused jm).</li>
                </ul>
           </div>
            <div className="traineeshipsvota-text-container">
                <h2>VÕTAga seotud tingimused ja vajaminevad dokumendid ja vormid leiad siit:</h2>
                <ul>
                   <li>Tartu Rakendusliku Kolledži Õppekorralduseeskiri (<a href="https://voco.ee/wp-content/uploads/Oppekorralduseeskiri-aug_2024.pdf">PDF</a>)</li>
                   <li>VÕTA kord (<a href="https://voco.ee/wp-content/uploads/Lisa-2-VOTA-kord_290823.pdf">PDF</a>)</li>
                   <li>VÕTA nõustajad (<a href="https://voco.ee/wp-content/uploads/VOTA-noustajad-2024-2025.pdf">PDF</a>)</li>
                   <li>VÕTA komisjonid (<a href="https://voco.ee/wp-content/uploads/VOTA-komisjonid-2024-2025.pdf">PDF</a>)</li>
                   <li>Lisa 1, taotlus varasemate õpingute arvestamiseks (<a href="https://voco.ee/wp-content/uploads/VOTA-lisa-1-Taotlus-varasemate-opingute-arvestamiseks-1.doc">DOC</a>)</li>
                   <li>Lisa 2, taotlus varasemate töökogemuste arvestamiseks (<a href="https://voco.ee/wp-content/uploads/VOTA-lisa-2-Taotlus-varasemate-tookogemuste-arvestamiseks-1.doc">DOC</a>)</li>
                   <li>Lisa 3, STARR vorm varasemate töökogemuste analüüsimiseks (<a href="https://voco.ee/wp-content/uploads/VOTA-lisa-3-STARR-vorm-varasematest-tookogemustest-opitu-analuusimiseks-1.doc">DOC</a>)</li>
                </ul>
            </div>
            <div className="traineeshipsvota-text-container">
                <h2>Iseseisvalt läbitavad õppematerjalid leiad siit:</h2>
                <ul>
                    <li><a href="https://e-koolikott.ee/et/oppematerjal/31324-VOTA-hindajale">VÕTA hindajale</a></li>
                    <li><a href="https://e-koolikott.ee/et/oppematerjal/31326-VOTA-taotlejale">VÕTA taotlejale</a></li>
                    <li><a href="https://e-koolikott.ee/et/oppematerjal/31325-VOTA-noustajale">VÕTA nõustajale</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default TraineeshipsVõta;
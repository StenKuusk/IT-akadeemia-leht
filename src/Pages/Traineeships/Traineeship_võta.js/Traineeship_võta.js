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
                <br /><br />
                <ul>
                   <li>Varasemate õpingute arvestamiseks on Sul vaja kindlasti sellekohast dokumenti (õpitulemuste tõend eelmisest koolist, lõputunnistus, väljavõte õppekavast). Tõendit on vaja ka täiendkoolitusest omandatud teadmiste ja oskuste ülekandmiseks</li>
                <br /><br />
                   <li>Töökogemuse arvestamiseks on vajalik eneseanalüüs, mille käigus pead kirjeldama ja suutma tõestada, mida ja kuidas töötamise käigus õppisid. Seda on kõige kergem teha STARR vormi abil (link). Lisa taotlusele kõik olemasolevad dokumendid, mis tõestavad töötamist (tööleping, erinevad töötamise ajal läbitud täiendkoolitused jm).</li>
                </ul>
           </div>
            <div className="traineeshipsvota-text-container">
                <h2>VÕTAga seotud tingimused ja vajaminevad dokumendid ja vormid leiad siit:</h2>
                <ul>
                   <li>Tartu Rakendusliku Kolledži Õppekorralduseeskiri (PDF)</li>
                   <li>VÕTA kord (PDF)</li>
                   <li>VÕTA nõustajad (PDF)</li>
                   <li>VÕTA komisjonid (PDF)</li>
                   <li>Lisa 1, taotlus varasemate õpingute arvestamiseks (DOC)</li>
                   <li>Lisa 2, taotlus varasemate töökogemuste arvestamiseks (DOC)</li>
                   <li>Lisa 3, STARR vorm varasemate töökogemuste analüüsimiseks (DOC)</li>
                </ul>
            </div>
            <div className="traineeshipsvota-text-container">
                <h2>Iseseisvalt läbitavad õppematerjalid leiad siit:</h2>
                <ul>
                    <li>VÕTA hindajale</li>
                    <li>VÕTA taotlejale</li>
                    <li>VÕTA nõustajale</li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default TraineeshipsVõta;
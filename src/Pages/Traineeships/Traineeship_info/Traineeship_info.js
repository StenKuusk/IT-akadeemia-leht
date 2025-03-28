import React from 'react';
import './Traineeship_info.css';
import praktikaImage from '../../../assets/pictures/Praktika/Praktikajoonis.png';
import praktikaImage2 from '../../../assets/pictures/Praktika/Praktika_dokumendid.png';

const TraineeshipsInfo = () => {
    return (
        <div>
            <div className="praktika-container">
                <h1>Praktika</h1>
                <div className="praktika-pilt-container">
                    <img 
                        src={praktikaImage} 
                        alt="Praktika illustratiivne pilt" 
                        className="praktika-pilt" 
                    />
                </div>
            </div>

            <div className="praktikakoht-container">
                <h1>Praktikakoht leitud. Mis dokumente täidan?</h1>
                <div className="praktika-pilt-container2">
                    <img 
                        src={praktikaImage2} 
                        alt="Praktika joonis" 
                        className="praktika-pilt2" 
                    />
                </div>

                <div className="praktika-buttons-container">
                    <button className="praktika-button">Praktikakoha taotlusleht</button>
                    <button className="praktika-button">Praktikaleping</button>
                    <button className="praktika-button" onClick={() => window.location.href='https://kevinita22.ikt.khk.ee/IT-Akadeemia%20jaoks%20pdf-id/Praktikap%c3%a4evik.pdf'}>PraktikaPäevik</button>
                    <button className="praktika-button">Hindamisvorm</button>
                    <button className="praktika-button">Praktikaaruanne</button>
                </div>              
            </div>

            <div className="praktika-koht-container">
                <h1>Abistavad materjalid</h1>
            <div className="praktika-koht-buttons-container">
                <button className="praktika-koht-button" onClick={() => window.location.href='https://kevinita22.ikt.khk.ee/IT-Akadeemia%20jaoks%20pdf-id/DOCS-is%20vormistamise%20juhis.pdf'}>DOCS-is vormistamise juhis</button>
                <button className="praktika-koht-button" onClick={() => window.location.href='https://kevinita22.ikt.khk.ee/IT-Akadeemia%20jaoks%20pdf-id/Praktika%20arvestamine.pdf'}>Praktika arvestamine</button>
                <button className="praktika-koht-button" onClick={() => window.location.href='https://kevinita22.ikt.khk.ee/IT-Akadeemia%20jaoks%20pdf-id/Praktikaaruande%20koostamise%20juhend.pdf'}>Praktikaaruande koostamise juhend</button>
                <button className="praktika-koht-button" onClick={() => window.location.href='https://kevinita22.ikt.khk.ee/IT-Akadeemia%20jaoks%20pdf-id/Praktilise%20t%c3%b6%c3%b6%20ning%20praktika%20l%c3%a4biviimise%20tingimused%20ja%20kord.pdf'}>Praktilise töö ning praktika läbiviimise tingimused ja kord</button>
                <button className="praktika-koht-button" onClick={() => window.location.href='https://kevinita22.ikt.khk.ee/IT-Akadeemia%20jaoks%20pdf-id/T%c3%96%c3%96OHUTUSALANE%20JA%20-TERVISHOIU%20ALANE%20MEELESPEA.pdf'}>Tööohutusalane ja -tervishoiu alane meelsepea</button>
                <button className="praktika-koht-button" onClick={() => window.location.href='https://kevinita22.ikt.khk.ee/IT-Akadeemia%20jaoks%20pdf-id/VOCO%20kirjalike%20t%c3%b6%c3%b6de%20juhend.pdf'}>Voco kirjalike tööde juhend</button>
            </div>
        </div>
    </div>
    );
};

export default TraineeshipsInfo;
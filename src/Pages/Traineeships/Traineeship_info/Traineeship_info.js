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
                    <button className="praktika-button">Praktikapäevik</button>
                    <button className="praktika-button">Hindamisvorm</button>
                    <button className="praktika-button">Praktikaaruanne</button>
                </div>              
            </div>

            <div className="praktika-koht-container">
                <h1>Abistavad materjalid</h1>
            <div className="praktika-koht-buttons-container">
                <button className="praktika-koht-button">DOCS-is vormistamise juhis</button>
                <button className="praktika-koht-button">Praktika arvestamine</button>
                <button className="praktika-koht-button">Praktikaaruande koostamise juhend</button>
                <button className="praktika-koht-button">Praktilise töö ning praktika läbiviimise tingimused ja kord</button>
                <button className="praktika-koht-button">Tööohutusalane ja -tervishoiu alane meelsepea</button>
                <button className="praktika-koht-button">Voco kirjalike tööde juhend</button>
            </div>
        </div>
    </div>
    );
};

export default TraineeshipsInfo;
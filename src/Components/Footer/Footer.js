import React from 'react';
import './Footer.css';
import logo from '../../assets/logos/IT_akadeemia_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="black-section">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className='footer-info'>
                 <div className='contact-info'>
                    <h3>Kontakt</h3>
                    <a href="mailto:info@voco.ee">info@voco.ee</a>
                    <p>7 361 810</p>
                 </div>
                 <div className='voco-info'>
                    <h3>VOCO</h3>
                    <p>Kopli 1</p>
                    <p>Tartu 50115 Eesti</p>
                 </div>
                 <div className='privacy-info'>
                    <h3>Privaatsustingimused</h3>
                    <a href="https://voco.ee/andmekaitse-info/">Andmekaitse</a><br />
                    <a href="https://voco.ee/kupsised/">Küpsised</a>
                 </div>
                </div>
            </div>
        </div>
        <div className="white-section">
            <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} TARTU RAKENDUSLIK KOLLEDŽ </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
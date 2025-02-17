import React from 'react';
import './Footer.css';
import logo from '../../assets/logos/IT_akadeemia_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="black-section">
            <div className="footer-content">
                <div className="contact-group">
                    <img src={logo} alt="Logo" className="footer-logo" />
                </div>
                <div className='contact-group contact-info'>
                    <h3>Kontakt</h3>
                    <a href="mailto:info@voco.ee">info@voco.ee</a>
                    <p>7 361 810</p>
                </div>
                <div className='contact-group voco-info'>
                    <h3>VOCO</h3>
                    <p>Kopli 1</p>
                    <p>Tartu 50115 Eesti</p>
                </div>
                <div className='contact-group privacy-info'>
                    <h3>Privaatsustingimused</h3>
                    <p>Andmekaitse</p>
                    <p>Küpsised</p>
                </div>
            </div>
        </div>
        <div className="white-section">
            <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TARTU RAKENDUSLIK KOLLEDŽ </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
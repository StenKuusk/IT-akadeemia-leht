import React, { useEffect, useState } from 'react';
import './Contacts.css';
import logo from '../../assets/logos/IT_akadeemia_logo_must.png';
import magnifierIcon from '../../assets/icons/magnifier.png'; 
import placeholderImage from '../../assets/icons/picture_placeholder.png'; 

const Contacts = () => {
    const [teachers, setTeachers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://siseveeb.voco.ee/veebilehe_andmed/tootajad?section=ALL')
            .then(response => response.json())
            .then(data => {
                const itAkadeemiaTeachers = data.employees.filter(teacher => teacher.department === 'IT Akadeemia');
                const formattedTeachers = itAkadeemiaTeachers.map(teacher => ({
                    name: `${teacher.firstname} ${teacher.lastname}`,
                    image: teacher.image || placeholderImage, 
                    info: teacher.job_title,
                    room: teacher.room ? teacher.room[0] : 'N/A',
                    email: teacher.email
                }));
                setTeachers(formattedTeachers);
            })
            .catch(error => console.error('Error fetching teacher data:', error));
    }, []);

    const filteredTeachers = teachers.filter(teacher =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div>
                <div className="contact-section">
                    <div className="contact">
                        <h2>Kontaktid</h2>
                        <div className="contact-info-section">
                            <div className="logo-section">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="contact-info-frame1">
                                <h4>Üldinfo</h4>
                                <p>Telefon: +372 7 361 810</p>
                                <p>Postiaadress: Kopli 1, 50115 Tartu</p>
                                <p>E-post: info@voco.ee</p>
                                <p>Registrikood: 75024308</p>
                                <p>KMKR nr: EE100786499</p>
                                <p style={{fontWeight: 'bold'}}>Tartu Rakenduslikule Kolledžile saab esitada üksnes e-arveid.</p>
                            </div>
                            <div className="contact-info-frame2">
                                <h4>Kopli tänava õppekorpus</h4>
                                <p>Telefon: +372 7 361 810</p>
                                <p>Postiaadress: Kopli 1, 50115 Tartu</p>
                            </div>
                            <div className="contact-info-frame3">
                                <h4>IT Akadeemia juht<br />
                                Signe Vedler</h4>
                                <p>Telefon: +372 5178 966</p>
                                <p>E-post: signe.vedler@voco.ee</p>
                                <p>Tööruum: A405</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teachers-section">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Otsi..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <img src={magnifierIcon} alt="Search" className="search-icon" />
                </div>
                <div className="teacher-cards">
                    {filteredTeachers.map((teacher, index) => (
                        <div key={index} className="teacher-card">
                            <div className="frame1">
                                <div className="frame1-together">
                                    <img src={teacher.image} alt={teacher.name} />
                                    <div className="info">
                                        <h3>{teacher.name}</h3>
                                        <p>{teacher.info}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="frame2">
                                <p>Tööruum: {teacher.room}</p>
                                <p>Email: {teacher.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contacts;
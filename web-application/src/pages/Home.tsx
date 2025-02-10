import React from 'react';
import Calendar from '../components/Calendar';
import OtherFeatures from '../components/OtherFeatures';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the IT Academy</h1>
            <p>Your gateway to learning and development.</p>
            <Calendar />
            <OtherFeatures />
        </div>
    );
};

export default Home;
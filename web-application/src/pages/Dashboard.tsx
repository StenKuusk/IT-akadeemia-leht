import React from 'react';
import Calendar from '../components/Calendar';
import ClassSchedule from '../components/ClassSchedule';
import OtherFeatures from '../components/OtherFeatures';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Administrator Dashboard</h1>
            <Calendar />
            <ClassSchedule />
            <OtherFeatures />
        </div>
    );
};

export default Dashboard;
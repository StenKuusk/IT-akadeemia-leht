import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Timetable from './Pages/Timetable/Timetable';
import Specialty from './Pages/Specialty/Specialty';
import Traineeships from './Pages/Traineeships/Traineeships';
import News from './Pages/News/News';
import Competitions from './Pages/Competitions/Competitions';
import Contacts from './Pages/Contacts/Contacts';
import Navbar  from './Components/Navbar/Navbar';
// import Rooter from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/traineeships" element={<Traineeships />} />
          <Route path="/news" element={<News />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        {/*<Rooter />*/}
      </div>
    </Router>
  );
}

export default App;

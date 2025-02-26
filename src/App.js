import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Timetable from './Pages/Timetable/Timetable';
import Specialty from './Pages/Specialty/Specialty';
import ITNooremspetsialist from './Pages/Specialty/Specialties/ITNooremspetsialist';
import ITSpetsialist from './Pages/Specialty/Specialties/ITSpetsialist';
import KestlikudTehnoloogiad from './Pages/Specialty/Specialties/KestlikudTehnoloogiad';
import Tarkvaraarendaja from './Pages/Specialty/Specialties/Tarkvaraarendaja';
import NooremTarkvaraarendaja from './Pages/Specialty/Specialties/NooremTarkvaraarendaja';
import UXUINooremspetsialist from './Pages/Specialty/Specialties/UXUINooremspetsialist';
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
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/specialties/it-nooremspetsialist" element={<ITNooremspetsialist />} />
          <Route path="/specialties/it-spetsialist" element={<ITSpetsialist />} />
          <Route path="/specialties/kestlikud-tehnoloogiad" element={<KestlikudTehnoloogiad />} />
          <Route path="/specialties/tarkvaraarendaja" element={<Tarkvaraarendaja />} />
          <Route path="/specialties/noorem-tarkvaraarendaja" element={<NooremTarkvaraarendaja />} />
          <Route path="/specialties/ux-ui-nooremspetsialist" element={<UXUINooremspetsialist />} />
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
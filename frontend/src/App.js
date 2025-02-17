import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/doctor/Doctors";
import DoctorDetails from "./pages/doctor/DoctorDetails";
import Clinics from "./pages/clinics/Clinics";
import ClinicDetails from "./pages/clinics/ClinicDetails";
import Search from "./pages/search";
import RegistrationPage from "./pages/RegistrationPage";
import SpecialtySearch from "./pages/SpecialtySearch";
import HealthConcerns from "./pages/HealthConcerns";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/clinics/:id" element={<ClinicDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/specialty/:speciality" element={<SpecialtySearch />} />
        <Route path="/HealthConcerns" element={<HealthConcerns />} />
      </Routes>
    </Router>
  );
}

export default App;



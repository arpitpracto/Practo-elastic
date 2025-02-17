import { useState } from "react";
import { api } from "../utils/api"; // ✅ Ensure correct path
import DoctorCard from "../components/DoctorCard";
import ClinicCard from "../components/ClinicCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ doctors: [], clinics: [] });

  const handleSearch = async () => {
    try {
      const doctorsRes = await api.get(`/search/doctors?query=${query}`);
      const clinicsRes = await api.get(`/search/clinics?query=${query}`);
      setResults({ doctors: doctorsRes.data, clinics: clinicsRes.data });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="text-2xl font-bold text-center mt-6">Search</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <div className="p-6">
        <h2 className="text-xl font-bold">Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.doctors.length > 0 ? (
            results.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
        <h2 className="text-xl font-bold mt-6">Clinics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.clinics.length > 0 ? (
            results.clinics.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))
          ) : (
            <p>No clinics found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

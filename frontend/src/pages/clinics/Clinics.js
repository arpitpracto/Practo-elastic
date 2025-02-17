import { useEffect, useState } from "react";
import { api } from "../../utils/api"; // Ensure this is correctly set up
import ClinicCard from "../../components/ClinicCard";
import Navbar from "../../components/Navbar";

export default function Clinics() {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    api.get("http://localhost:8080/clinics")
      .then((res) => setClinics(res.data))
      .catch((error) => console.error("Error fetching clinics:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center mt-6">Clinics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {clinics.map((clinic) => (
          <ClinicCard key={clinic.id} clinic={clinic} />
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios"; // Using axios directly instead of `api`
import DoctorCard from "../../components/DoctorCard";
import Navbar from "../../components/Navbar";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/doctors") // Ensure this matches your backend API
      .then((res) => setDoctors(res.data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center mt-6">Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

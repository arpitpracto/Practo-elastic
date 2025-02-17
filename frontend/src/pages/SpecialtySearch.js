import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { api } from "../utils/api"; // Ensure correct path to API

export default function SpecialtySearch() {
  const { speciality } = useParams(); // Get the selected speciality from the URL
  const navigate = useNavigate(); // Hook for navigation
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    // Fetch doctors based on the selected speciality
    const fetchSpecialityData = async () => {
      try {
        const doctorsRes = await api.get(`/search/doctors?query=${speciality}`);
        setDoctors(doctorsRes.data);

        // Extract unique clinics where these doctors work
        const uniqueClinics = new Set();
        doctorsRes.data.forEach((doctor) => {
          if (doctor.clinic) {
            uniqueClinics.add(doctor.clinic.name);
          }
        });

        setClinics([...uniqueClinics]);
      } catch (error) {
        console.error("Error fetching speciality data:", error);
      }
    };

    if (speciality) {
      fetchSpecialityData();
    }
  }, [speciality]); // Re-fetch when speciality changes


  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{speciality} Specialty</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Doctors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col items-center p-6 border rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:bg-gray-50 transition duration-300"
              onClick={() => navigate(`/doctors/${doctor.id}`)} // Navigate to doctor profile page
            >
              {/* Image (if available) */}
              <div className="w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-blue-500">
                <img 
                  src={doctor.imageUrl || "/images/doctor.png"} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              {/* Doctor's Name and Specialty */}
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.speciality}</p>
              {/* Contact info (optional) */}
              <div className="mt-2 text-xs text-gray-500">{doctor.contactNumber}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No doctors found for this speciality.</p>
        )}
      </div>

      {/* <h2 className="text-xl font-bold mt-6">Clinics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clinics.length > 0 ? (
          clinics.map((clinic, index) => (
            <div key={index} className="p-4 border rounded-md">
              {clinic}
            </div>
          ))
        ) : (
          <p>No clinics found for this speciality.</p>
        )}
      </div> */}
    </div>
  );
}

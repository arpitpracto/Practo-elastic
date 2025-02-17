// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ClinicDetails() {
//     const { id } = useParams(); // Get the ID from the URL
//     const [clinic, setClinic] = useState(null);

//     useEffect(() => {
//         if (id) {
//             axios.get(`http://localhost:8080/clinics/${id}`)
//                 .then(response => setClinic(response.data))
//                 .catch(error => console.error("Error fetching clinic details:", error));
//         }
//     }, [id]);

//     if (!clinic) return <p>Loading...</p>;

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold">{clinic.name}</h1>
//             <p><strong>Address:</strong> {clinic.address}</p>
//             <p><strong>Contact:</strong> {clinic.contactNumber}</p>
//             <p><strong>Email:</strong> {clinic.email}</p>
//             <p><strong>Website:</strong> {clinic.website || "N/A"}</p>
//             <h2 className="text-xl font-semibold mt-4">Doctors</h2>
//             <ul>
//                 {clinic.doctors && clinic.doctors.map(doctor => (
//                     <li key={doctor.id}>{doctor.name} - {doctor.speciality}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ClinicDetails() {
    const { id } = useParams();
    const [clinic, setClinic] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/clinics/${id}`)
                .then(response => setClinic(response.data))
                .catch(error => console.error("Error fetching clinic details:", error));
        }
    }, [id]);

    if (!clinic) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Clinic Image */}
                <div className="flex-shrink-0">
                    <img 
                        src={clinic.imageUrl || "/images/hosicon.png"} // Fallback image
                        alt={clinic.name}
                        className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
                    />
                </div>
                {/* Clinic Details */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800">{clinic.name}</h1>
                    <p className="text-lg text-gray-600"><strong>Address:</strong> {clinic.address}</p>
                    <p className="text-lg text-gray-600"><strong>Contact:</strong> {clinic.contactNumber}</p>
                    <p className="text-lg text-gray-600"><strong>Email:</strong> {clinic.email}</p>
                    <p className="text-lg text-gray-600"><strong>Website:</strong> {clinic.website || "N/A"}</p>
                </div>
            </div>
            <h2 className="text-xl font-semibold mt-6">Doctors at {clinic.name}</h2>
            <ul className="mt-4 space-y-4">
                {clinic.doctors && clinic.doctors.map(doctor => (
                    <li key={doctor.id} className="p-4 border rounded-lg shadow-md hover:bg-gray-100">
                        <Link 
                            to={`/doctors/${doctor.id}`} // Navigate to Doctor Profile
                            className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
                        >
                            {doctor.name} - {doctor.speciality}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-6 flex justify-end">
                <button 
                    onClick={() => window.history.back()} 
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

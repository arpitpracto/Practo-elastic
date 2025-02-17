// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function DoctorDetails() {
//     const { id } = useParams();
//     const [doctor, setDoctor] = useState(null);
    

//     useEffect(() => {
//         if (id) {
//             axios.get(`http://localhost:8080/doctors/${id}`)
//                 .then(response => setDoctor(response.data))
//                 .catch(error => console.error("Error fetching doctor details:", error));
//         }
//     }, [id])


//     if (!doctor) return <p>Loading...</p>;

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold">{doctor.name}</h1>
//             <p><strong>Speciality:</strong> {doctor.speciality}</p>
//             <p><strong>Experience:</strong> {doctor.experience} years</p>
//             <p><strong>Qualification:</strong> {doctor.qualification}</p>
//             <p><strong>Email:</strong> {doctor.email}</p>
//             <p><strong>Mobile:</strong> {doctor.mobileNumber}</p>
//             <p><strong>Clinic:</strong> {doctor.clinic?.name || "N/A"}</p>
//         </div>
//     );
// }
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorDetails() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/doctors/${id}`)
                .then(response => setDoctor(response.data))
                .catch(error => console.error("Error fetching doctor details:", error));
        }
    }, [id]);

    if (!doctor) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Doctor Profile Image */}
                <div className="flex-shrink-0">
                    <img 
                        src={doctor.imageUrl || "/images/doc.png"} // Fallback image
                        alt={doctor.name}
                        className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
                    />
                </div>
                {/* Doctor Details */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
                    <p className="text-lg text-gray-600"><strong>Speciality:</strong> {doctor.speciality}</p>
                    <p className="text-lg text-gray-600"><strong>Experience:</strong> {doctor.experience} years</p>
                    <p className="text-lg text-gray-600"><strong>Qualification:</strong> {doctor.qualification}</p>
                    <p className="text-lg text-gray-600"><strong>Email:</strong> {doctor.email}</p>
                    <p className="text-lg text-gray-600"><strong>Mobile:</strong> {doctor.mobileNumber}</p>
                    <p className="text-lg text-gray-600"><strong>Clinic:</strong> {doctor.clinic?.name || "N/A"}</p>
                </div>
            </div>
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

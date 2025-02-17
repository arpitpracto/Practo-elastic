// import { Link } from "react-router-dom";

// export default function DoctorCard({ doctor }) {
//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold">{doctor.name}</h2>
//       <p>Speciality: {doctor.speciality}</p>
//       <p>Experience: {doctor.experience} years</p>
//       <p>Contact: {doctor.mobileNumber}</p>
//       <Link
//         to={`/doctors/${doctor.id}`} // ✅ Navigate to Doctor Details Page
//         className="text-blue-500 mt-2 inline-block"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="flex items-center space-x-4 p-6 border rounded-lg shadow-lg bg-white w-full max-w-lg">
      {/* Doctor Image */}
      <img 
        src={doctor.imageUrl || "/images/doctor.png"} // Fallback image
        alt={doctor.name}
        className="w-32 h-32 object-cover rounded-full"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800">{doctor.name}</h2>
        <p className="text-gray-600">Speciality: <span className="font-semibold">{doctor.speciality}</span></p>
        <p className="text-gray-600">Experience: <span className="font-semibold">{doctor.experience} years</span></p>
        <p className="text-gray-600">Contact: <span className="font-semibold">{doctor.mobileNumber}</span></p>
      </div>

      <div className="flex justify-end items-center">
        <Link
          to={`/doctors/${doctor.id}`} // Navigate to Doctor Details Page
          className="text-blue-500 font-medium hover:text-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

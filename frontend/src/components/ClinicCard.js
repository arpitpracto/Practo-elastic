// import { Link } from "react-router-dom";

// export default function ClinicCard({ clinic }) {
//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold">{clinic.name}</h2>
//       <p>{clinic.address}</p>
//       <p>{clinic.contactNumber}</p>
//       <p>{clinic.email}</p>
//       <Link
//         to={`/clinics/${clinic.id}`} // ✅ Navigate to Clinic Details Page
//         className="text-blue-500 mt-2 inline-block"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function ClinicCard({ clinic }) {
  return (
    <div className="flex items-center space-x-4 p-6 border rounded-lg shadow-lg bg-white w-full max-w-lg">
      {/* Clinic Image */}
      <img 
        src={clinic.imageUrl || "/images/hospitla.png"} // Fallback image
        alt={clinic.name}
        className="w-32 h-32 object-cover rounded-full"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800">{clinic.name}</h2>
        <p className="text-gray-600">Address: <span className="font-semibold">{clinic.address}</span></p>
        <p className="text-gray-600">Contact: <span className="font-semibold">{clinic.contactNumber}</span></p>
        <p className="text-gray-600">Email: <span className="font-semibold">{clinic.email}</span></p>
      </div>

      <div className="flex justify-end items-center">
        <Link
          to={`/clinics/${clinic.id}`} // Navigate to Clinic Details Page
          className="text-blue-500 font-medium hover:text-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../utils/api"; // ✅ Ensure correct API path

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState({ doctors: [], specialities: [], clinics: [] });
//   const navigate = useNavigate(); // ✅ React Router navigation

//   useEffect(() => {
//     if (query.length > 1) {
//       fetchResults();
//     } else {
//       setResults({ doctors: [], specialities: [], clinics: [] });
//     }
//   }, [query]);

//   const fetchResults = async () => {
//     try {
//       const res = await api.get(`/search?query=${query}`);
//       setResults(res.data);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   return (
//     // <div className="relative w-full max-w-3xl mx-auto mt-6  border border-gray-300">
//     <div
//     //   className="relative w-full h-96 bg-cover bg-center"
//     //   style={{ backgroundImage: 'url("/images/homepage.svg")' }} // Replace with your image URL
//     // >
//     className="relative w-full h-[500px]">
//     {/* Background Image */}
//     <img 
//       src="/images/homepage.svg" 
//       alt="Background" 
//       className="absolute inset-0 w-full h-full object-cover"
//     />
  
//       {/* <div className="absolute inset-0 bg-black opacity-50"></div> Optional: Semi-transparent overlay */}
//       <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold">
//     Your home for health
//   </h1>
//       <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white">
//         <h1 className="text-2xl font-bold mb-4">Find And Book</h1>
//       <input
//         type="text"
//         placeholder="Search for doctors, specialities, clinics..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-full max-w-xl p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
//       />
      
//       {/* Search Results */}
//       {query && (
//         <div className="absolute w-full bg-white shadow-md rounded-md mt-2 p-3">
//           {/* Doctors */}
//           {results.doctors.length > 0 && (
//             <div>
//               <h3 className="font-semibold text-blue-600">Doctors</h3>
//               {results.doctors.map((doctor) => (
//                 <div
//                   key={doctor.id}
//                   className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                   onClick={() => navigate(`/doctors/${doctor.id}`)} // ✅ Navigate to Doctor Profile
//                 >
//                   {doctor.name} - {doctor.speciality}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Specialities */}
//           {results.specialities.length > 0 && (
//             <div className="mt-3">
//               <h3 className="font-semibold text-green-600">Specialities</h3>
//               {[...new Set(results.specialities.map((s) => s.speciality))].map((speciality, index) => (
//                 <div
//                   key={index}
//                   className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                   onClick={() => navigate(`/specialty/${speciality}`)} // ✅ Navigate to Specialty Search Page
//                 >
//                   {speciality}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Clinics */}
//           {results.clinics.length > 0 && (
//             <div className="mt-3">
//               <h3 className="font-semibold text-purple-600">Clinics</h3>
//               {results.clinics.map((clinic) => (
//                 <div
//                   key={clinic.id}
//                   className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                   onClick={() => navigate(`/clinics/${clinic.id}`)} // ✅ Navigate to Clinic Profile
//                 >
//                   {clinic.name}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* No Results */}
//           {results.doctors.length === 0 &&
//             results.specialities.length === 0 &&
//             results.clinics.length === 0 && (
//               <p className="text-gray-500 text-center mt-2">No results found.</p>
//           )}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api"; // ✅ Ensure correct API path

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ doctors: [], specialities: [], clinics: [] });
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 1) {
      fetchResults();
    } else {
      setResults({ doctors: [], specialities: [], clinics: [] });
    }
  }, [query]);

  const fetchResults = async () => {
    try {
      const res = await api.get(`/search?query=${query}`);
      setResults(res.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img 
        src="/images/homepage.svg" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold">
        Your home for health
      </h1>

      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white">
        <h1 className="text-2xl font-bold mb-4">Find And Book</h1>

        {/* Search Bar Container */}
        <div className="relative w-full max-w-xl ">
          <input
            type="text"
            placeholder="Search for doctors, specialities, clinics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 border rounded-md shadow-sm text-black focus:outline-none focus:ring focus:ring-blue-400"
          />

          {/* Search Results (Dropdown) */}
          {query && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
              {/* Doctors */}
              {results.doctors.length > 0 && (
                <div>
                  <h3 className="font-semibold text-blue-600 p-2">Doctors</h3>
                  {results.doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className="p-2 border-b cursor-pointer hover:bg-gray-100 text-black"
                      onClick={() => navigate(`/doctors/${doctor.id}`)}
                    >
                      {doctor.name} - {doctor.speciality}
                    </div>
                  ))}
                </div>
              )}

              {/* Specialities */}
              {results.specialities.length > 0 && (
                <div>
                  <h3 className="font-semibold text-green-600 p-2">Specialities</h3>
                  {[...new Set(results.specialities.map((s) => s.speciality))].map((speciality, index) => (
                    <div
                      key={index}
                      className="p-2 border-b cursor-pointer hover:bg-gray-100 text-black"
                      onClick={() => navigate(`/specialty/${speciality}`)}
                    >
                      {speciality}
                    </div>
                  ))}
                </div>
              )}

              {/* Clinics */}
              {results.clinics.length > 0 && (
                <div>
                  <h3 className="font-semibold text-purple-600 p-2">Clinics</h3>
                  {results.clinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      className="p-2 border-b cursor-pointer hover:bg-gray-100 text-black"
                      onClick={() => navigate(`/clinics/${clinic.id}`)}
                    >
                      {clinic.name}
                    </div>
                  ))}
                </div>
              )}

              {/* No Results */}
              {results.doctors.length === 0 &&
                results.specialities.length === 0 &&
                results.clinics.length === 0 && (
                  <p className="text-gray-500 text-center p-2">No results found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

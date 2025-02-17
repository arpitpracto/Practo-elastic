// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [role, setRole] = useState(""); // Store selected role (doctor/clinic)
//   const [doctorData, setDoctorData] = useState({
//     name: "",
//     speciality: "",
//     registrationNumber: "",
//     mobileNumber: "",
//     email: "",
//     experience: "",
//     qualification: "",
//     clinicId: "",
//   });
//   const [clinicData, setClinicData] = useState({
//     name: "",
//     address: "",
//     contactNumber: "",
//     email: "",
//     website: "",
//   });
//   const [clinics, setClinics] = useState([]);

//   // Fetch clinics when role is doctor
//   useEffect(() => {
//     if (role === "doctor") {
//       fetch("http://localhost:8080/clinics")
//         .then((res) => res.json())
//         .then((data) => setClinics(data))
//         .catch((err) => console.error("Error fetching clinics:", err));
//     }
//   }, [role]);

//   const handleDoctorSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:8080/doctors/${doctorData.clinicId}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: doctorData.name,
//         speciality: doctorData.speciality,
//         registrationNumber: doctorData.registrationNumber,
//         mobileNumber: doctorData.mobileNumber,
//         email: doctorData.email,
//         experience: doctorData.experience,
//         qualification: doctorData.qualification,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => alert("Doctor Registered!"))
//       .catch((err) => console.error("Error:", err));
//   };

//   const handleClinicSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/clinics", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: clinicData.name,
//         address: clinicData.address,
//         contactNumber: clinicData.contactNumber,
//         email: clinicData.email,
//         website: clinicData.website,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => alert("Clinic Registered!"))
//       .catch((err) => console.error("Error:", err));
//   };

//   return (
//     <div className="App">
//       <div className="flex justify-center gap-4 mt-4">
//         <button onClick={() => setRole("doctor")} className="px-4 py-2 bg-blue-500 text-white rounded-md">
//           Register as Doctor
//         </button>
//         <button onClick={() => setRole("clinic")} className="px-4 py-2 bg-green-500 text-white rounded-md">
//           Register as Clinic
//         </button>
//       </div>

//       {role === "doctor" && (
//         <form onSubmit={handleDoctorSubmit} className="mt-6 max-w-lg mx-auto">
//           <h2 className="text-2xl mb-4">Doctor Registration</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={doctorData.name}
//             onChange={(e) => setDoctorData({ ...doctorData, name: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="text"
//             placeholder="Speciality"
//             value={doctorData.speciality}
//             onChange={(e) => setDoctorData({ ...doctorData, speciality: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="text"
//             placeholder="Registration Number"
//             value={doctorData.registrationNumber}
//             onChange={(e) => setDoctorData({ ...doctorData, registrationNumber: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             value={doctorData.mobileNumber}
//             onChange={(e) => setDoctorData({ ...doctorData, mobileNumber: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={doctorData.email}
//             onChange={(e) => setDoctorData({ ...doctorData, email: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="number"
//             placeholder="Experience"
//             value={doctorData.experience}
//             onChange={(e) => setDoctorData({ ...doctorData, experience: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="text"
//             placeholder="Qualification"
//             value={doctorData.qualification}
//             onChange={(e) => setDoctorData({ ...doctorData, qualification: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />

//           {/* Dropdown for Clinic Selection */}
//           <select
//             value={doctorData.clinicId}
//             onChange={(e) => setDoctorData({ ...doctorData, clinicId: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           >
//             <option value="">Select Clinic</option>
//             {clinics.map((clinic) => (
//               <option key={clinic.id} value={clinic.id}>
//                 {clinic.name}
//               </option>
//             ))}
//           </select>

//           <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
//             Register Doctor
//           </button>
//         </form>
//       )}

//       {role === "clinic" && (
//         <form onSubmit={handleClinicSubmit} className="mt-6 max-w-lg mx-auto">
//           <h2 className="text-2xl mb-4">Clinic Registration</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={clinicData.name}
//             onChange={(e) => setClinicData({ ...clinicData, name: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             value={clinicData.address}
//             onChange={(e) => setClinicData({ ...clinicData, address: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="text"
//             placeholder="Contact Number"
//             value={clinicData.contactNumber}
//             onChange={(e) => setClinicData({ ...clinicData, contactNumber: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={clinicData.email}
//             onChange={(e) => setClinicData({ ...clinicData, email: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <input
//             type="text"
//             placeholder="Website"
//             value={clinicData.website}
//             onChange={(e) => setClinicData({ ...clinicData, website: e.target.value })}
//             className="w-full p-2 mb-4 border"
//           />
//           <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">
//             Register Clinic
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [role, setRole] = useState(""); // Store selected role (doctor/clinic)
  const [doctorData, setDoctorData] = useState({
    name: "",
    speciality: "",
    registrationNumber: "",
    mobileNumber: "",
    email: "",
    experience: "",
    qualification: "",
    clinicId: "",
  });
  const [clinicData, setClinicData] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
    website: "",
  });
  const [clinics, setClinics] = useState([]);
  const navigate = useNavigate();

  // Fetch clinics when role is doctor
  useEffect(() => {
    if (role === "doctor") {
      fetch("http://localhost:8080/clinics")
        .then((res) => res.json())
        .then((data) => setClinics(data))
        .catch((err) => console.error("Error fetching clinics:", err));
    }
  }, [role]);

  const handleDoctorSubmit = (e) => {
    e.preventDefault();

    // Check if all doctor data fields are filled
    if (
      !doctorData.name ||
      !doctorData.speciality ||
      !doctorData.registrationNumber ||
      !doctorData.mobileNumber ||
      !doctorData.email ||
      !doctorData.experience ||
      !doctorData.qualification ||
      !doctorData.clinicId
    ) {
      alert("Please fill in all fields.");
      return;
    }

    fetch(`http://localhost:8080/doctors/${doctorData.clinicId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: doctorData.name,
        speciality: doctorData.speciality,
        registrationNumber: doctorData.registrationNumber,
        mobileNumber: doctorData.mobileNumber,
        email: doctorData.email,
        experience: doctorData.experience,
        qualification: doctorData.qualification,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Doctor Registered!");
        navigate("/"); // Redirect to home page after registration
      })
      .catch((err) => console.error("Error:", err));
  };

  const handleClinicSubmit = (e) => {
    e.preventDefault();

    // Check if all clinic data fields are filled
    if (
      !clinicData.name ||
      !clinicData.address ||
      !clinicData.contactNumber ||
      !clinicData.email ||
      !clinicData.website
    ) {
      alert("Please fill in all fields.");
      return;
    }

    fetch("http://localhost:8080/clinics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: clinicData.name,
        address: clinicData.address,
        contactNumber: clinicData.contactNumber,
        email: clinicData.email,
        website: clinicData.website,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Clinic Registered!");
        navigate("/"); // Redirect to home page after registration
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="App">
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={() => setRole("doctor")} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Register as Doctor
        </button>
        <button onClick={() => setRole("clinic")} className="px-4 py-2 bg-green-500 text-white rounded-md">
          Register as Clinic
        </button>
      </div>

      {role === "doctor" && (
        <form onSubmit={handleDoctorSubmit} className="mt-6 max-w-lg mx-auto">
          <h2 className="text-2xl mb-4">Doctor Registration</h2>
          <input
            type="text"
            placeholder="Name"
            value={doctorData.name}
            onChange={(e) => setDoctorData({ ...doctorData, name: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="text"
            placeholder="Speciality"
            value={doctorData.speciality}
            onChange={(e) => setDoctorData({ ...doctorData, speciality: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="text"
            placeholder="Registration Number"
            value={doctorData.registrationNumber}
            onChange={(e) => setDoctorData({ ...doctorData, registrationNumber: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={doctorData.mobileNumber}
            onChange={(e) => setDoctorData({ ...doctorData, mobileNumber: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={doctorData.email}
            onChange={(e) => setDoctorData({ ...doctorData, email: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="number"
            placeholder="Experience"
            value={doctorData.experience}
            onChange={(e) => setDoctorData({ ...doctorData, experience: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="text"
            placeholder="Qualification"
            value={doctorData.qualification}
            onChange={(e) => setDoctorData({ ...doctorData, qualification: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />

          {/* Dropdown for Clinic Selection */}
          <select
            value={doctorData.clinicId}
            onChange={(e) => setDoctorData({ ...doctorData, clinicId: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          >
            <option value="">Select Clinic</option>
            {clinics.map((clinic) => (
              <option key={clinic.id} value={clinic.id}>
                {clinic.name}
              </option>
            ))}
          </select>

          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
            Register Doctor
          </button>
        </form>
      )}

      {role === "clinic" && (
        <form onSubmit={handleClinicSubmit} className="mt-6 max-w-lg mx-auto">
          <h2 className="text-2xl mb-4">Clinic Registration</h2>
          <input
            type="text"
            placeholder="Name"
            value={clinicData.name}
            onChange={(e) => setClinicData({ ...clinicData, name: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={clinicData.address}
            onChange={(e) => setClinicData({ ...clinicData, address: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={clinicData.contactNumber}
            onChange={(e) => setClinicData({ ...clinicData, contactNumber: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={clinicData.email}
            onChange={(e) => setClinicData({ ...clinicData, email: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <input
            type="text"
            placeholder="Website"
            value={clinicData.website}
            onChange={(e) => setClinicData({ ...clinicData, website: e.target.value })}
            className="w-full p-2 mb-4 border"
            required
          />
          <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">
            Register Clinic
          </button>
        </form>
      )}
    <div className="flex justify-center mt-4">
      <button f
        onClick={() => navigate("/")}
        className="mt-4 p-2 bg-gray-500 text-white rounded-md"
      >
        Go Back
      </button>
      </div>
    </div>
  );
}

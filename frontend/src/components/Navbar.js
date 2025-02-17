// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-500 p-4 text-white">
//       <div className="container mx-auto flex justify-between">
//         <Link to="/" className="text-xl font-bold">
//           PRACTO
//         </Link>
//         <div>
//           <Link to="/clinics" className="px-4">
//             Clinics
//           </Link>
//           <Link to="/doctors" className="px-4">
//             Doctors
//           </Link>
//           <Link to="/search" className="px-4">
//             Search
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-white p-1 text-black shadow-md">
//       <div className="container mx-auto flex items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src="/images/Practo_New_Logo.png" alt="Practo" className="h-24 w-auto mr-4" />
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex gap-6 text-lg font-medium">
//           <Link to="/clinics">Clinics</Link>
//           <Link to="/doctors">Doctors</Link>
//           <Link to="/search">Search</Link>
//           <Link to="/RegistrationPage">Register</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white p-4 text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/Practo_New_Logo.png" alt="Practo" className="h-24 w-auto mr-4" />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link
            to="/clinics"
            className="hover:border-b-4 hover:border-blue-600 transition-all pb-2"
          >
            Find Clinics
          </Link>
          <Link
            to="/doctors"
            className="hover:border-b-4 hover:border-blue-600 transition-all pb-2"
          >
            Find Doctors
          </Link>
          {/* <Link
            to="/search"
            className="hover:border-b-4 hover:border-blue-600 transition-all pb-2"
          >
            Search
          </Link> */}
        </div>

        {/* Register link aligned to the right */}
        <div className="flex items-center ml-auto">
          <Link
            to="/RegistrationPage"
            className="hover:border-b-4 hover:border-blue-600 transition-all pb-2 font-bold"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </nav>
  );
}

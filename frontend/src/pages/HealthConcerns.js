import { useNavigate } from "react-router-dom";

export default function HealthConcerns() {
  const navigate = useNavigate();

  // Click handler for navigating to doctor specialty search
  const handleConsultClick = (speciality) => {
    navigate(`/specialty/${speciality}`); // Navigate to the page for the selected specialty
  };

  return (
    <div className="p-6">
      {/* Header Text */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Consult top doctors online for any health concern</h2>
        <p className="text-lg text-gray-600">Private online consultations with verified doctors in all specialties</p>
      </div>

      {/* Icons and Text */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Icon 1 */}
        <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => handleConsultClick("Gynecologist")}>
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/images/irregular-painful+period.png" alt="Gynecologist" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="mt-2 text-black font-semibold">Period doubts or pregnancy</p>
          <p className="text-blue-600 font-semibold">CONSULT NOW</p>
        </div>

        {/* Icon 2 */}
        <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => handleConsultClick("Dermatologist")}>
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/images/Acne.png" alt="Dermatologist" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="mt-2 text-black font-semibold">Acne, pimple or skin issues</p>
          <p className="text-blue-600 font-semibold">CONSULT NOW</p>
        </div>

        {/* Icon 3 */}
        <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => handleConsultClick("General Physician")}>
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/images/coughing.png" alt="General Physician" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="mt-2 text-black font-semibold">Cold, cough or fever</p>
          <p className="text-blue-600 font-semibold">CONSULT NOW</p>
        </div>

        {/* Icon 4 */}
        <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => handleConsultClick("Psychiatrist")}>
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/images/12-mental-wellness.png" alt="Psychiatrist" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="mt-2 text-black font-semibold">Depression or anxiety</p>
          <p className="text-blue-600 font-semibold">CONSULT NOW</p>
        </div>

        {/* Icon 5 */}
        <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => handleConsultClick("Dentist")}>
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/images/2818366.png" alt="Dentist" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="mt-2 text-black font-semibold">Oral health or tooth pain</p>
          <p className="text-blue-600 font-semibold">CONSULT NOW</p>
        </div>

        {/* Icon 6 */}
        <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => handleConsultClick("Pediatrician")}>
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/images/top-speciality-pediatric.svg" alt="Pediatrician" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="mt-2 text-black font-semibold">Child not feeling well</p>
          <p className="text-blue-600 font-semibold">CONSULT NOW</p>
        </div>
      </div>
    </div>
  );
}

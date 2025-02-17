import Navbar from "../components/Navbar";
import DynamicSearch from "./DynamicSearch";
import HealthConcerns from "./HealthConcerns";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DynamicSearch />
      <HealthConcerns />
    </div>
  );
}
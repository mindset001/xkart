import Image from "next/image";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <main className="opacity-8">
    <Navbar/>
    <Landing/>
    <Footer/>
   </main>
  );
}

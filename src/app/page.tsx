import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "./home.scss";
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

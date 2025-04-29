
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darkest text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

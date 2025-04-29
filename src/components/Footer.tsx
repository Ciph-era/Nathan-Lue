
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-darkest py-12 border-t border-cyber-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 text-xl font-bold mb-6">
            <Shield className="h-6 w-6 text-cyber-blue" />
            <span className="cyber-text-glow">SecurePortfolio</span>
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-foreground/60">
            <a href="#home" className="hover:text-cyber-blue transition-colors">Home</a>
            <a href="#projects" className="hover:text-cyber-blue transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-cyber-blue transition-colors">Certifications</a>
            <a href="#experience" className="hover:text-cyber-blue transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyber-blue transition-colors">Contact</a>
          </div>
          
          <div className="mb-6 text-xs text-center text-foreground/40 max-w-md">
            <p>
              This portfolio showcases my work and skills in cybersecurity engineering. 
              All projects and certifications listed represent my personal accomplishments 
              and professional growth in the field.
            </p>
          </div>
          
          <div className="text-center text-foreground/60 text-sm">
            <p>© {currentYear} Your Name | Cybersecurity Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

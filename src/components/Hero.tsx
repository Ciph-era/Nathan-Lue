
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Code, Terminal } from "lucide-react";

const Hero = () => {
  const matrixChars = Array(15).fill(0).map((_, i) => ({
    char: String.fromCharCode(33 + Math.floor(Math.random() * 93)),
    style: {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3
    }
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden cyber-grid-bg">
      {/* Matrix falling characters effect */}
      {matrixChars.map((item, index) => (
        <div 
          key={index}
          className="matrix-effect"
          style={{
            left: item.style.left,
            animationDelay: item.style.animationDelay,
            opacity: item.style.opacity
          }}
        >
          {item.char}
        </div>
      ))}
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-cyber-blue/10 text-cyber-blue px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4" />
            <span className="text-sm">Cybersecurity Engineer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Securing the digital</span>
            <span className="cyber-text-glow">frontier, one line of code</span>
            <span className="block">at a time.</span>
          </h1>
          
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
            Cybersecurity engineering student passionate about ethical hacking, network security, 
            and digital forensics. Building secure solutions for tomorrow's challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
              Download CV
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="cyber-card p-4">
              <div className="mb-4 bg-cyber-blue/20 rounded-full w-10 h-10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Focused</h3>
              <p className="text-sm text-foreground/70">Expertise in Cloud Security fundamentals and secure infrastructure management, including hands-on experience with VMware, Docker, Kali Linux, Wireshark, firewalls, VPNs, and Identity & Access Management (IAM). </p>
            </div>
            
            <div className="cyber-card p-4">
              <div className="mb-4 bg-cyber-blue/20 rounded-full w-10 h-10 flex items-center justify-center">
                <Code className="h-5 w-5 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
              <p className="text-sm text-foreground/70">Proficient in Python programming, SQL database querying, Linux/CLI/SSH administration, as well as front-end web development (HTML, JavaScript, CSS) and core networking concepts. </p>
            </div>
            
            <div className="cyber-card p-4">
              <div className="mb-4 bg-cyber-blue/20 rounded-full w-10 h-10 flex items-center justify-center">
                <Terminal className="h-5 w-5 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
              <p className="text-sm text-foreground/70"> Goal-oriented and highly adaptable, with proven teamwork, clear communication, strong analytical thinking, creative problem-solving abilities, and effective time management. ​</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-3/4 hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 cyber-glow bg-cyber-dark rounded-l-2xl opacity-70"></div>
          <div className="absolute inset-0 opacity-30">
            {/* Technical/code background pattern */}
            <pre className="text-[6px] text-cyber-blue/40 overflow-hidden h-full">
              {Array(50).fill(0).map((_, i) => (
                <div key={i} className="line">
                  {`function securityCheck(input) { 
  if(!validateInput(input)) { 
    return logThreat(input); 
  } 
  const sanitized = sanitizeInput(input); 
  return encryptData(sanitized);
}`}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  Globe, 
  Server, 
  Terminal, 
  Database,
  Code, 
  ExternalLink, 
  Folder 
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: keyof typeof icons;
  category: string[];
  technologies: string[];
  link: string;
  github?: string;
};

const icons = {
  Shield: Shield,
  Globe: Globe,
  Server: Server,
  Terminal: Terminal,
  Database: Database,
  Code: Code,
  Folder: Folder,
};

// Example project data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Network Intrusion Detection System",
    description: "Developed a real-time network monitoring tool that uses machine learning to detect unusual patterns and potential security breaches.",
    image: "/placeholder.svg",
    icon: "Shield",
    category: ["Security Tools", "Machine Learning"],
    technologies: ["Python", "TensorFlow", "Wireshark", "Docker"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Secure File Encryption App",
    description: "End-to-end encrypted file sharing application with zero-knowledge architecture and multi-factor authentication.",
    image: "/placeholder.svg",
    icon: "Folder",
    category: ["Encryption", "Applications"],
    technologies: ["JavaScript", "Node.js", "AES-256", "React"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Vulnerability Scanner",
    description: "Automated vulnerability assessment tool that scans web applications and networks for common security flaws.",
    image: "/placeholder.svg",
    icon: "Code",
    category: ["Security Tools", "Web Security"],
    technologies: ["Python", "OWASP", "Docker", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    title: "Secure IoT Gateway",
    description: "Developed a security layer for IoT devices that monitors and filters traffic to prevent unauthorized access.",
    image: "/placeholder.svg",
    icon: "Server",
    category: ["IoT", "Network Security"],
    technologies: ["C++", "MQTT", "Linux", "Embedded Systems"],
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", "Security Tools", "Web Security", "Encryption", "IoT", "Machine Learning", "Network Security", "Applications"];
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(filter));
  
  const IconComponent = ({ iconName }: { iconName: keyof typeof icons }) => {
    const Icon = icons[iconName];
    return <Icon className="h-5 w-5" />;
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-cyber-blue border-cyber-blue mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cybersecurity <span className="cyber-text-glow">Projects</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A collection of my work in security research, tool development, and security engineering
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={filter === category ? "default" : "outline"}
              className={filter === category 
                ? "bg-cyber-blue hover:bg-cyber-blue/90" 
                : "border-cyber-blue/30 text-foreground/70 hover:text-cyber-blue hover:border-cyber-blue/50"
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="cyber-card group">
              <div className="h-48 bg-cyber-darker relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-cyber-dark">
                  <div className="w-16 h-16 rounded-full bg-cyber-blue/10 flex items-center justify-center">
                    <IconComponent iconName={project.icon} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link} 
                    className="text-foreground/50 hover:text-cyber-blue transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded bg-cyber-blue/10 text-cyber-blue/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <div className="space-x-1">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="outline" className="border-cyber-blue/30 text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-foreground/50 hover:text-cyber-blue transition-colors"
                      aria-label="View source code"
                    >
                      <Code className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


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
  Folder,
  Key
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
  Key: Key
};

// Example project data
const projectsData: Project[] = [
  {
    id: 1,
    title: "MultiAI Consensus Chat Bot",
    description: "A Python-based command-line chatbot that sequentially queries and refines responses from multiple AI models (llama2-uncensored, llama3, gemma2) via the Ollama streaming API, featuring colorized terminal output.",
    image: "/multi-ai-chatbot.svg",
    icon: "Database",
    category: ["Chatbots", "AI Tools"],
    technologies: ["Python", "Ollama", "termcolor"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Diceware Password Generator",
    description: "Created a Diceware password generator in Python to produce secure passphrases using a dictionary of words mapped to dice rolls.",
    image: "/diceware-password-generator.svg",
    icon: "Shield",
    category: ["Security Tools", "Utilities"],
    technologies: ["Python"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Key Logger",
    description: "Developed a key logger in Python to capture keystrokes that could contain sensitive information.",
    image: "/key-logger.svg",
    icon: "Key",
    category: ["Security Tools", "Monitoring"],
    technologies: ["Python"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Buffer Overflow Vulnerability Lab",
    description: "Exploited a buffer overflow vulnerability to gain root access using shellcode; evaluated and bypassed system security measures, including StackGuard and address randomization.",
    image: "/buffer-overflow-vulnerability-lab.svg",
    icon: "Terminal",
    category: ["Security Tools", "Vulnerability Research"],
    technologies: ["C", "Assembly", "Shellcode"],
    link: "https://seedsecuritylabs.org/Labs_20.04/Software/Race_Condition/",
    github: "#"
  },
  {
    id: 5,
    title: "Race Condition Vulnerability Lab",
    description: "Exploited a race condition in a program to escalate privileges by manipulating file access timing.",
    image: "/race-condition-vulnerability-lab.svg",
    icon: "Terminal",
    category: ["Security Tools", "Vulnerability Research"],
    technologies: ["C", "Exploit Development", "Linux"],
    link: "https://seedsecuritylabs.org/Labs_20.04/Software/Race_Condition/",
    github: "#"
  },
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

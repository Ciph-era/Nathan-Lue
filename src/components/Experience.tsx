
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Calendar, 
  Terminal,
  Server,
  Database,
  Shield
} from "lucide-react";

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  icon: keyof typeof icons;
};

const icons = {
  Briefcase: Briefcase,
  Terminal: Terminal,
  Server: Server,
  Database: Database,
  Shield: Shield,
};

// Example experience data
const experienceData: Experience[] = [
  {
    id: 1,
    title: "Security Operations Intern",
    company: "TechDefend Solutions",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Present",
    description: [
      "Monitored security alerts and conducted initial triage of security incidents",
      "Assisted in vulnerability scanning and analysis using industry-standard tools",
      "Developed automation scripts to streamline security monitoring workflows",
      "Contributed to threat intelligence analysis and reporting"
    ],
    icon: "Shield"
  },
  {
    id: 2,
    title: "IT Security Assistant",
    company: "University IT Department",
    location: "On-campus",
    startDate: "Sep 2022",
    endDate: "May 2023",
    description: [
      "Assisted in implementing and maintaining security controls across university systems",
      "Conducted security awareness training for staff and students",
      "Participated in security audits and helped address identified vulnerabilities",
      "Supported incident response procedures for common security issues"
    ],
    icon: "Terminal"
  },
  {
    id: 3,
    title: "Network Security Volunteer",
    company: "CyberSafe Community Project",
    location: "Virtual",
    startDate: "Jan 2022",
    endDate: "Aug 2022",
    description: [
      "Provided technical support for implementing secure network configurations",
      "Developed educational materials on network security best practices",
      "Assisted in organizing security awareness workshops for community members",
      "Contributed to open-source security tools and documentation"
    ],
    icon: "Server"
  }
];

const Experience = () => {
  const IconComponent = ({ iconName }: { iconName: keyof typeof icons }) => {
    const Icon = icons[iconName];
    return <Icon className="h-5 w-5" />;
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-cyber-blue border-cyber-blue mb-4">
            Career
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="cyber-text-glow">Experience</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My journey in cybersecurity and the professional experiences that have shaped my skills
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((job, index) => (
            <div key={job.id} className="group relative">
              {/* Timeline line */}
              {index < experienceData.length - 1 && (
                <div className="absolute left-4 top-16 bottom-0 w-px bg-cyber-blue/20 group-hover:bg-cyber-blue/40 transition-colors" />
              )}
              
              <div className="mb-12 ml-16 relative">
                {/* Timeline dot */}
                <div className="absolute left-[-2rem] top-1.5 w-8 h-8 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center group-hover:border-cyber-blue group-hover:bg-cyber-blue/20 transition-colors">
                  <IconComponent iconName={job.icon} />
                </div>
                
                <div className="cyber-card p-6 group-hover:cyber-glow transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex items-center text-foreground/60 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {job.startDate} - {job.endDate}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-cyber-blue flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-foreground/60">{job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-cyber-blue mr-2">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground/70 italic">
            Currently seeking internships and entry-level opportunities in cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;


import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Calendar, 
  Terminal,
  Server,
  Database,
  Shield,
  Bug,
  Bot,
  Code,
  Book
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
  Bug: Bug,
  Bot: Bot,
  Code: Code,
  Book: Book
};

const experienceData: Experience[] = [
  {
    id: 1,
    title: "PatriotCTF 2024",
    company: "PatriotCTF",
    location: "Online",
    startDate: "Sep 2024",
    endDate: "Sep 2024",
    description: [
      "Analyzed network traffic with Wireshark to uncover hidden data",
      "Examined Windows Event Viewer logs for security insights",
      "Used Steghide to extract hidden data from images"
    ],
    icon: "Bug"
  },
  {
    id: 2,
    title: "Hardware Hackathon GMU",
    company: "George Mason University",
    location: "Fairfax, VA",
    startDate: "Sep 2024",
    endDate: "Sep 2024",
    description: [
      "Designed and built \"CareCart,\" an autonomous line-following robot for hospitals leveraging Arduino microcontrollers and C programming",
      "Assisted nurses by delivering medication and supplies, reducing repetitive tasks and improving patient care"
    ],
    icon: "Bot"
  },
  {
    id: 3,
    title: "Crimson Pheonix SPY Program",
    company: "Crimson Pheonix SPY Program",
    location: "Herndon, VA",
    startDate: "Apr 2024",
    endDate: "Aug 2024",
    description: [
      "Enhanced web development skills in HTML, CSS, Java, and jQuery",
      "Created dynamic and responsive websites"
    ],
    icon: "Code"
  },
  {
    id: 4,
    title: "Mathematics Tutor",
    company: "George Mason University",
    location: "Fairfax, VA",
    startDate: "Aug 2024",
    endDate: "Present",
    description: [
      "Collaborated with college students of varying skill levels to assure academic success",
      "Simplified complex mathematical concepts to enhance student understanding"
    ],
    icon: "Book"
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
            {/* Currently seeking internships and entry-level opportunities in cybersecurity. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

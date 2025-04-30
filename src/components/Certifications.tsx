
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, BadgeCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Certification = {
  id: number;
  name: string;
  organization: string;
  date: string;
  expiresAt?: string;
  credentialId?: string;
  category: string;
  logo?: string;
};

const certificationsData: Certification[] = [
  {
    id: 1,
    name: "CompTIA Security+",
    organization: "CompTIA",
    date: "July 3 2024",
    expiresAt: "July 3 2027",
    credentialId: "COMP001022327998",
    category: "General Security"
  },
  {
    id: 2,
    name: "Certified Cloud Security Knowledge (CCSK)",
    organization: "Cloud Security Alliance",
    date: "July 31 2023",
    credentialId: "R6AY7KUB653Y",
    category: "General Security"
  },
];

const Certifications = () => {
  const categories = [...new Set(certificationsData.map(cert => cert.category))];
  
  return (
    <section id="certifications" className="py-24 bg-cyber-darker relative">
      <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-cyber-blue border-cyber-blue mb-4">
            Credentials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="cyber-text-glow">Certifications</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Industry-recognized credentials that validate my expertise and knowledge in cybersecurity
          </p>
        </div>
        
        <Tabs defaultValue={categories[0]} className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-cyber-dark border border-cyber-blue/20">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-cyber-blue data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData
                  .filter(cert => cert.category === category)
                  .map(cert => (
                    <div key={cert.id} className="cyber-card p-6 flex flex-col">
                      <div className="mb-4">
                        <BadgeCheck className="h-8 w-8 text-cyber-blue" />
                      </div>
                      <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                      <p className="text-sm text-foreground/70 mb-3">{cert.organization}</p>
                      
                      <div className="flex items-center text-xs text-foreground/50 mb-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Issued {cert.date}</span>
                        {cert.expiresAt && (
                          <span className="ml-2">• Expires {cert.expiresAt}</span>
                        )}
                      </div>
                      
                      {cert.credentialId && (
                        <div className="mt-auto pt-4">
                          <p className="text-xs text-foreground/50">
                            Credential ID: <span className="font-mono">{cert.credentialId}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-cyber-blue/10 text-cyber-blue px-6 py-3 rounded-lg mb-3">
            <Award className="h-5 w-5" />
            <span>Continuous Learning</span>
          </div>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            I'm committed to staying current with the latest security trends and technologies through ongoing education and certification.
          </p>
          <Button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

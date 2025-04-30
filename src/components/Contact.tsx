
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-cyber-darker relative">
      <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-cyber-blue border-cyber-blue mb-4">
            Get in Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's <span className="cyber-text-glow">Connect</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Interested in working together? Have questions about my projects or experience?
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="cyber-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-cyber-blue" />
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                  </div>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nathan Luevano"
                    required
                    className="bg-cyber-dark border-cyber-blue/20 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-cyber-blue" />
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="bg-cyber-dark border-cyber-blue/20 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-cyber-blue" />
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                </div>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="bg-cyber-dark border-cyber-blue/20 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-cyber-blue" />
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                </div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="min-h-32 bg-cyber-dark border-cyber-blue/20 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                />
              </div>
              
              <div className="text-right">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-cyber-blue hover:bg-cyber-blue/90 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-cyber-blue mb-2">Other ways to reach me:</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:nathan.e.luevano@gmail.com" className="text-foreground/70 hover:text-cyber-blue transition-colors">
                nathan.e.luevano@gmail.com
              </a>
              <span className="text-foreground/30">|</span>
              <a href="https://www.linkedin.com/in/nathan-luevano-a39226279/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-cyber-blue transition-colors">
                LinkedIn
              </a>
              <span className="text-foreground/30">|</span>
              <a href="https://github.com/Nathan-Luevano" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-cyber-blue transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

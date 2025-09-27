import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-new.jpg";
interface HeroProps {
  onSectionChange: (section: string) => void;
}
const Hero = ({
  onSectionChange
}: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce [animation-delay:0.5s]"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-bounce [animation-delay:1.5s]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:2.5s]"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/15 rounded-full animate-bounce [animation-delay:3s]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white/90 font-medium">Available for opportunities</span>
            </div>
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent animate-pulse">
                  Sohail
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 font-light">
                A web developer who loves integrating new technologies and playing basketball
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating modern, responsive web applications with clean code and beautiful user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button onClick={() => scrollToSection("portfolio")} size="lg" className="bg-white text-primary hover:shadow-glow hover:scale-105 transition-all duration-300 group backdrop-blur-sm">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg" className="border-white/30 hover:bg-white/10 hover:scale-105 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-slate-950">
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300" asChild>
                <a href="mailto:sohail@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300" asChild>
                <a href="https://linkedin.com/in/sohailaftab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300" asChild>
                <a href="https://github.com/sohailaftab" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in [animation-delay:0.3s]">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-50 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-accent p-1 animate-spin [animation-duration:8s]">
                <div className="w-full h-full rounded-full bg-gradient-hero"></div>
              </div>
              
              {/* Image container with glass effect */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-white/30 shadow-elegant backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <img src={profileImage} alt="Sohail Aftab - Web Developer" className="w-full h-full object-cover" />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Experience Badge with glass morphism */}
              <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-elegant hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm text-white/80 font-medium">Years Experience</div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-2 -left-2 bg-accent/90 backdrop-blur-sm rounded-full px-3 py-1 animate-bounce [animation-delay:1s]">
                <span className="text-xs font-semibold text-white">React.js</span>
              </div>
              <div className="absolute top-1/2 -left-6 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1 animate-bounce [animation-delay:2s]">
                <span className="text-xs font-semibold text-white">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
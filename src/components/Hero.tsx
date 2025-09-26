import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/sohail-profile.jpg";

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero = ({ onSectionChange }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Sohail Aftab
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-6">
                A web developer who loves integrating new technologies and playing basketball
              </h2>
              <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                Passionate about creating modern, responsive web applications with clean code and beautiful user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="bg-white text-primary hover:shadow-glow transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <a href="mailto:sohail@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/sohailaftab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/sohailaftab" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-50 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-elegant">
                <img
                  src={profileImage}
                  alt="Sohail Aftab - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-card">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { GraduationCap, Code, Zap, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "HTML5",
    "CSS3",
    "Git/GitHub",
    "UI/UX Design",
    "Responsive Design",
    "Debugging",
    "Communication",
    "Client Relations"
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Graduated in 2025 from HITS, Chennai with strong foundation in computer science and web technologies."
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in modern web development with focus on React.js, responsive design, and clean code practices."
    },
    {
      icon: Zap,
      title: "Personal Interests", 
      description: "Passionate about basketball and staying active, bringing the same energy and teamwork to development projects."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always eager to learn and integrate new technologies to create better user experiences and efficient solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate web developer with a fresh perspective and strong technical foundation, 
            ready to bring innovative solutions to your projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a recent graduate from HITS, Chennai, I've developed a strong foundation in web development 
                technologies and a passion for creating exceptional user experiences. My journey in tech began 
                with curiosity about how websites work and evolved into a deep appreciation for clean code and 
                beautiful design.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and am always excited to 
                integrate new tools and frameworks into my workflow. When I'm not coding, you'll find me on 
                the basketball court, where I've learned valuable lessons about teamwork, strategy, and 
                perseverance that I apply to every project.
              </p>
              <p>
                My approach to development focuses on writing maintainable code, understanding client needs, 
                and delivering solutions that not only work perfectly but also provide an exceptional user experience.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-medium 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
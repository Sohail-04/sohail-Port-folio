import { ExternalLink, Github, Monitor, Smartphone, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js, showcasing clean UI/UX design principles and advanced CSS animations.",
      technologies: ["React.js", "HTML5", "CSS3", "Responsive Design"],
      icon: Monitor,
      category: "Web Development",
      features: [
        "Modern responsive design",
        "Smooth animations and transitions",
        "Optimized performance",
        "Clean, maintainable code"
      ]
    },
    {
      id: 2,
      title: "Lead Management Dashboard",
      description: "React-based dashboard for lead visualization and management, featuring B2B/B2C segmentation and comprehensive data management tools.",
      technologies: ["React.js", "Data Visualization", "Dashboard UI", "Lead Management"],
      icon: BarChart3,
      category: "Dashboard",
      features: [
        "Real-time lead tracking",
        "B2B/B2C segmentation",
        "Interactive data visualization",
        "Export and reporting tools"
      ]
    },
    {
      id: 3,
      title: "Responsive Web App",
      description: "A fully responsive React web application demonstrating advanced interactivity, state management, and modern development practices.",
      technologies: ["React.js", "State Management", "Mobile-First", "PWA"],
      icon: Smartphone,
      category: "Web Application",
      features: [
        "Mobile-first responsive design",
        "Advanced state management",
        "Offline functionality",
        "Cross-platform compatibility"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest projects and technical capabilities in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-medium bg-gradient-accent bg-clip-text text-transparent">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Showcase */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Development Approach</h3>
            <p className="text-lg opacity-90">
              Every project follows modern development practices and focuses on user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-75">Responsive Design</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">Clean</div>
              <div className="text-sm opacity-75">Maintainable Code</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">Modern</div>
              <div className="text-sm opacity-75">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
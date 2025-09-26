import { Code, Palette, Smartphone, Zap, Users, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern, responsive web applications using React.js, HTML5, CSS3, and JavaScript ES6+. Clean, maintainable code with focus on performance and scalability.",
      features: ["React.js Applications", "Responsive Design", "Performance Optimization", "Clean Code Architecture"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, user-friendly interfaces with strong emphasis on user experience, accessibility, and modern design principles.",
      features: ["Modern UI Design", "User Experience Focus", "Design Systems", "Accessibility Standards"]
    },
    {
      icon: Smartphone,
      title: "Responsive Solutions",
      description: "Ensuring your website works perfectly across all devices - from mobile phones to desktop computers with seamless user experience.",
      features: ["Mobile-First Approach", "Cross-Browser Testing", "Touch-Friendly Interfaces", "Adaptive Layouts"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, SEO, and user engagement using best practices and modern development techniques.",
      features: ["Speed Optimization", "SEO Best Practices", "Code Splitting", "Lazy Loading"]
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description: "Working closely with clients to understand requirements, provide regular updates, and ensure project success from concept to deployment.",
      features: ["Clear Communication", "Regular Updates", "Requirement Analysis", "Post-Launch Support"]
    },
    {
      icon: Settings,
      title: "Debugging & Testing",
      description: "Thorough testing and debugging to ensure your application works flawlessly with comprehensive error handling and quality assurance.",
      features: ["Bug Identification", "Quality Assurance", "Cross-Platform Testing", "Error Handling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering professional web development solutions with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group hover:scale-105">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate to bring your vision to life with modern web technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-75">Professional Approach</div>
                <div className="font-semibold">Clear Communication</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-75">Modern Technologies</div>
                <div className="font-semibold">React.js & ES6+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-75">Quality Assurance</div>
                <div className="font-semibold">Thorough Testing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
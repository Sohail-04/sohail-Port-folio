import { Building, TrendingUp, Users, Globe, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      title: "Monthly Leads Managed",
      description: "Successfully managed and qualified inbound and outbound leads"
    },
    {
      icon: TrendingUp,
      number: "30%",
      title: "Conversion Improvement",
      description: "Improved lead conversion efficiency through strategic processes"
    },
    {
      icon: Globe,
      number: "5+",
      title: "International Markets",
      description: "Worked with clients across USA, Austria, Canada, Singapore"
    },
    {
      icon: Award,
      number: "High-Value",
      title: "Deal Closures",
      description: "Successfully closed multiple high-value client deals"
    }
  ];

  const responsibilities = [
    "Managed and qualified 500+ monthly inbound and outbound leads",
    "Specialized in B2B, B2C, and niche market lead solutions",
    "Improved conversion efficiency by 30% through strategic lead management",
    "Closed high-value deals with international clients",
    "Developed lead segmentation strategies for different market types",
    "Maintained detailed records and analytics for lead performance"
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world experience in lead management and client relations
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-elegant border-0 bg-gradient-primary text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Lead Manager Intern</CardTitle>
                  <p className="text-white/80 text-lg">Emailproleads</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Calendar className="h-4 w-4" />
                <span>Internship Experience</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-white/90 text-lg mb-6">
                Gained valuable hands-on experience in lead management, client relations, and business development 
                while working with international clients across multiple markets.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start text-sm text-white/80">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">Skills Developed:</h4>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="font-medium">Lead Qualification</div>
                      <div className="text-sm opacity-80">B2B/B2C segmentation and analysis</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="font-medium">Client Relations</div>
                      <div className="text-sm opacity-80">International client communication</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="font-medium">Data Management</div>
                      <div className="text-sm opacity-80">CRM systems and analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 text-center group hover:scale-105">
              <CardContent className="p-6">
                <div className="bg-gradient-primary p-4 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-background rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Professional Impact</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This internship experience has shaped my understanding of business processes, 
              client needs, and the importance of clear communication in project success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Process Improvement</h4>
              <p className="text-sm text-muted-foreground">
                Enhanced lead qualification processes resulting in better conversion rates
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-accent p-4 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Client Relations</h4>
              <p className="text-sm text-muted-foreground">
                Developed strong communication skills working with international clients
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-lg w-fit mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Global Perspective</h4>
              <p className="text-sm text-muted-foreground">
                Gained experience working across different markets and cultural contexts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
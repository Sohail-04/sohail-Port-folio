import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "New Contact Form Message",
        message: formData.message,
        to_name: "Sohail"
      };

      await emailjs.send(
        'service_klyb3sc', // Service ID
        'template_7hnekpn', // Template ID
        templateParams,
        '8_77-yc7Em8AxvNcT' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sohailaftab198@outlook.com",
      link: "mailto:sohailaftab198@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9241603132",
      link: "tel:+919241603132"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ranchi, Jharkhand, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      url: "https://github.com/sohailaftab",
      description: "Check out my code repositories"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: "https://linkedin.com/in/sohailaftab",
      description: "Connect with me professionally"
    },
    {
      icon: Mail,
      title: "Email",
      url: "mailto:sohailaftab198@outlook.com",
      description: "Send me a direct message"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <p className="text-muted-foreground">
                I'd love to hear about your project. Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="bg-gradient-primary p-2 rounded-lg group-hover:shadow-glow transition-all duration-300">
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{social.title}</div>
                      <div className="text-sm text-muted-foreground">{social.description}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Download CV */}
            <Card className="shadow-card bg-gradient-accent text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Download My Resume</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get a detailed overview of my skills and experience
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-accent hover:bg-white/90"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-lg opacity-90 mb-6">
              Whether you need a new website, want to improve an existing one, or have a custom project in mind, 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold">Quick Response</div>
                <div className="text-sm opacity-75">Within 24 hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold">Free Consultation</div>
                <div className="text-sm opacity-75">No commitment required</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold">Professional Service</div>
                <div className="text-sm opacity-75">Quality guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
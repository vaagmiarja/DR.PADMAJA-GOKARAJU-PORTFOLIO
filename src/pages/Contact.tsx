import { useState } from "react";
import { Mail, Linkedin, Building2, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-steel-dark to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Connect for consultancy, collaboration, or technical guidance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    For structural engineering consultancy, R&D advisory, expert lectures, 
                    or technical guidance, please reach out using the contact details below 
                    or fill out the contact form.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Professional Title */}
                  <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border shadow-lg">
                    <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Position</h3>
                      <p className="text-muted-foreground text-sm">
                        Vice President – Engineering & R&D
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Kirby Building Systems & Structures India Pvt. Ltd.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border shadow-lg">
                    <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:padmaja@kirbyindia.com"
                        className="text-accent hover:underline"
                      >
                        padmaja@kirbyindia.com
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border shadow-lg">
                    <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">LinkedIn</h3>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Services Offered */}
                <div className="bg-gradient-to-br from-steel-dark to-navy text-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Services Offered</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Advanced Structural Engineering Consultancy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>PEB Design & Optimization Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>R&D Advisory for Steel Systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Expert Lectures / Keynote Sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Design Review & Technical Audits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Academic Curriculum Advisory</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-scale-in">
                <div className="bg-card rounded-2xl border border-border shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              For urgent matters or specific inquiries, please contact directly via email. 
              Response time typically within 2-3 business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

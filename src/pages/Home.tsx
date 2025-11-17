import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Briefcase, FileText, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "@/components/StatCard";
import profileImage from "@/assets/profile.jpg";
import heroBackground from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        ></div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-white space-y-5 animate-fade-in-up">
              <div className="inline-block px-5 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium border border-blue-400/30">
                Leader in Steel Structure Engineering
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Dr. Padmaja
                <br />
                <span className="text-blue-400">Gokaraju</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-blue-100 font-medium">
                  Vice President – Engineering & R&D
                </p>
                
                <p className="text-base sm:text-lg text-blue-200">
                  Kirby Building Systems & Structures India Pvt. Ltd.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-blue-200 max-w-xl leading-relaxed">
                Pioneering advanced steel structures & pre-engineered building technologies with 39+ years of excellence
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <Link to="/about">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 transition-all">
                    View Projects
                  </Button>
                </Link>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                {["Steel Structures", "PEB Design", "R&D Leadership", "Code Committee"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative animate-scale-in mt-8 lg:mt-0">
              <div className="relative z-10">
                <img
                  src={profileImage}
                  alt="Dr. Padmaja Gokaraju"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-blue-400/30"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-300/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Briefcase}
              value="39+"
              label="Years Experience"
              delay={100}
            />
            <StatCard
              icon={Award}
              value="1000+"
              label="Major Projects"
              delay={200}
            />
            <StatCard
              icon={FileText}
              value="15+"
              label="Publications"
              delay={300}
            />
            <StatCard
              icon={GraduationCap}
              value="PhD"
              label="Structural Engineering"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              Professional Highlights
            </h2>
            <p className="text-base sm:text-lg text-blue-700 max-w-2xl mx-auto px-4">
              Leading innovation in steel structures and contributing to India's engineering excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "NBC 2016 Committee Member",
                description: "Contributing to National Building Code revision and standards development",
              },
              {
                title: "IS 800 Revision Panel",
                description: "Shaping steel structure design codes for India",
              },
              {
                title: "India Technology Vision 2047",
                description: "Contributing to IITH's vision for India's technological future",
              },
              {
                title: "Ministry of Steel Delegate",
                description: "Represented India in Japan for steel industry collaboration (2024)",
              },
              {
                title: "ISA Steel Summit Panelist",
                description: "Expert panelist at ISA Steel Infra Build Summit 2024",
              },
              {
                title: "Academic Contributor",
                description: "Guest lectures at IITs, NITs, JNTU, and leading engineering institutions",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {highlight.title}
                </h3>
                <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Collaborate?</h2>
          <p className="text-base sm:text-xl text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Connect for structural engineering consultancy, R&D advisory, or technical guidance
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

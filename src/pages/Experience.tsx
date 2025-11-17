import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Kirby Building Systems & Structures India Pvt. Ltd.",
      position: "Vice President – Engineering & R&D",
      period: "1999 – Present",
      duration: "25+ years",
      responsibilities: [
        "Leading a team of 125 engineers in advanced steel structure design",
        "Heading R&D department driving product innovation and development",
        "Overseeing design and engineering of 1000+ major PEB projects",
        "Strategic planning for engineering operations and technology adoption",
        "Establishing design standards and quality protocols",
        "Mentoring engineers and fostering technical excellence",
      ],
      color: "from-accent to-cyan",
    },
    {
      company: "Pennar Industries Ltd.",
      position: "Deputy Manager – Designs",
      period: "1994 – 1999",
      duration: "5 years",
      responsibilities: [
        "Leading structural design team for steel projects",
        "Project management for industrial and commercial structures",
        "Client coordination and design consultancy",
        "Quality assurance and design optimization",
      ],
      color: "from-steel-medium to-titanium",
    },
    {
      company: "IMI Ltd.",
      position: "Assistant Manager – Designs",
      period: "1992 – 1993",
      duration: "1 year",
      responsibilities: [
        "Developed iTowers software for transmission tower design",
        "Achieved 40% reduction in software runtime through optimization",
        "Structural analysis and design of tower systems",
        "Technical documentation and design reports",
      ],
      color: "from-primary to-steel-medium",
    },
    {
      company: "NSL Ltd.",
      position: "Assistant Superintendent – Designs",
      period: "1991 – 1992",
      duration: "1 year",
      responsibilities: [
        "Structural design of industrial facilities",
        "Preparation of detailed engineering drawings",
        "Coordination with fabrication and erection teams",
      ],
      color: "from-steel-dark to-steel-medium",
    },
    {
      company: "IMI Ltd.",
      position: "Application Engineer",
      period: "1989 – 1991",
      duration: "2 years",
      responsibilities: [
        "Application engineering for structural projects",
        "Software development for structural analysis",
        "Technical support and training",
      ],
      color: "from-navy to-steel-dark",
    },
    {
      company: "Nagarjuna Coated Tubes Ltd.",
      position: "Design Engineer",
      period: "1983 – 1989",
      duration: "6 years",
      responsibilities: [
        "Design of tubular steel structures",
        "Structural calculations and analysis",
        "Detailing and drawing preparation",
        "Site support and project coordination",
      ],
      color: "from-steel-dark to-primary",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-steel-dark to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Professional Experience</h1>
            <p className="text-xl text-gray-300">
              39+ Years of Excellence in Structural Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Current Role Highlight */}
            <div className="mb-16 p-8 bg-gradient-to-r from-accent/10 to-cyan/10 rounded-2xl border-2 border-accent/30 animate-fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-accent rounded-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Current Position</h2>
                  <p className="text-xl text-accent font-semibold">Vice President – Engineering & R&D</p>
                  <p className="text-lg text-muted-foreground">Kirby Building Systems & Structures India Pvt. Ltd.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                <Calendar className="h-5 w-5" />
                <span>1999 – Present (25+ years)</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {experiences[0].responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-steel-light to-transparent"></div>

              <div className="space-y-12">
                {experiences.slice(1).map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-20 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-5 top-6 w-7 h-7 rounded-full bg-accent border-4 border-background shadow-lg"></div>

                    {/* Content Card */}
                    <div className="bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-accent font-semibold mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">
                            {exp.period}
                          </div>
                          <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                            {exp.duration}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 text-muted-foreground">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-steel-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                { value: "6", label: "Organizations" },
                { value: "39+", label: "Years Experience" },
                { value: "1000+", label: "Projects Led" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-steel-dark to-navy rounded-xl text-white animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

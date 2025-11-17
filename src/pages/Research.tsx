import { FileText, Award, BookOpen, Microscope } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-steel-dark to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Research & Publications</h1>
            <p className="text-xl text-gray-300">
              Advancing Structural Engineering Through Research
            </p>
          </div>
        </div>
      </section>

      {/* PhD Research */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-accent/10 to-cyan/10 rounded-2xl border-2 border-accent/30 p-8 mb-12 animate-fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-accent rounded-lg">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-3">PhD Research</h2>
                  <p className="text-xl text-accent font-semibold mb-2">
                    Jawaharlal Nehru Technological University Hyderabad (JNTUH)
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Doctor of Philosophy in Civil Engineering (Structural Engineering)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Research Title
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    "Behaviour of Composite High-Density Polyurethane Foam Filled Aluminium and Light Gauge Steel Tubes"
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">Research Focus</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Investigation of composite structural behavior of foam-filled tubes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Analysis of high-density polyurethane foam as structural infill material</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Comparative study of aluminum and light gauge steel tube performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Development of design guidelines for composite filled tubes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Applications in lightweight high-strength structural systems</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">Research Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This pioneering research contributes to the understanding of composite structural systems, 
                    offering potential applications in lightweight construction, energy-efficient buildings, 
                    and innovative structural solutions. The findings provide valuable insights for designers 
                    and engineers working with advanced composite materials in structural applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Publications Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: FileText,
                  value: "15+",
                  label: "Publications",
                  description: "National & International",
                },
                {
                  icon: BookOpen,
                  value: "Multiple",
                  label: "Journals",
                  description: "Peer-Reviewed",
                },
                {
                  icon: Award,
                  value: "International",
                  label: "Recognition",
                  description: "Research Awards",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{item.value}</div>
                  <div className="text-sm font-semibold text-accent mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>

            {/* Research Contributions */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Research Contributions</h2>

              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border shadow-lg animate-fade-in">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Composite Structures Research
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced studies on composite structural systems combining traditional steel with innovative 
                    infill materials. Research focuses on enhancing structural performance while reducing weight 
                    and improving sustainability. Investigations include axial compression, bending behavior, 
                    and energy absorption characteristics of filled tubular members.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border shadow-lg animate-fade-in">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Steel Structure Optimization
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Development of optimized design methodologies for steel structures, particularly in 
                    pre-engineered building systems. Research has contributed to improved efficiency, cost-effectiveness, 
                    and structural performance of PEB systems widely adopted across Indian industry.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border shadow-lg animate-fade-in">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Cold-Formed Steel Systems
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Research on cold-formed steel structural systems including connection design, moment transfer 
                    mechanisms, and seismic performance. Contributions include validation studies conducted in 
                    collaboration with IIT Delhi for earthquake-resistant cold-formed steel structures.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border shadow-lg animate-fade-in">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Innovative Structural Solutions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Development of novel structural systems including castellated beam applications, innovative 
                    racking systems, and large-span structures. Research translates directly to practical 
                    implementations in industry projects, bridging the gap between academic research and 
                    industrial application.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Recognition */}
            <div className="mt-12 bg-gradient-to-br from-steel-dark to-navy text-white p-8 rounded-2xl animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Research Recognition</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">International Best Researcher Award</p>
                    <p className="text-sm text-gray-300">Recognition for outstanding contributions to structural engineering research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Outstanding Researcher Award</p>
                    <p className="text-sm text-gray-300">World Research Council / Times of Research / American Chamber of Research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;

import { Award, Trophy, Star, Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      year: "2024",
      title: "Eminent Engineer Award",
      organization: "Association of Consulting Civil Engineers (India) - ACCE(I)",
      description: "Recognized for exceptional contributions to civil and structural engineering profession",
      color: "from-amber-500 to-yellow-600",
    },
    {
      icon: Star,
      year: "2022",
      title: "Outstanding Women Structural Engineer Award",
      organization: "Indian Association of Structural Engineers (IAStructE)",
      description: "Honored for exemplary leadership and technical excellence in structural engineering",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Medal,
      year: "2024",
      title: "International Best Researcher Award",
      organization: "International Research Community",
      description: "Global recognition for outstanding research contributions in structural engineering",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Award,
      year: "Multiple",
      title: "Outstanding Researcher Award",
      organization: "World Research Council / Times of Research / American Chamber of Research",
      description: "Multiple international recognitions for research excellence and innovation",
      color: "from-green-500 to-teal-600",
    },
  ];

  const projectAwards = [
    {
      project: "CIPLA Pharma Unit, Sikkim",
      achievement: "Industry Excellence Award",
      category: "Pre-Engineered Building Design",
    },
    {
      project: "Dr. Reddy's G+4 Heavy Load Building",
      achievement: "Innovation Award",
      category: "Multi-Story PEB Design",
    },
    {
      project: "Omkar Realtors G+7 Transit Buildings",
      achievement: "Award-Winning Design",
      category: "High-Rise PEB Structures",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-steel-dark to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block p-4 bg-accent/20 rounded-full mb-6">
              <Trophy className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Awards & Recognitions</h1>
            <p className="text-xl text-gray-300">
              Celebrating Excellence in Structural Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Professional Awards & Honors
            </h2>

            <div className="space-y-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${award.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 bg-gradient-to-br ${award.color} rounded-xl shadow-lg flex-shrink-0`}>
                        <award.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded-full">
                            {award.year}
                          </span>
                          <h3 className="text-2xl font-bold text-foreground">
                            {award.title}
                          </h3>
                        </div>
                        <p className="text-lg text-accent font-semibold mb-3">
                          {award.organization}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Awards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Award-Winning Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Recognition for innovative design excellence and engineering achievements
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {projectAwards.map((project, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Medal className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 text-center">
                    {project.project}
                  </h3>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-2">
                      {project.achievement}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {project.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Summary */}
      <section className="py-20 bg-gradient-to-br from-steel-dark to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Professional Recognition & Impact
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-accent">Industry Leadership</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Panelist at ISA Steel Infra Build Summit 2024
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Ministry of Steel Representative (Japan Visit, 2024)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Member, NBC 2016 Revision Committee
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Member, IS 800 Code Revision Panel
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-accent">Academic Contributions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Regular speaker at IITs, NITs, and premier institutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Contributor to India Technology Vision 2047 (IITH)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Curriculum development for BTech/MTech PEB programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-300">
                      Technical advisory for skill development initiatives
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-300 leading-relaxed">
                Recognition across industry, academia, and research communities reflects 
                Dr. Padmaja Gokaraju's comprehensive impact on advancing structural engineering 
                in India and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;

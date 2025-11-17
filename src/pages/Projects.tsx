import { useState } from "react";
import { Building2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import pebImage from "@/assets/peb-structure.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "peb", name: "Pre-Engineered Buildings" },
    { id: "industrial", name: "Industrial Buildings" },
    { id: "racking", name: "Industrial Racking" },
    { id: "towers", name: "Towers & Substations" },
    { id: "space-frame", name: "Space Frame Structures" },
    { id: "tubes", name: "High Strength Tubes" },
    { id: "cold-formed", name: "Cold Formed Steel" },
  ];

  const projects = [
    {
      category: "peb",
      name: "CIPLA Pharma Unit, Sikkim",
      description: "Award-winning pharmaceutical facility with advanced PEB design",
      achievement: "Industry Award Winner",
      tonnage: "Multiple structures",
    },
    {
      category: "peb",
      name: "VVIP Aircraft Hangars, Delhi",
      description: "Large-span hangars for government aircraft with specialized requirements",
      tonnage: "Heavy steel tonnage",
    },
    {
      category: "peb",
      name: "Toshiba Multi-Span Structure",
      description: "Complex multi-span industrial facility for electronics manufacturing",
      tonnage: "Extensive steel framework",
    },
    {
      category: "peb",
      name: "Dr. Reddy's G+4 Heavy Load Building",
      description: "Multi-story pharmaceutical building with heavy loading capacity",
      achievement: "Innovation Award",
      tonnage: "High-capacity structure",
    },
    {
      category: "peb",
      name: "Danielli Steel Industry, Sri City",
      description: "Heavy industrial steel processing facility",
      tonnage: "Massive steel structure",
    },
    {
      category: "peb",
      name: "Knorr Bremse, Delhi",
      description: "Manufacturing facility for automotive components",
    },
    {
      category: "peb",
      name: "ITC Multi-City Projects",
      description: "Multiple FMCG facilities across India for ITC Limited",
      tonnage: "Large-scale deployment",
    },
    {
      category: "peb",
      name: "TATA Steel Facilities",
      description: "Various steel industry buildings and structures",
    },
    {
      category: "peb",
      name: "Pipav Shipyard",
      description: "Shipbuilding facility with specialized requirements",
    },
    {
      category: "peb",
      name: "VACMET Industrial Facility",
      description: "Specialized coating industry building",
    },
    {
      category: "peb",
      name: "Heavy Vehicle Factory, Avadi",
      description: "Defense production facility for heavy vehicles",
    },
    {
      category: "peb",
      name: "Omkar Realtors G+7 Transit Buildings",
      description: "Multi-story PEB residential structures",
      achievement: "Award-Winning Design",
    },
    {
      category: "industrial",
      name: "ITC Chirala",
      description: "Large-scale industrial warehouse and processing facility",
    },
    {
      category: "industrial",
      name: "Brinton Carpets",
      description: "Industrial building with innovative castellated rafters",
      achievement: "Unique structural solution",
    },
    {
      category: "industrial",
      name: "Sembawang Shriram Logistics",
      description: "Modern logistics and warehousing facility",
    },
    {
      category: "industrial",
      name: "Dynamic Logistics Pune",
      description: "State-of-the-art distribution center",
    },
    {
      category: "racking",
      name: "Gati Logistics Racking",
      description: "High-density storage racking systems",
    },
    {
      category: "racking",
      name: "Coca Cola Drive-in Racking",
      description: "Specialized drive-in racking for beverage distribution",
    },
    {
      category: "racking",
      name: "NFCL Industrial Racking",
      description: "Chemical industry storage systems",
    },
    {
      category: "racking",
      name: "NATCO Pharma Racking",
      description: "Pharmaceutical grade storage systems",
    },
    {
      category: "racking",
      name: "BHEL R&D Racking",
      description: "Technical storage for research facility",
    },
    {
      category: "towers",
      name: "Dynamic Logistics Floodlight Tower",
      description: "Tall floodlight towers for logistics facility",
    },
    {
      category: "towers",
      name: "Reliance Petrochemical Towers",
      description: "Process plant towers and support structures",
    },
    {
      category: "towers",
      name: "NTPC Power Plant Towers",
      description: "Cooling tower structures for thermal power plant",
    },
    {
      category: "towers",
      name: "Nepal Telecom Towers",
      description: "Communication tower systems for Nepal",
    },
    {
      category: "towers",
      name: "132KV Substation Structures",
      description: "Electrical substation steel structures",
    },
    {
      category: "towers",
      name: "220KV Substation Structures",
      description: "High-voltage substation framework",
    },
    {
      category: "space-frame",
      name: "Bilaspur Stadium (70m span)",
      description: "Large-span sports stadium with space frame roof",
      tonnage: "70-meter clear span",
    },
    {
      category: "space-frame",
      name: "Vizag Stadium",
      description: "Sports complex with advanced space frame structure",
    },
    {
      category: "space-frame",
      name: "Hitex Exhibition Center",
      description: "Large exhibition hall with column-free space",
    },
    {
      category: "space-frame",
      name: "IMTMA Bangalore",
      description: "Trade mart with extensive space frame coverage",
    },
    {
      category: "tubes",
      name: "Salt Lake Stadium",
      description: "High-strength tubular steel structure for iconic stadium",
    },
    {
      category: "tubes",
      name: "Mysore Cements Dome (88m Dia)",
      description: "Massive 88-meter diameter dome structure",
      achievement: "Engineering marvel",
    },
    {
      category: "tubes",
      name: "J.N. Stadium Cuttack",
      description: "Sports stadium with tubular steel framework",
    },
    {
      category: "tubes",
      name: "Pragati Maidan Delhi",
      description: "Exhibition complex structural systems",
    },
    {
      category: "cold-formed",
      name: "BSES Buildings (1000+)",
      description: "Over 1000 cold-formed steel buildings for power distribution",
      achievement: "Mass deployment",
    },
    {
      category: "cold-formed",
      name: "UNICEF Structures",
      description: "Humanitarian buildings using cold-formed steel",
    },
    {
      category: "cold-formed",
      name: "Earthquake-Resistant Structures",
      description: "Seismically designed cold-formed buildings",
      achievement: "IIT Delhi validated design",
    },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-br from-steel-dark to-navy text-white relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(25, 35, 50, 0.95) 0%, rgba(25, 35, 50, 0.9) 100%), url(${pebImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Major Projects & Achievements</h1>
            <p className="text-xl text-gray-300 mb-4">
              1000+ Landmark Projects Across India
            </p>
            <p className="text-lg text-gray-400">
              From pharmaceutical facilities to stadiums, from multi-story buildings to large-span structures
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-accent" />
            <h3 className="font-semibold text-foreground">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                className={selectedCategory === cat.id ? "bg-accent hover:bg-accent/90" : ""}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-bold text-accent">{filteredProjects.length}</span> projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in hover:scale-105"
                style={{ animationDelay: `${(index % 12) * 50}ms` }}
              >
                {/* Category Badge */}
                <div className="p-4 bg-gradient-to-r from-steel-dark to-navy">
                  <span className="text-xs font-semibold text-accent uppercase">
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Building2 className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {project.achievement && (
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                      {project.achievement}
                    </div>
                  )}

                  {project.tonnage && (
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="font-semibold">Scale:</span> {project.tonnage}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-gradient-to-br from-steel-dark to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Project Portfolio Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { value: "1000+", label: "Total Projects" },
                { value: "7", label: "Categories" },
                { value: "Multiple", label: "Award Winners" },
                { value: "All India", label: "Coverage" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
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

export default Projects;

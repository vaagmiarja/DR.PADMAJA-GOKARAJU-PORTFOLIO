import { Award, BookOpen, Users, Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-steel-dark to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">About Dr. Padmaja Gokaraju</h1>
            <p className="text-xl text-gray-300">
              Chartered Engineer | Fellow of IEI | PhD in Structural Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Padmaja Gokaraju is a distinguished structural engineer with over 39 years of exemplary contributions 
                to the field of advanced steel structures and pre-engineered building (PEB) systems. As Vice President of 
                Engineering & R&D at Kirby Building Systems & Structures India Pvt. Ltd., she leads a team of 125 engineers 
                in designing cutting-edge structural solutions that shape India's industrial and commercial landscape.
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Industry Leadership",
                  description: "Leading R&D and engineering innovation at Kirby Building Systems, one of India's foremost PEB manufacturers.",
                },
                {
                  icon: BookOpen,
                  title: "Academic Excellence",
                  description: "PhD in Structural Engineering with extensive research on composite structures and advanced steel systems.",
                },
                {
                  icon: Users,
                  title: "National Contribution",
                  description: "Member of NBC 2016 and IS 800 revision committees, shaping India's building standards.",
                },
                {
                  icon: Award,
                  title: "Recognition",
                  description: "Multiple national awards including Outstanding Women Structural Engineer and Eminent Engineer awards.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Biography */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Gokaraju's career spans nearly four decades of pioneering work in structural engineering. Her expertise 
                  encompasses advanced steel structure design, pre-engineered buildings, cold-formed steel systems, transmission 
                  towers, industrial racking, and space frame structures.
                </p>

                <p>
                  At Kirby Building Systems, she has been instrumental in driving innovation and excellence, overseeing the 
                  design of over 1000 major projects including pharmaceutical facilities, aircraft hangars, heavy industrial 
                  plants, multi-story buildings, and large-span structures. Her technical leadership has positioned Kirby as 
                  a leader in the Indian PEB industry.
                </p>

                <p>
                  Beyond her corporate role, Dr. Gokaraju is deeply committed to advancing the engineering profession through 
                  education and standards development. She regularly delivers expert lectures at premier institutions including 
                  IITs, NITs, JNTU, and through professional bodies like INSDAG, BIS, ACCE(I), and IAStructE. Her contributions 
                  to curriculum development have helped shape engineering education programs, including BTech and MTech electives 
                  in PEB design.
                </p>

                <p>
                  As a member of the National Building Code 2016 revision committee and the IS 800:2007 steel design code 
                  revision panel, she plays a crucial role in shaping India's structural engineering standards. Her participation 
                  in India Technology Vision 2047 at IIT Hyderabad demonstrates her commitment to India's technological future.
                </p>

                <p>
                  In 2024, she represented the Ministry of Steel in a delegation to Japan, fostering international collaboration 
                  in steel technology. She also served as a panelist at the ISA Steel Infra Build Summit 2024, sharing insights 
                  on industry trends and innovations.
                </p>

                <p>
                  Dr. Gokaraju's research work focuses on composite structures, particularly the behavior of high-density 
                  polyurethane foam-filled aluminum and light gauge steel tubes. Her 15+ publications in national and 
                  international journals have contributed significantly to the body of knowledge in structural engineering.
                </p>

                <p>
                  Her advisory roles extend to skill development initiatives, where she provides technical guidance for SDU 
                  programs, helping bridge the gap between academic training and industry requirements. Through her multifaceted 
                  contributions spanning industry, academia, research, and standards development, Dr. Padmaja Gokaraju continues 
                  to be a driving force in advancing structural engineering in India.
                </p>
              </div>
            </div>

            {/* Professional Affiliations */}
            <div className="bg-muted p-8 rounded-xl animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Affiliations</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>Chartered Engineer (CE)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>Fellow of Institution of Engineers India (FIE)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>Member, National Building Code (NBC) 2016 Revision Committee</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>Member, IS 800:2007 Code Revision Panel</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>Contributor, India Technology Vision 2047 (IIT Hyderabad)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>Ministry of Steel Representative (Japan Delegation, 2024)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>Panelist, ISA Steel Infra Build Summit 2024</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

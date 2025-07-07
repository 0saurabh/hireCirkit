import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, User, Briefcase, Clock, Target, Users, Shield, Heart, Award, Eye, Compass, BookOpen } from 'lucide-react';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      title: "Integrity",
      description: "Honest and ethical practices in all our interactions and partnerships.",
      icon: <Shield className="h-8 w-8 text-accent" />
    },
    {
      title: "Excellence", 
      description: "High standards in sourcing talent and providing exceptional support.",
      icon: <Award className="h-8 w-8 text-accent" />
    },
    {
      title: "Empowerment",
      description: "Help Indian talent grow globally while serving client needs effectively.",
      icon: <Users className="h-8 w-8 text-accent" />
    },
    {
      title: "Simplicity",
      description: "No jargon, no clutter, just results that matter to our clients and developers.",
      icon: <Target className="h-8 w-8 text-accent" />
    },
    {
      title: "Accountability",
      description: "We deliver what we promise and stand behind our commitments.",
      icon: <Heart className="h-8 w-8 text-accent" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-8 leading-tight">
              Ethical Tech Hiring.<br />
              <span className="text-accent">Global Reach.</span><br />
              <span className="text-primary">Indian Talent.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering global companies with high-quality Indian tech talent while uplifting developers through meaningful remote opportunities with transparency, support, and fair compensation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('our-story')}
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Our Story
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('our-mission')}
                className="group border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
              >
                <Target className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  To empower global companies with high-quality Indian tech talent and uplift developers by providing meaningful remote opportunities with transparency, support, and fair compensation.
                </p>
                <p className="text-lg">
                  We believe that talent knows no boundaries, and every skilled developer deserves access to opportunities that match their potential. Our mission is to create a bridge that connects exceptional Indian developers with companies worldwide, fostering growth and success for both parties.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="group p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Global Impact</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our mission extends beyond simple placement. We're building a global ecosystem where Indian talent can thrive, contribute to innovative projects worldwide, and achieve their career aspirations while helping companies scale efficiently.
                  </p>
                  <div className="mt-6 p-4 bg-white/60 rounded-xl">
                    <p className="text-sm text-gray-600 font-medium">
                      "Connecting dreams with opportunities, one placement at a time."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="group p-8 bg-gradient-to-br from-accent/10 to-primary/5 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Compass className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Future Vision</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We envision a world where geographical boundaries don't limit career opportunities, where companies can access the best talent regardless of location, and where every developer has the chance to work on projects that challenge and inspire them.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-accent mb-1">2030</div>
                      <div className="text-sm text-gray-600">Global Leader</div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-primary mb-1">∞</div>
                      <div className="text-sm text-gray-600">Possibilities</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-primary">Our Vision</h2>
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  To be the most trusted global gateway for Indian developers — where talent meets opportunity, ethically and efficiently.
                </p>
                <p className="text-lg">
                  We see a future where Hire CirKit is synonymous with quality, trust, and opportunity. A platform where companies turn to first when they need exceptional talent, and where developers know they'll find their next career breakthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from a simple idea: bridge the gap between global tech companies and Indian talent — with speed, ethics, and quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-l-primary rounded-2xl">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">The Beginning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Having witnessed the incredible talent pool in India and the growing need for skilled developers globally, we saw an opportunity to create something meaningful. The gap was clear, and we knew we could bridge it.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-l-accent rounded-2xl">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our founders, with combined experience of over 20 years in tech recruitment and startup ecosystems, understood the challenges on both sides. Companies struggled to find quality talent, developers lacked global opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-l-green-500 rounded-2xl">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-green-500">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">The Solution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hire CirKit was born from our belief that technology should connect people, not divide them. Our lean approach makes global hiring faster, simpler, and more reliable while maintaining the highest ethical standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Developers</h3>
              <p className="text-gray-600">In our verified network</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">200+</div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Companies</h3>
              <p className="text-gray-600">Successfully matched</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">15+</div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Countries</h3>
              <p className="text-gray-600">Global reach</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">95%</div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Success Rate</h3>
              <p className="text-gray-600">Long-term partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent h-2"></div>
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">A Note from Our Founders</h3>
              <div className="space-y-6">
                <blockquote className="text-xl text-gray-700 italic leading-relaxed text-center border-l-4 border-accent pl-6">
                  "India has some of the most talented developers in the world, but many lack access to global opportunities. At the same time, companies worldwide struggle to find skilled, affordable talent."
                </blockquote>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Hire CirKit was born from our belief that technology should connect people, not divide them. We've seen firsthand how the right match between talent and opportunity can transform both careers and companies."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Our commitment is to maintain the highest standards while making the process as smooth as possible for everyone involved. We're not just building a business; we're building bridges between dreams and opportunities."
                </p>
              </div>
              <div className="mt-8 text-center">
                <p className="font-semibold text-primary text-lg">- The Hire CirKit Founding Team</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/90 to-primary/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're a company looking for talent or a developer seeking opportunities, we'd love to connect with you and help write the next chapter together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                📞 Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="group border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Learn How We Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

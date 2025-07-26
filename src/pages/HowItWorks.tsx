
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, User, Briefcase, Clock, Check, Target, Users, FileText } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HowItWorks = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: clientRef, isVisible: clientVisible } = useScrollAnimation();
  const { ref: developerRef, isVisible: developerVisible } = useScrollAnimation();
  const { ref: whyWorksRef, isVisible: whyWorksVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const clientSteps = [
    {
      title: "Book Call or Submit Form",
      description: "Book a call or submit a hiring form to share your requirements and project details.",
      icon: <FileText className="h-8 w-8 text-accent" />
    },
    {
      title: "Share Job Details",
      description: "Share job details including skills, budget, timeline, and cultural preferences.",
      icon: <User className="h-8 w-8 text-accent" />
    },
    {
      title: "Get Top Candidates",
      description: "Get 3–5 top candidates in 48–72 hours, pre-vetted and matched to your needs.",
      icon: <Clock className="h-8 w-8 text-accent" />
    },
    {
      title: "Interview & Deploy",
      description: "Interview and finalize, sign contract → Developer gets deployed with ongoing support.",
      icon: <Check className="h-8 w-8 text-accent" />
    }
  ];

  const developerSteps = [
    {
      title: "Submit Application",
      description: "Submit your application with portfolio, experience, and technical skills showcasing your expertise.",
      icon: <User className="h-8 w-8 text-accent" />
    },
    {
      title: "Go Through Screening",
      description: "Complete our comprehensive technical screening and communication evaluation process.",
      icon: <Target className="h-8 w-8 text-accent" />
    },
    {
      title: "Join Talent Pool",
      description: "Join our vetted talent pool and get access to global opportunities.",
      icon: <Users className="h-8 w-8 text-accent" />
    },
    {
      title: "Get Matched & Placed",
      description: "Get matched and placed with ongoing project support, communication tips, and career advice.",
      icon: <Check className="h-8 w-8 text-accent" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div 
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                How Hire CirKit
              </span>
              <br />
              <span className="text-accent">Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              A streamlined process designed to connect the right talent with the right opportunities, 
              ensuring successful partnerships for both clients and developers.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={clientRef}
            className={`transition-all duration-1000 ${
              clientVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    For Clients
                  </h2>
                </div>
                <p className="text-gray-600 text-xl leading-relaxed">
                  From requirement to successful hire in just a few simple steps. We handle the complexity 
                  so you can focus on building great products.
                </p>
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                    alt="Client working on laptop" 
                    className="rounded-2xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <div className="grid gap-6">
                {clientSteps.map((step, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-xl hover:bg-white"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-bold text-xl text-primary group-hover:text-accent transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/for-clients">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  📝 Start Hiring Process
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Developers Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent/2 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={developerRef}
            className={`transition-all duration-1000 delay-200 ${
              developerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="grid gap-6 lg:order-2">
                {developerSteps.map((step, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-xl hover:bg-white"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-bold text-xl text-primary group-hover:text-accent transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="lg:order-1 space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center shadow-xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    For Developers
                  </h2>
                </div>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Join our network and get connected with exciting global opportunities. We support 
                  you throughout your journey from application to successful placement.
                </p>
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                    alt="Developer coding" 
                    className="rounded-2xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/for-developers">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  🚀 Join Our Network
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={whyWorksRef}
            className={`transition-all duration-1000 ${
              whyWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Why Our Process Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built on years of experience in connecting global talent with the right opportunities.
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "72hrs", title: "Quick Turnaround", desc: "Get matched candidates within 48–72 hours of submitting requirements." },
                { stat: "Top 5%", title: "Elite Talent", desc: "Only the top 5% of applicants make it through our screening process." },
                { stat: "95%", title: "Success Rate", desc: "95% of our placements lead to successful long-term partnerships." }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="group text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white/80 backdrop-blur-xl hover:bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.stat}
                    </div>
                    <h3 className="font-bold text-xl text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-accent/95 to-primary/95"></div>
        <div 
          ref={ctaRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to hire or seeking new opportunities, we're here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  📞 Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="group border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;

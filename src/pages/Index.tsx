import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Users, 
  Globe, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Award,
  Calendar,
  UserCheck,
  Briefcase,
  HandHeart
} from 'lucide-react';

const Index = () => {
  const heroRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

  const features = [
    {
      icon: Users,
      title: "🇮🇳 India's Best Talent",
      description: "Vetted for tech and communication skills"
    },
    {
      icon: Clock,
      title: "⚡ Fast Turnaround",
      description: "Get matched candidates within 48–72 hours"
    },
    {
      icon: Briefcase,
      title: "💼 Flexible Engagements",
      description: "Contract or permanent hiring options"
    },
    {
      icon: HandHeart,
      title: "🤝 Dual-Side Support",
      description: "We support both clients and developers"
    },
    {
      icon: Globe,
      title: "💻 Remote-First Approach",
      description: "Developers trained for remote work"
    }
  ];

  const stats = [
    { number: "500+", label: "Developers Placed", icon: Users },
    { number: "50+", label: "Global Clients", icon: Globe },
    { number: "95%", label: "Client Satisfaction", icon: Star },
    { number: "72hrs", label: "Average Match Time", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow",
      content: "Hire CirKit helped us scale our team with exceptional Indian developers. The quality and communication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, StartupXYZ", 
      content: "Found our lead developer through Hire CirKit. The vetting process is thorough and the talent is world-class.",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Submit Requirements",
      description: "Share your project requirements, tech stack, and timeline"
    },
    {
      step: "02", 
      title: "Get Vetted Candidates",
      description: "Receive matched candidates within 48–72 hours"
    },
    {
      step: "03",
      title: "Interview & Hire", 
      description: "Interview candidates and select the perfect fit"
    },
    {
      step: "04",
      title: "Start Building",
      description: "Begin development with our ongoing support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white transition-colors duration-500">
      <Header />
      
      {/* Hero Section - Fixed spacing and structure */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroRef.ref}
            className={`grid lg:grid-cols-12 gap-8 items-center transition-all duration-1000 ${
              heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Left Content - Takes up 7 columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-5">
                <Badge className="bg-gradient-to-r from-accent/10 to-primary/10 text-accent hover:from-accent/20 hover:to-primary/20 transition-all duration-300 animate-pulse">
                  🚀 Connecting Global Companies with Indian Tech Talent
                </Badge>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                    Global Tech Talent,
                  </span>
                  <br />
                  <span className="text-accent animate-pulse" style={{ animationDelay: '0.5s' }}>
                    Seamlessly Delivered
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Hire CirKit connects global companies with top-tier Indian developers, designers, and engineers — pre-vetted, remote-ready, and aligned for success.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 transform-gpu"
                  >
                    📞 Book a Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </Link>
                <Link to="/for-clients">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="group border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                  >
                    📝 Start Hiring Now
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
              
              <Link to="/for-developers" className="block">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                >
                  👨‍💻 Join as Developer
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Link>

              {/* Trusted By Section */}
              <div className="pt-6 space-y-4">
                <p className="text-gray-600 text-sm lg:text-base">
                  Trusted by startups and fast-growing companies across the US, UK, EU, Australia, and more.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary border-2 border-white hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Trusted by 50+ companies</p>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">4.9/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Developer Match Card - Takes up 5 columns */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 transform-gpu">
                  <div className="relative bg-white rounded-2xl p-5 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Code className="w-5 h-5 text-accent" />
                        <span className="font-medium text-gray-900 text-sm">Developer Match</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 animate-pulse text-xs">Available</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">React.js Expert</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">5+ Years Experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">English Fluent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={statsRef.ref}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
              statsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-500 group-hover:rotate-12 shadow-lg">
                    <stat.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire CirKit Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={featuresRef.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge className="bg-primary/10 text-primary mb-4 animate-pulse">Why Hire CirKit?</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Built for Modern Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the challenges of scaling globally. Our platform delivers the right talent 
              at the right time, with the right support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-white/80 backdrop-blur-xl hover:bg-white transform-gpu ${
                  featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <feature.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={processRef.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge className="bg-accent/10 text-accent mb-4 animate-pulse">Simple Process</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From requirement to deployment in just 4 simple steps. 
              We make hiring Indian developers effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative group text-center transition-all duration-1000 hover:scale-105 transform-gpu ${
                  processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsRef.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              testimonialsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge className="bg-primary/10 text-primary mb-4 animate-pulse">Success Stories</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real clients who've scaled their teams with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:bg-white transform-gpu ${
                  testimonialsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-95"></div>
        <AnimatedBackground />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 50+ companies who've successfully scaled with Indian developers. 
              Get started today with a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-gray-100 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform-gpu px-8 py-4 text-lg"
                >
                  📞 Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Link>
              <Link to="/for-developers">
                <Button 
                  size="lg" 
                className="group border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  👨‍💻 Join as Developer
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
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

export default Index;

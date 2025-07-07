
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Clock, User, Briefcase, Target, Zap, Users, Globe } from 'lucide-react';

const ForClients = () => {
  const benefits = [
    "Strong technical and communication skills",
    "Flexible time zone collaboration",
    "High value at competitive cost",
    "Deep startup and enterprise experience"
  ];

  const services = [
    {
      title: "Developer-as-a-Service (DaaS)",
      description: "Contract-based remote developers (3–12+ months)",
      features: ["10% monthly fee", "Fast onboarding", "Flexible contracts"],
      icon: <Clock className="h-8 w-8 text-accent" />
    },
    {
      title: "Permanent Hiring",
      description: "End-to-end hiring process",
      features: ["One-time success fee of 5% CTC", "Transparent, affordable, and fast", "Long-term commitment"],
      icon: <User className="h-8 w-8 text-accent" />
    },
    {
      title: "Team-as-a-Service",
      description: "Deploy full agile squads (Dev + QA + Design)",
      features: ["Custom pricing", "Ideal for MVPs and sprints", "Complete team solution"],
      icon: <Briefcase className="h-8 w-8 text-accent" />
    }
  ];

  const process = [
    {
      step: "1",
      title: "Submit Request",
      description: "Submit a hiring request or book a call to discuss your needs and requirements."
    },
    {
      step: "2", 
      title: "Share Job Details",
      description: "Share job details including skills, budget, timeline, and team culture fit."
    },
    {
      step: "3",
      title: "Receive Shortlist",
      description: "Receive shortlist of 3–5 top candidates within 48–72 hours."
    },
    {
      step: "4",
      title: "Interview & Onboard",
      description: "Interview and select candidates, then onboard and scale with our ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Build Your Dream Tech Team
                <span className="text-accent block">With Vetted Indian Talent</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Whether you need a single developer or a full remote team, Hire CirKit helps you scale efficiently with high-quality Indian talent.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    📝 Submit Your Hiring Need
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    📞 Schedule a Discovery Call
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Why Indian Talent?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Services Offered</h2>
            <p className="text-gray-600">Flexible hiring options to match your project needs and budget.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-accent" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Process (For Clients)</h2>
            <p className="text-gray-600">A streamlined approach to finding your perfect development partner.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and find the perfect developers for your company.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                📝 Submit Hiring Need
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                📞 Schedule Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForClients;


import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Code, User, Briefcase, Globe, Target, Users } from 'lucide-react';

const ForDevelopers = () => {
  const roles = [
    "Full-stack Developers (React, Node, MERN, etc.)",
    "Backend Engineers (Python, Java, Go)",
    "Mobile Developers (Flutter, React Native)",
    "Designers, QA, DevOps, and Data Engineers"
  ];

  const benefits = [
    {
      title: "Global Job Opportunities",
      description: "Work with global startups and enterprises from India",
      icon: <Globe className="h-8 w-8 text-accent" />
    },
    {
      title: "Transparent Process",
      description: "Transparent, ethical hiring process with fair compensation",
      icon: <Target className="h-8 w-8 text-accent" />
    },
    {
      title: "Career Support",
      description: "Resume polishing, interview support & post-placement guidance",
      icon: <Users className="h-8 w-8 text-accent" />
    }
  ];

  const process = [
    {
      step: "Apply",
      description: "Fill the application form with your skills and experience"
    },
    {
      step: "Screen",
      description: "Attend tech + communication screening process"
    },
    {
      step: "Talent Pool",
      description: "Get added to our vetted talent pool"
    },
    {
      step: "Get Matched",
      description: "Get matched to jobs and receive placement support"
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
                Get Hired by Global Companies
                <span className="text-accent block">From India</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Work with global startups and enterprises. Get matched to roles that suit your skills, schedule, and salary expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    🚀 Apply as Developer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    📄 View Screening Process
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Who Should Apply?</h3>
              <ul className="space-y-3">
                {roles.map((role, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* What You Get */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-primary mb-4">What You Get</h2>
      <p className="text-gray-600">We're committed to your success and career growth.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <Card
          key={index}
          className="relative group overflow-hidden rounded-xl bg-white text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Radium glowing border effect */}
          <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:rounded-xl before:border-[2px] before:border-accent before:animate-pulse before:opacity-20"></div>

          <CardHeader className="relative z-10">
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <CardTitle className="text-primary">{benefit.title}</CardTitle>
          </CardHeader>

          <CardContent className="relative z-10">
            <p className="text-gray-600">{benefit.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Screening Process */}
<section className="py-16 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-primary mb-4">Screening Process (For Developers)</h2>
      <p className="text-gray-600">A transparent and fair evaluation process to showcase your skills.</p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {process.map((step, index) => (
        <Card
          key={index}
          className="relative group overflow-hidden rounded-xl text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white"
        >
          {/* Radium border effect */}
          <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:rounded-xl before:border-[2px] before:border-accent before:animate-pulse before:opacity-20"></div>

          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">{step.step}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">What to Expect</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">Global Opportunities</h3>
                    <p className="text-gray-600">Access to international projects and diverse company cultures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">Skill Development</h3>
                    <p className="text-gray-600">Work on challenging projects that enhance your technical expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">Career Support</h3>
                    <p className="text-gray-600">Receive project support, communication tips, and career advice</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">Ongoing Support</h3>
                    <p className="text-gray-600">Dedicated support team to help you succeed in your projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join hundreds of talented Indian developers who have found their dream remote jobs through our platform.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white w-full">
                  🚀 Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default ForDevelopers;

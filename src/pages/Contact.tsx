
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import PageTransition from '@/components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    customRole: '',
    message: ''
  });
  const { toast } = useToast();
  const location = useLocation();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  // Enhanced auto-selection logic based on navigation state or referrer
  useEffect(() => {
    // Check if user came from a specific page via navigation state
    const fromPage = location.state?.from;
    
    if (fromPage) {
      console.log('Navigation state from:', fromPage);
      if (fromPage.includes('/for-developers') || fromPage === '/for-developers' || fromPage.includes('developer')) {
        setFormData(prev => ({ ...prev, role: 'developer' }));
      } else if (fromPage.includes('/for-clients') || fromPage === '/for-clients' || fromPage.includes('client')) {
        setFormData(prev => ({ ...prev, role: 'client' }));
      }
    } else {
      // Fallback to checking document referrer if no state
      const referrer = document.referrer;
      console.log('Document referrer:', referrer);
      
      if (referrer.includes('/for-developers') || referrer.includes('developer')) {
        setFormData(prev => ({ ...prev, role: 'developer' }));
      } else if (referrer.includes('/for-clients') || referrer.includes('client')) {
        setFormData(prev => ({ ...prev, role: 'client' }));
      }
      // If coming directly to contact page or from other sources, leave role empty
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get the final role value (either predefined or custom)
    const finalRole = formData.role === 'custom' ? formData.customRole : formData.role;
    
    // Basic validation
    if (!formData.name || !formData.email || !finalRole || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { ...formData, finalRole });
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      customRole: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      role: value,
      // Clear custom role if switching away from custom
      customRole: value === 'custom' ? prev.customRole : ''
    }));
  };

  const handleCalendlyClick = () => {
    // Basic Calendly implementation - opens in new window
    const calendlyUrl = 'https://calendly.com/your-calendly-link'; // Replace with actual Calendly link
    
    // For now, we'll show a toast since we don't have a real Calendly link
    toast({
      title: "Calendly Integration",
      description: "This would open your Calendly booking page. Please add your actual Calendly link.",
    });
    
    // Uncomment when you have a real Calendly link:
    // window.open(calendlyUrl, '_blank', 'width=800,height=600');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-white py-16">
          <div 
            ref={heroRef}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's Work Together.
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Whether you're looking to hire or get hired — we're here to help.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div 
                ref={formRef}
                className={`transition-all duration-1000 delay-200 ${
                  formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Your full name"
                            className="transition-all duration-200 focus:scale-105"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                            className="transition-all duration-200 focus:scale-105"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="role">I'm a *</Label>
                        <Select value={formData.role} onValueChange={handleRoleChange}>
                          <SelectTrigger className="transition-all duration-200 focus:scale-105">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="client">Client</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="custom">Custom (type your role)</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        {/* Custom Role Input - shown when "Custom" is selected */}
                        {formData.role === 'custom' && (
                          <div className="mt-2">
                            <Input
                              id="customRole"
                              value={formData.customRole}
                              onChange={(e) => handleInputChange('customRole', e.target.value)}
                              placeholder="Please specify your role..."
                              className="transition-all duration-200 focus:scale-105"
                            />
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your requirements, project details, or any questions you have..."
                          rows={4}
                          className="transition-all duration-200 focus:scale-105"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent/90 text-white transform transition-all duration-200 hover:scale-105"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Calendar className="h-8 w-8 text-accent" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary">📞 Book a Calendly Call</h3>
                        <p className="text-gray-600">Schedule a consultation</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Prefer to talk? Schedule a 30-minute consultation call to discuss your requirements 
                      in detail.
                    </p>
                    <Button 
                      onClick={handleCalendlyClick}
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Calendly Call
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Mail className="h-8 w-8 text-accent" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary">📧 Email Us</h3>
                        <p className="text-gray-600">hello@hirecirkit.com</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Send us an email and we'll respond within 24 hours. Perfect for detailed inquiries 
                      and technical questions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Response Times</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Email responses: Within 24 hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Talent matching: Within 48–72 hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Consultation calls: Same day booking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;

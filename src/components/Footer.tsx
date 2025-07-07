
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HC</span>
              </div>
              <span className="text-white font-bold text-xl">Hire CirKit</span>
            </div>
            <p className="text-gray-300 text-sm">
              Ethical Tech Hiring. Global Reach. Indian Talent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/for-clients" className="text-gray-300 hover:text-accent transition-colors">Hire Developers</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Schedule Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Developers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/for-developers" className="text-gray-300 hover:text-accent transition-colors">Join Our Network</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-accent transition-colors">Application Process</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Get Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:hello@hirecirkit.com" className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors">
                <Mail size={16} />
                <span className="text-sm">hello@hirecirkit.com</span>
              </a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            ⚡ © 2025 Hire CirKit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-300 hover:text-accent text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-300 hover:text-accent text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

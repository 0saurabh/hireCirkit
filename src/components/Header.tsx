import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
              <span className="text-white font-bold text-lg">HC</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Hire CirKit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/for-clients" 
              className={`relative group px-2 py-1 rounded-md transition-all duration-300 font-medium ${
                isActive('/for-clients') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              For Clients
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            <Link 
              to="/for-developers" 
              className={`relative group px-2 py-1 rounded-md transition-all duration-300 font-medium ${
                isActive('/for-developers') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              For Developers
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            <Link 
              to="/how-it-works" 
              className={`relative group px-2 py-1 rounded-md transition-all duration-300 font-medium ${
                isActive('/how-it-works') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              How It Works
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <Link 
              to="/about" 
              className={`relative group px-2 py-1 rounded-md transition-all duration-300 font-medium ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              About
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <Link 
              to="/contact" 
              className={`relative group px-2 py-1 rounded-md transition-all duration-300 font-medium ${
                isActive('/contact') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              Contact
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/for-developers">
              <Button 
                variant="outline" 
                className="group border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm font-medium"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">👨‍💻</span>
                Join as Developer
              </Button>
            </Link>
            <Link to="/for-clients">
              <Button 
                className="group bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/25 font-medium"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">💼</span>
                Hire Talent
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 transition-transform duration-200 hover:scale-110" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/for-clients" 
                className="text-gray-700 hover:text-primary transition-all duration-300 py-2 px-4 rounded-md hover:bg-primary/5 font-medium"
                onClick={() => setIsOpen(false)}
              >
                For Clients
              </Link>
              <Link 
                to="/for-developers" 
                className="text-gray-700 hover:text-primary transition-all duration-300 py-2 px-4 rounded-md hover:bg-primary/5 font-medium"
                onClick={() => setIsOpen(false)}
              >
                For Developers
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-700 hover:text-primary transition-all duration-300 py-2 px-4 rounded-md hover:bg-primary/5 font-medium"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary transition-all duration-300 py-2 px-4 rounded-md hover:bg-primary/5 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary transition-all duration-300 py-2 px-4 rounded-md hover:bg-primary/5 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Link to="/for-developers" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                  >
                    👨‍💻 Join as Developer
                  </Button>
                </Link>
                <Link to="/for-clients" onClick={() => setIsOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white transition-all duration-300 font-medium"
                  >
                    💼 Hire Talent
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

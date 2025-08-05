import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Heritage", href: "#content" },
    { label: "Structures", href: "#structures" },
    { label: "Neighborhoods", href: "#neighborhoods" },
    { label: "Visit", href: "#visit" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Chennai Heritage</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-heritage-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="heritage" 
              size="sm"
              onClick={() => window.open('https://www.google.com/flights', '_blank')}
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-heritage-blue transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="heritage" 
                size="sm" 
                className="w-fit"
                onClick={() => window.open('https://www.google.com/flights', '_blank')}
              >
                Plan Your Trip
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
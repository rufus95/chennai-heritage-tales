import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-heritage-blue text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-heritage-gold rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Chennai Heritage</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Discover the rich history and cultural heritage of Chennai, 
              from ancient temples to colonial architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#content" className="text-primary-foreground/80 hover:text-heritage-gold transition-colors">Historic Overview</a></li>
              <li><a href="#structures" className="text-primary-foreground/80 hover:text-heritage-gold transition-colors">Iconic Structures</a></li>
              <li><a href="#neighborhoods" className="text-primary-foreground/80 hover:text-heritage-gold transition-colors">Neighborhoods</a></li>
              <li><a href="#visit" className="text-primary-foreground/80 hover:text-heritage-gold transition-colors">Plan Your Visit</a></li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Neighborhoods</h3>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">Mylapore</span></li>
              <li><span className="text-primary-foreground/80">George Town</span></li>
              <li><span className="text-primary-foreground/80">Triplicane</span></li>
              <li><span className="text-primary-foreground/80">Egmore</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-heritage-gold mr-3" />
                <span className="text-primary-foreground/80">Best time: Oct - Mar</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-heritage-gold mr-3" />
                <span className="text-primary-foreground/80">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-heritage-gold mr-3" />
                <span className="text-primary-foreground/80">Tourism Helpline</span>
              </div>
            </div>
            <button
              onClick={() => window.open('https://www.google.com/flights?f=0&tfs=CBwQAhooEgoyMDI1LTA4LTA1agcIARIDTUFBcgcIARIDTUFBGAFCAQFIAQ', '_blank')}
              className="mt-4 bg-heritage-gold text-primary px-4 py-2 rounded-md hover:bg-heritage-gold/90 transition-colors font-medium"
            >
              Plan Your Visit
            </button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 Chennai Heritage. Celebrating the timeless beauty of Chennai.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-foreground/60 hover:text-heritage-gold transition-colors">Privacy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-heritage-gold transition-colors">Terms</a>
              <a href="#" className="text-primary-foreground/60 hover:text-heritage-gold transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
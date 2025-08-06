import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/kapaleeshwar-temple.jpg";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Chennai
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light animate-fade-in">
          Gateway to South India
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
          Discover the rich heritage of Madras, where ancient temples meet colonial grandeur, 
          and vibrant culture thrives along the Bay of Bengal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            variant="heritage" 
            size="lg"
            onClick={scrollToContent}
          >
            Explore Heritage
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20"
            onClick={() => document.getElementById('neighborhoods')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Neighborhoods
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
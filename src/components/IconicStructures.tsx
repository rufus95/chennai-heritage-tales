import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import kapaleeshwarImage from "@/assets/kapaleeshwar-temple.jpg";
import fortImage from "@/assets/fort-st-george-real.jpg";
import museumImage from "@/assets/government-museum-real.jpg";

const IconicStructures = () => {
  const structures = [
    {
      id: 1,
      name: "Kapaleeshwarar Temple",
      period: "7th Century CE",
      location: "Mylapore",
      description: "A magnificent Dravidian temple dedicated to Lord Shiva, showcasing exquisite South Indian architecture with its towering gopuram and intricate stone carvings.",
      image: kapaleeshwarImage,
      highlights: ["Dravidian Architecture", "Religious Heritage", "Stone Carvings"],
      link: "https://www.tamilnadutourism.com/chennai/temples/kapaleeshwarar-temple.php"
    },
    {
      id: 2,
      name: "Fort St. George",
      period: "1644 CE",
      location: "Fort District",
      description: "The first British fortress in India, now housing a museum with colonial artifacts, weapons, and historical documents from the British era.",
      image: fortImage,
      highlights: ["Colonial Architecture", "Historical Museum", "British Heritage"],
      link: "https://www.tamilnadutourism.com/attractions/forts/stgeorge-fort.php"
    },
    {
      id: 3,
      name: "Government Museum",
      period: "1851 CE",
      location: "Egmore",
      description: "One of India's oldest museums featuring Indo-Saracenic architecture, housing an exceptional collection of art, archaeology, and natural history.",
      image: museumImage,
      highlights: ["Indo-Saracenic Style", "Art Collection", "Archaeological Treasures"],
      link: "https://www.govtmuseumchennai.org/home"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Iconic Structures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Chennai's architectural marvels that tell the story of centuries of cultural evolution, 
            from ancient Tamil temples to colonial monuments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {structures.map((structure, index) => (
            <Card key={structure.id} className="group overflow-hidden hover:shadow-cultural transition-all duration-500 hover:-translate-y-4">
              <div className="relative overflow-hidden">
                <img 
                  src={structure.image} 
                  alt={structure.id === 2 ? "Fort St. George colonial architecture with classical columns and Indo-European design" : 
                       structure.id === 3 ? "Government Museum's red brick Indo-Saracenic architecture with arched entrances and Museum Theatre" : 
                       structure.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-heritage-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {structure.period}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-4 h-4 text-heritage-orange mr-2" />
                  <span className="text-sm text-muted-foreground">{structure.location}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-heritage-blue transition-colors">
                  {structure.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {structure.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {structure.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <Button asChild variant="outline" className="w-full group-hover:bg-heritage-blue group-hover:text-primary-foreground group-hover:border-heritage-blue transition-all">
                  <a href={structure.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IconicStructures;
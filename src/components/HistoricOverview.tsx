import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Users, Building } from "lucide-react";

const HistoricOverview = () => {
  const highlights = [
    {
      icon: Clock,
      title: "Ancient Origins",
      description: "Founded over 2000 years ago, Chennai has been a major cultural and trading hub since ancient times."
    },
    {
      icon: Building,
      title: "Colonial Legacy",
      description: "Home to Fort St. George, the first British fortress in India, built in 1644."
    },
    {
      icon: Users,
      title: "Cultural Melting Pot",
      description: "A vibrant blend of Tamil heritage, Dravidian architecture, and modern cosmopolitan culture."
    },
    {
      icon: MapPin,
      title: "Gateway City",
      description: "Known as the 'Gateway to South India' and the 'Detroit of India' for its automotive industry."
    }
  ];

  return (
    <section id="content" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A City Steeped in History
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From its origins as a collection of fishing villages to becoming the capital of Tamil Nadu, 
            Chennai's story spans millennia of cultural evolution, colonial influence, and modern transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="group hover:shadow-cultural transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-warm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">The Journey Through Time</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-heritage-gold pl-6">
                <h4 className="text-xl font-semibold text-heritage-blue mb-2">1st Century CE</h4>
                <p className="text-muted-foreground">Ancient port city mentioned in Roman texts as a major trading center.</p>
              </div>
              <div className="border-l-4 border-heritage-orange pl-6">
                <h4 className="text-xl font-semibold text-heritage-blue mb-2">1644</h4>
                <p className="text-muted-foreground">British East India Company establishes Fort St. George, marking the beginning of colonial Chennai.</p>
              </div>
              <div className="border-l-4 border-heritage-red pl-6">
                <h4 className="text-xl font-semibold text-heritage-blue mb-2">1947</h4>
                <p className="text-muted-foreground">India gains independence, and Madras becomes the capital of Tamil Nadu state.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-heritage-blue mb-2">1996</h4>
                <p className="text-muted-foreground">City renamed to Chennai, honoring its Tamil heritage and identity.</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-12">
            <Card className="shadow-warm">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-heritage-blue">Did You Know?</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-heritage-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chennai's Marina Beach is the second longest urban beach in the world.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-heritage-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    The city is home to the first corporation in India, established in 1688.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-heritage-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chennai is known as the "Hollywood of South India" for its thriving film industry.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricOverview;
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Users, Landmark } from "lucide-react";

const Neighborhoods = () => {
  const neighborhoods = [
    {
      id: "mylapore",
      name: "Mylapore",
      subtitle: "The Cultural Heart",
      period: "Ancient Times - Present",
      description: "One of Chennai's oldest neighborhoods, Mylapore is the cultural and spiritual center of the city. Home to the famous Kapaleeshwarar Temple and San Thome Cathedral.",
      history: "Mylapore derives its name from 'Mayil' (peacock) and 'pur' (town), literally meaning 'town of peacocks'. This ancient settlement has been mentioned in texts dating back to the 1st century CE. The area gained prominence as a major trading port and later became a center of Christian activity when St. Thomas the Apostle arrived here.",
      highlights: [
        "Kapaleeshwarar Temple - Ancient Dravidian architecture",
        "San Thome Cathedral - Built over St. Thomas's tomb",
        "Mylapore Tank - Historic temple tank",
        "Traditional Tamil Brahmin houses - Architectural heritage"
      ],
      modernSignificance: "Today, Mylapore remains a vibrant cultural hub hosting classical music festivals, traditional dance performances, and religious celebrations that attract visitors from around the world.",
      icon: Landmark
    },
    {
      id: "georgetown",
      name: "George Town",
      subtitle: "Colonial Commercial Hub",
      period: "1640 - Present",
      description: "The original British settlement and India's first corporate town, George Town is where Chennai's modern history began with Fort St. George as its centerpiece.",
      history: "Established by the British East India Company in 1640, George Town was India's first municipal corporation. Named after King George V, this area developed around Fort St. George and became the administrative and commercial center of British Madras. The neighborhood features a unique blend of colonial architecture and traditional Indian marketplaces.",
      highlights: [
        "Fort St. George - First British fortress in India",
        "High Court of Madras - Indo-Saracenic architecture",
        "Parry's Corner - Historic commercial district",
        "Armenian Church - Oldest church in the city"
      ],
      modernSignificance: "George Town continues to be a major commercial center, home to wholesale markets, import-export businesses, and government offices, maintaining its role as the city's business heart.",
      icon: Clock
    },
    {
      id: "triplicane",
      name: "Triplicane",
      subtitle: "Royal Heritage Quarter",
      period: "Medieval Times - Present",
      description: "A historically rich neighborhood that was once home to the Nawabs of Carnatic and features beautiful Indo-Islamic architecture alongside South Indian temples.",
      history: "Triplicane, meaning 'three ponds' in Tamil, was historically significant as the residence of the Nawabs of Carnatic. The area developed under both Islamic and British influence, creating a unique architectural landscape. It's also famous for being the birthplace of former President Dr. A.P.J. Abdul Kalam.",
      highlights: [
        "Wallajah Big Mosque - Beautiful Indo-Islamic architecture",
        "Parthasarathy Temple - Ancient Vaishnavite temple",
        "Humayun's Tomb - Mughal architectural influence",
        "Dr. A.P.J. Abdul Kalam's birthplace"
      ],
      modernSignificance: "Triplicane today is known for its multicultural harmony, educational institutions, and as a center for Islamic culture in Chennai while maintaining its diverse heritage.",
      icon: Users
    },
    {
      id: "egmore",
      name: "Egmore",
      subtitle: "Victorian Elegance",
      period: "19th Century - Present",
      description: "Developed during the British colonial period, Egmore showcases Victorian and Indo-Saracenic architecture with museums, galleries, and educational institutions.",
      history: "Egmore emerged as a prominent area during the late 19th century under British rule. The name possibly derives from 'Ezhumbur', meaning 'seven villages'. The area was developed as an extension of the colonial administrative zone, featuring grand public buildings and institutions that reflected the architectural ambitions of the British Raj.",
      highlights: [
        "Government Museum - Indo-Saracenic architecture marvel",
        "Connemara Public Library - Victorian Gothic style",
        "National Art Gallery - Classical colonial design",
        "Egmore Railway Station - Heritage transport hub"
      ],
      modernSignificance: "Egmore remains an important cultural and educational center, housing some of Chennai's most important museums, libraries, and academic institutions while preserving its colonial character.",
      icon: MapPin
    }
  ];

  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoods[0]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Historic Neighborhoods
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the unique character and rich history of Chennai's diverse neighborhoods, 
            each telling its own story of cultural evolution and architectural heritage.
          </p>
        </div>

        <Tabs defaultValue="mylapore" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {neighborhoods.map((neighborhood) => (
              <TabsTrigger 
                key={neighborhood.id} 
                value={neighborhood.id}
                className="data-[state=active]:bg-heritage-blue data-[state=active]:text-primary-foreground"
              >
                {neighborhood.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {neighborhoods.map((neighborhood) => (
            <TabsContent key={neighborhood.id} value={neighborhood.id}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="shadow-cultural">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mr-4">
                          <neighborhood.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-foreground">{neighborhood.name}</h3>
                          <p className="text-lg text-heritage-orange font-medium">{neighborhood.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <span className="inline-block bg-heritage-gold text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                          {neighborhood.period}
                        </span>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {neighborhood.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-heritage-blue mb-3">Historical Background</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {neighborhood.history}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-heritage-blue mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {neighborhood.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-heritage-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-heritage-blue mb-2">Modern Significance</h4>
                        <p className="text-muted-foreground">
                          {neighborhood.modernSignificance}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="shadow-warm">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-heritage-blue mb-4">Quick Facts</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-heritage-orange mr-3" />
                          <span className="text-sm text-muted-foreground">Established: {neighborhood.period.split(' - ')[0]}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-heritage-orange mr-3" />
                          <span className="text-sm text-muted-foreground">Central Chennai</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-heritage-orange mr-3" />
                          <span className="text-sm text-muted-foreground">Mixed Cultural Heritage</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-warm text-primary-foreground">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Best Time to Visit</h4>
                      <p className="text-sm opacity-90">
                        Early morning (6-9 AM) or evening (4-7 PM) for comfortable weather and golden light photography.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Neighborhoods;
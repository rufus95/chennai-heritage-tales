import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HistoricOverview from "@/components/HistoricOverview";
import IconicStructures from "@/components/IconicStructures";
import Neighborhoods from "@/components/Neighborhoods";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HistoricOverview />
      <div id="structures">
        <IconicStructures />
      </div>
      <div id="neighborhoods">
        <Neighborhoods />
      </div>
      <div id="visit">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

import { Clock, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  {
    icon: Zap,
    title: "Flash Sale",
    discount: "Up to 50% OFF",
    description: "Limited time offer on selected items",
    buttonText: "Shop Flash Sale",
    color: "from-secondary to-secondary-hover",
    textColor: "text-white"
  },
  {
    icon: Gift,
    title: "Bundle Deals",
    discount: "Buy 2 Get 1 Free",
    description: "Mix and match any products",
    buttonText: "Shop Bundles",
    color: "from-primary to-primary-hover",
    textColor: "text-white"
  },
  {
    icon: Clock,
    title: "Weekend Special",
    discount: "25% OFF",
    description: "This weekend only - use code WEEKEND25",
    buttonText: "Get Code",
    color: "from-success to-success/80",
    textColor: "text-white"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our exclusive deals and limited-time offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className={`bg-gradient-to-br ${offer.color} p-8 text-center ${offer.textColor}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <div className="text-2xl md:text-3xl font-bold mb-2">{offer.discount}</div>
                  <p className="text-sm opacity-90 mb-6">{offer.description}</p>
                  <Button 
                    variant="secondary"
                    className="bg-white text-primary hover:bg-gray-50 font-semibold"
                  >
                    {offer.buttonText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Banner Offer */}
        <Card className="overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20">
          <CardContent className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  🎉 Grand Opening Sale
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Celebrate with us! Get exclusive discounts on your first order
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">40%</div>
                    <div className="text-sm text-muted-foreground">OFF</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">+</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">Free Shipping</div>
                    <div className="text-sm text-muted-foreground">On orders $75+</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="btn-shop text-lg px-8 py-3">
                  Claim Offer
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Use code: <span className="font-mono font-bold text-primary">GRAND40</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SpecialOffers;
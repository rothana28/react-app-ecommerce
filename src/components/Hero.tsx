import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Lifestyle furniture collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Style Meets
            <span className="block text-secondary">Comfort</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover our curated collection of modern furniture and decor that transforms your space into a sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero text-lg px-8 py-4">
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary bg-primary/10 hover:bg-primary/20 hover:text-primary hover:border-primary text-lg px-8 py-4"
              asChild
            >
              <a href="/learn-more">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Award, Heart, Users, Globe, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About StyleHub</h1>
            <p className="text-lg text-muted-foreground">
              We're more than just a store – we're a community of style enthusiasts 
              dedicated to bringing you the best products at unbeatable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, StyleHub began with a simple vision: to make quality, 
                  stylish products accessible to everyone. What started as a small online 
                  boutique has grown into a thriving marketplace serving customers worldwide.
                </p>
                <p>
                  We believe that great style shouldn't come with a hefty price tag. That's 
                  why we've built relationships with trusted suppliers and brands to bring 
                  you curated collections that combine quality, affordability, and trend-forward 
                  design.
                </p>
                <p>
                  Today, StyleHub is home to thousands of products across multiple categories, 
                  from fashion and accessories to home goods and electronics. Our mission remains 
                  the same: to help you express your unique style while making shopping easy, 
                  enjoyable, and affordable.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-success mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at StyleHub
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our top priority. We're committed to providing 
                  exceptional service and support at every step of your shopping journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  Every product in our catalog is carefully selected and vetted to meet 
                  our high standards for quality, durability, and design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-4">
                  <Sparkles className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly evolve to bring you the latest trends, features, and 
                  shopping experiences that make your life easier and more stylish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental impact through eco-friendly 
                  packaging, sustainable sourcing, and carbon-neutral shipping.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We're building a vibrant community of style enthusiasts who inspire 
                  each other and share their passion for great design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
                <p className="text-muted-foreground">
                  Your privacy and security matter to us. We use industry-leading 
                  encryption and never share your personal information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the StyleHub Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover thousands of products, exclusive deals, and style inspiration. 
              Start your journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/new-arrivals">Shop New Arrivals</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/customer-service">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

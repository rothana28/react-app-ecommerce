import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Trust Indicators */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-white/70">On orders over $50</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Secure Payment</div>
                <div className="text-sm text-white/70">SSL encrypted checkout</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-success rounded-full">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Easy Returns</div>
                <div className="text-sm text-white/70">30-day return policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">StyleHub</h3>
            <p className="text-white/70 mb-6 max-w-md">
              Your destination for modern, stylish, and affordable products. 
              We curate the best items to help you express your unique style.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">hello@stylehub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">1-800-STYLE-HB</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sale</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/70">
              <span>&copy; 2024 StyleHub. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/70 mr-2">We accept:</span>
              <div className="flex gap-1">
                {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                  <div key={method} className="w-8 h-5 bg-white/10 rounded text-xs flex items-center justify-center">
                    {method === "MC" ? "MC" : method.slice(0, 2)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div>Free shipping on orders over $50</div>
          <div className="flex items-center space-x-4">
            <a href="/customer-service" className="hover:text-foreground transition-colors cursor-pointer">Customer Service</a>
            <a href="/track-order" className="hover:text-foreground transition-colors cursor-pointer">Track Your Order</a>
            <span>Size Guide</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <h1 className="text-2xl font-bold text-gradient">StyleHub</h1>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/new-arrivals" className="text-foreground hover:text-primary transition-colors font-medium">New Arrivals</a>
            <a href="/women" className="text-foreground hover:text-primary transition-colors font-medium">Women</a>
            <a href="/men" className="text-foreground hover:text-primary transition-colors font-medium">Men</a>
            <a href="/accessories" className="text-foreground hover:text-primary transition-colors font-medium">Accessories</a>
            <a href="/sale" className="text-foreground hover:text-primary transition-colors font-medium">Sale</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative max-w-md">
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-80 bg-muted border-0 focus:ring-2 focus:ring-primary/20"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative" asChild>
              <a href="/favorites">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </a>
            </Button>
            
            {/* Account */}
            <Button variant="ghost" size="sm" asChild>
              <a href="/profile">
                <User className="h-5 w-5" />
              </a>
            </Button>
            
            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative" asChild>
              <a href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
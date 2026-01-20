import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productMug from "@/assets/product-mug.jpg";
import productBackpack from "@/assets/product-backpack.jpg";
import productSweater from "@/assets/product-sweater.jpg";

const products = [
  {
    id: 1,
    title: "Minimalist Coffee Mug",
    price: 24.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 127,
    image: productMug,
    badge: "Best Seller",
    badgeColor: "bg-primary"
  },
  {
    id: 2,
    title: "Urban Leather Backpack",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 89,
    image: productBackpack,
    badge: "Sale",
    badgeColor: "bg-secondary"
  },
  {
    id: 3,
    title: "Cozy Knit Sweater",
    price: 65.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    image: productSweater,
    badge: "New",
    badgeColor: "bg-success"
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    badge: "Limited",
    badgeColor: "bg-destructive"
  },
  {
    id: 5,
    title: "Bamboo Phone Case",
    price: 32.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=500&q=80",
    badge: "Eco-Friendly",
    badgeColor: "bg-success"
  },
  {
    id: 6,
    title: "Smart Watch Band",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=500&q=80",
    badge: "Hot Deal",
    badgeColor: "bg-secondary"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-card-image group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
                
                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="btn-shop">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-shop text-lg px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
import { Heart, Trash2, ShoppingCart, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Favorites = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const favoriteProducts = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      category: "Jackets",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=600&fit=crop",
      category: "Accessories",
      inStock: true,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Wool Blend Sweater",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
      category: "Knitwear",
      inStock: false,
      rating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-12 w-12 text-primary fill-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Favorites</h1>
            <p className="text-muted-foreground text-lg">
              {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* View Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-muted-foreground mb-6">Start adding items you love!</p>
            <Button asChild>
              <a href="/new-arrivals">Browse Products</a>
            </Button>
          </div>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-4"
          }>
            {favoriteProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                        Sale
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "text-primary" : "text-muted"}>
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;

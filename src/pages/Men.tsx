import { Search, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Men = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "All", count: 142 },
    { name: "T-Shirts & Polos", count: 48 },
    { name: "Shirts", count: 35 },
    { name: "Pants & Jeans", count: 32 },
    { name: "Jackets & Coats", count: 21 },
    { name: "Shoes", count: 28 },
  ];

  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 119.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "Sale",
      category: "Jackets"
    },
    {
      id: 2,
      name: "Cotton Polo Shirt",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop",
      rating: 4.5,
      reviews: 203,
      badge: "New",
      category: "Polos"
    },
    {
      id: 3,
      name: "Slim Fit Chinos",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 187,
      category: "Pants"
    },
    {
      id: 4,
      name: "Leather Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 142,
      badge: "Trending",
      category: "Shoes"
    },
    {
      id: 5,
      name: "Wool Blend Coat",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 98,
      badge: "Premium",
      category: "Coats"
    },
    {
      id: 6,
      name: "Oxford Dress Shirt",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 134,
      category: "Shirts"
    },
    {
      id: 7,
      name: "Graphic T-Shirt",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      rating: 4.4,
      reviews: 267,
      badge: "Sale",
      category: "T-Shirts"
    },
    {
      id: 8,
      name: "Dark Wash Jeans",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1542272454315-7f6d5b910b79?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 221,
      category: "Jeans"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-secondary/10 to-primary/10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Men's Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of men's fashion, from classic essentials to contemporary styles
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 shrink-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors flex items-center justify-between"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-muted-foreground">({category.count})</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4">Filter by Price</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Under $50</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$50 - $100</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$100 - $200</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Over $200</span>
                    </label>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 border rounded-md hover:bg-accent transition-colors text-sm"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search men's products..."
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} of 142 products
              </p>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3">
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      size="sm"
                      className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Add to Cart
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;

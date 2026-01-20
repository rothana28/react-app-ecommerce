import { Search, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Electronics = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "All", count: 312 },
    { name: "Smartphones & Tablets", count: 78 },
    { name: "Laptops & Computers", count: 64 },
    { name: "Audio & Headphones", count: 56 },
    { name: "Cameras & Photography", count: 42 },
    { name: "Smart Home", count: 38 },
    { name: "Gaming", count: 34 },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      price: 349.99,
      originalPrice: 449.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 892,
      badge: "Sale",
      category: "Audio"
    },
    {
      id: 2,
      name: "4K Action Camera",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 456,
      badge: "New",
      category: "Cameras"
    },
    {
      id: 3,
      name: "Gaming Mechanical Keyboard",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 634,
      badge: "Trending",
      category: "Gaming"
    },
    {
      id: 4,
      name: "Smart Watch Pro",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 523,
      badge: "Premium",
      category: "Wearables"
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=600&fit=crop",
      rating: 4.5,
      reviews: 789,
      badge: "Sale",
      category: "Audio"
    },
    {
      id: 6,
      name: "Drone with 4K Camera",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 267,
      badge: "Premium",
      category: "Cameras"
    },
    {
      id: 7,
      name: "Smart Home Hub",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1558089687-e5e5e00c6d6b?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 412,
      badge: "New",
      category: "Smart Home"
    },
    {
      id: 8,
      name: "Wireless Gaming Mouse",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 534,
      category: "Gaming"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Electronics</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest in technology with our premium electronics collection
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
                      <span className="text-sm">Under $100</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$100 - $300</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$300 - $500</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Over $500</span>
                    </label>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4">Brand</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">TechPro</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">SmartLife</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">GamerZone</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">AudioMax</span>
                    </label>
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
                  placeholder="Search electronics..."
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
                Showing {products.length} of 312 products
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

export default Electronics;

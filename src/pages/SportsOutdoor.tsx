import { Search, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const SportsOutdoor = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "All", count: 256 },
    { name: "Running & Training", count: 68 },
    { name: "Outdoor Gear", count: 52 },
    { name: "Camping & Hiking", count: 45 },
    { name: "Cycling", count: 38 },
    { name: "Water Sports", count: 29 },
    { name: "Team Sports", count: 24 },
  ];

  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 129.99,
      originalPrice: 169.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 324,
      badge: "Sale",
      category: "Running"
    },
    {
      id: 2,
      name: "Hiking Backpack 40L",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 287,
      badge: "Premium",
      category: "Outdoor Gear"
    },
    {
      id: 3,
      name: "Camping Tent 4-Person",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 198,
      badge: "New",
      category: "Camping"
    },
    {
      id: 4,
      name: "Mountain Bike",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 156,
      badge: "Premium",
      category: "Cycling"
    },
    {
      id: 5,
      name: "Yoga Mat & Blocks Set",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 412,
      category: "Training"
    },
    {
      id: 6,
      name: "Kayak Paddle",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 134,
      badge: "Trending",
      category: "Water Sports"
    },
    {
      id: 7,
      name: "Soccer Ball Pro",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=500&h=600&fit=crop",
      rating: 4.5,
      reviews: 289,
      badge: "Sale",
      category: "Team Sports"
    },
    {
      id: 8,
      name: "Trail Running Jacket",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 267,
      category: "Outdoor Gear"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-red-500/10 to-pink-500/10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports & Outdoor</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gear up for your next adventure with our premium sports and outdoor equipment
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
                  <h3 className="font-semibold text-lg mb-4">Activity Level</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Beginner</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Intermediate</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Advanced</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Professional</span>
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
                  placeholder="Search sports & outdoor products..."
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
                Showing {products.length} of 256 products
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

export default SportsOutdoor;

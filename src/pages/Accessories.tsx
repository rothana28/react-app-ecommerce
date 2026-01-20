import { Search, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Accessories = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "All", count: 184 },
    { name: "Bags & Backpacks", count: 52 },
    { name: "Jewelry", count: 41 },
    { name: "Watches", count: 28 },
    { name: "Belts", count: 23 },
    { name: "Hats & Caps", count: 19 },
    { name: "Sunglasses", count: 21 },
  ];

  const products = [
    {
      id: 1,
      name: "Leather Crossbody Bag",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 234,
      badge: "Sale",
      category: "Bags"
    },
    {
      id: 2,
      name: "Gold Chain Necklace",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 156,
      badge: "New",
      category: "Jewelry"
    },
    {
      id: 3,
      name: "Classic Wristwatch",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 312,
      badge: "Premium",
      category: "Watches"
    },
    {
      id: 4,
      name: "Aviator Sunglasses",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 189,
      badge: "Trending",
      category: "Sunglasses"
    },
    {
      id: 5,
      name: "Canvas Backpack",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
      rating: 4.5,
      reviews: 276,
      category: "Bags"
    },
    {
      id: 6,
      name: "Leather Belt",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 142,
      category: "Belts"
    },
    {
      id: 7,
      name: "Baseball Cap",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop",
      rating: 4.4,
      reviews: 198,
      badge: "Sale",
      category: "Hats"
    },
    {
      id: 8,
      name: "Silver Bracelet",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 167,
      category: "Jewelry"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessories Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete your look with our premium selection of bags, jewelry, watches, and more
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
                  <h3 className="font-semibold text-lg mb-4">Material</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Leather</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Metal</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Canvas</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Plastic</span>
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
                  placeholder="Search accessories..."
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
                Showing {products.length} of 184 products
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

export default Accessories;

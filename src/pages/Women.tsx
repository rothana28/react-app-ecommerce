import { Search, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Women = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "All", count: 156 },
    { name: "Dresses", count: 45 },
    { name: "Tops & Blouses", count: 38 },
    { name: "Pants & Jeans", count: 29 },
    { name: "Skirts", count: 18 },
    { name: "Outerwear", count: 26 },
  ];

  const products = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Sale",
      category: "Dresses"
    },
    {
      id: 2,
      name: "Silk Blouse",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1564257577154-75fdfc0cbb9f?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 89,
      badge: "New",
      category: "Tops"
    },
    {
      id: 3,
      name: "High-Waist Jeans",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 203,
      category: "Pants"
    },
    {
      id: 4,
      name: "Pleated Midi Skirt",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=600&fit=crop",
      rating: 4.5,
      reviews: 67,
      badge: "Trending",
      category: "Skirts"
    },
    {
      id: 5,
      name: "Wool Coat",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Outerwear"
    },
    {
      id: 6,
      name: "Linen Summer Top",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&h=600&fit=crop",
      rating: 4.4,
      reviews: 92,
      badge: "Sale",
      category: "Tops"
    },
    {
      id: 7,
      name: "Evening Gown",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 78,
      badge: "Premium",
      category: "Dresses"
    },
    {
      id: 8,
      name: "Wide Leg Pants",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 134,
      category: "Pants"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Women's Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest trends in women's fashion, from elegant dresses to everyday essentials
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
                  placeholder="Search women's products..."
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
                Showing {products.length} of 156 products
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

export default Women;

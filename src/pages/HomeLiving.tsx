import { useState } from "react";
import { Search, SlidersHorizontal, Grid3x3, List, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Modern Floor Lamp",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
    category: "Lighting",
    rating: 4.8,
    reviews: 156,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Decorative Throw Pillows Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80",
    category: "Decor",
    rating: 4.6,
    reviews: 89,
    badge: "New",
  },
  {
    id: 3,
    name: "Minimalist Wall Clock",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=500&q=80",
    category: "Decor",
    rating: 4.7,
    reviews: 124,
  },
  {
    id: 4,
    name: "Ceramic Vase Collection",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=500&q=80",
    category: "Decor",
    rating: 4.9,
    reviews: 203,
    badge: "Sale",
  },
  {
    id: 5,
    name: "Cozy Throw Blanket",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1585910604959-d7e1cf9c2636?auto=format&fit=crop&w=500&q=80",
    category: "Textiles",
    rating: 4.8,
    reviews: 178,
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "Scented Candle Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602874801006-e26af2a2d6e3?auto=format&fit=crop&w=500&q=80",
    category: "Decor",
    rating: 4.5,
    reviews: 92,
  },
  {
    id: 7,
    name: "Storage Basket Set",
    price: 39.99,
    originalPrice: 54.99,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=500&q=80",
    category: "Storage",
    rating: 4.6,
    reviews: 145,
    badge: "Sale",
  },
  {
    id: 8,
    name: "Table Lamp with USB Port",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=500&q=80",
    category: "Lighting",
    rating: 4.7,
    reviews: 167,
    badge: "New",
  },
];

const HomeLiving = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Home & Living
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Transform your space with our curated collection of home essentials and decor
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search home & living products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="lighting">Lighting</SelectItem>
                <SelectItem value="decor">Decor</SelectItem>
                <SelectItem value="textiles">Textiles</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <div className="hidden sm:flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" : "space-y-4"}>
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-2 left-2 bg-primary">
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <h3 className="font-semibold mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLiving;

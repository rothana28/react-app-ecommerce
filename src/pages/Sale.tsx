import { Search, Grid, List, SlidersHorizontal, Percent, Clock, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Sale = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "All Sale Items", count: 342 },
    { name: "Up to 30% Off", count: 156 },
    { name: "Up to 50% Off", count: 98 },
    { name: "Up to 70% Off", count: 64 },
    { name: "Clearance", count: 24 },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Leather Jacket",
      price: 149.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 234,
      discount: 50,
      category: "Outerwear",
      badge: "50% OFF"
    },
    {
      id: 2,
      name: "Designer Handbag",
      price: 89.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 312,
      discount: 50,
      category: "Accessories",
      badge: "50% OFF"
    },
    {
      id: 3,
      name: "Casual Sneakers",
      price: 59.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 189,
      discount: 40,
      category: "Footwear",
      badge: "40% OFF"
    },
    {
      id: 4,
      name: "Summer Dress",
      price: 39.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 156,
      discount: 50,
      category: "Women",
      badge: "50% OFF"
    },
    {
      id: 5,
      name: "Denim Jeans",
      price: 44.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
      rating: 4.5,
      reviews: 276,
      discount: 50,
      category: "Men",
      badge: "50% OFF"
    },
    {
      id: 6,
      name: "Wool Sweater",
      price: 34.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 198,
      discount: 50,
      category: "Clothing",
      badge: "50% OFF"
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 199.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 412,
      discount: 50,
      category: "Electronics",
      badge: "50% OFF"
    },
    {
      id: 8,
      name: "Sunglasses",
      price: 69.99,
      originalPrice: 139.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=600&fit=crop",
      rating: 4.6,
      reviews: 167,
      discount: 50,
      category: "Accessories",
      badge: "50% OFF"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-destructive/90 via-destructive to-destructive/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Percent className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Limited Time Offer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Up to 70% OFF</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Don't miss out on incredible deals across all categories. Sale ends soon!
          </p>
          <div className="flex items-center justify-center gap-2 text-white">
            <Clock className="h-5 w-5" />
            <span className="text-lg font-semibold">Ends in: 2 days 14 hours</span>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <TrendingDown className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold">Up to 70%</p>
                <p className="text-sm text-muted-foreground">Maximum Discount</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Percent className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold">342+</p>
                <p className="text-sm text-muted-foreground">Items on Sale</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold">Limited Time</p>
                <p className="text-sm text-muted-foreground">Don't Miss Out</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-64 shrink-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Discount Range</h3>
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
                  <h3 className="font-semibold text-lg mb-4">Category</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Women's Fashion</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Men's Fashion</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Accessories</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Footwear</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Electronics</span>
                    </label>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4">Size</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">XS</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">S</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">M</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">L</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">XL</span>
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
                  placeholder="Search sale items..."
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
                Showing {products.length} of 342 sale items
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
                    <Badge className="absolute top-3 left-3 bg-destructive text-white hover:bg-destructive">
                      {product.badge}
                    </Badge>
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
                      <span className="font-bold text-lg text-destructive">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                      <Badge variant="secondary" className="ml-auto">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </Badge>
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

export default Sale;
import { useState } from "react";
import { Star, ShoppingCart, Heart, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import productMug from "@/assets/product-mug.jpg";
import productBackpack from "@/assets/product-backpack.jpg";
import productSweater from "@/assets/product-sweater.jpg";

const newArrivals = [
  {
    id: 1,
    title: "Minimalist Coffee Mug",
    price: 24.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 127,
    image: productMug,
    badge: "Just In",
    badgeColor: "bg-primary",
    category: "Home",
    colors: ["White", "Black", "Gray"]
  },
  {
    id: 2,
    title: "Urban Leather Backpack",
    price: 89.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: productBackpack,
    badge: "Trending",
    badgeColor: "bg-secondary",
    category: "Accessories",
    colors: ["Black", "Brown", "Navy"]
  },
  {
    id: 3,
    title: "Cozy Knit Sweater",
    price: 65.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    image: productSweater,
    badge: "Popular",
    badgeColor: "bg-success",
    category: "Fashion",
    colors: ["Beige", "Navy", "Burgundy"]
  },
  {
    id: 4,
    title: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    badge: "Premium",
    badgeColor: "bg-destructive",
    category: "Electronics",
    colors: ["Black", "White", "Silver"]
  },
  {
    id: 5,
    title: "Sustainable Bamboo Phone Case",
    price: 32.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=500&q=80",
    badge: "Eco",
    badgeColor: "bg-success",
    category: "Accessories",
    colors: ["Natural", "Dark"]
  },
  {
    id: 6,
    title: "Smart Fitness Watch Band",
    price: 39.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=500&q=80",
    badge: "Tech",
    badgeColor: "bg-primary",
    category: "Electronics",
    colors: ["Black", "Navy", "Pink"]
  },
  {
    id: 7,
    title: "Minimalist Desk Lamp",
    price: 79.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    badge: "Design",
    badgeColor: "bg-secondary",
    category: "Home",
    colors: ["White", "Black"]
  },
  {
    id: 8,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: null,
    rating: 4.3,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    badge: "Organic",
    badgeColor: "bg-success",
    category: "Fashion",
    colors: ["White", "Black", "Gray", "Navy"]
  }
];

const NewArrivals = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Fashion', 'Home', 'Electronics', 'Accessories'];

  const filteredProducts = newArrivals.filter(product => {
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              New Arrivals
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest additions to our collection. Fresh styles, innovative designs, and trending products just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-80">
              <Input
                type="search"
                placeholder="Search new arrivals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Best Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex border border-border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {sortedProducts.length} of {newArrivals.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
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
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    
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
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Colors */}
                    <div className="flex items-center gap-1 mb-3">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-border bg-muted"
                          title={color}
                        ></div>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-muted-foreground ml-1">
                          +{product.colors.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-foreground">
                        ${product.price}
                      </span>
                      
                      <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="flex gap-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <Badge className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs`}>
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">
                          {product.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                          {product.title}
                        </h3>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
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

                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-sm text-muted-foreground">Colors:</span>
                      {product.colors.map((color, index) => (
                        <span key={index} className="text-sm text-foreground">
                          {color}{index < product.colors.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        ${product.price}
                      </span>
                      
                      <Button className="btn-shop">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Women's Fashion",
    description: "Discover our latest collection",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80",
    color: "from-pink-500/20 to-purple-500/20",
    link: "/women"
  },
  {
    title: "Men's Style",
    description: "Modern essentials for men",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80",
    color: "from-blue-500/20 to-teal-500/20",
    link: "/men"
  },
  {
    title: "Accessories",
    description: "Complete your look",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    color: "from-amber-500/20 to-orange-500/20",
    link: "/accessories"
  },
  {
    title: "Home & Living",
    description: "Transform your space",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
    color: "from-green-500/20 to-emerald-500/20",
    link: "/home-living"
  },
  {
    title: "Electronics",
    description: "Latest tech essentials",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=500&q=80",
    color: "from-indigo-500/20 to-blue-500/20",
    link: "/electronics"
  },
  {
    title: "Sports & Outdoor",
    description: "Active lifestyle gear",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
    color: "from-red-500/20 to-pink-500/20",
    link: "/sports-outdoor"
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every lifestyle and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group category-card relative overflow-hidden h-64 lg:h-80 block"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-80 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-4 text-sm lg:text-base">
                  {category.description}
                </p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-medium">Shop Now</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
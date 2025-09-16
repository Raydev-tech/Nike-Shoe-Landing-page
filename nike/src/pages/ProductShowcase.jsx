import { useState } from "react";
import { Heart, Eye, X } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Air Max 270",
    category: "Men's Shoes",
    price: "$150",
    image: "https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.webp?a=1&b=1&s=612x612&w=0&k=20&c=ULRau7DB-Wrr9i0GZbQoDXSDjDRDc4H-hfIFWgL5PIY=",
    description:
      "The Nike Air Max 270 delivers visible cushioning under every step with a bold look inspired by Air Max icons.",
  },
  {
    id: 2,
    name: "React Infinity Run",
    category: "Running Shoes",
    price: "$160",
    image: "https://images.unsplash.com/photo-1657109710300-58143fbefe26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVhY3QlMjBJbmZpbml0eSUyMFJ1biUyMG5pa2UlMjBzaG9lfGVufDB8fDB8fHww",
    description:
      "Engineered for performance and comfort, the React Infinity Run keeps you moving with smooth cushioning.",
  },
  {
    id: 3,
    name: "Air Force 1",
    category: "Lifestyle",
    price: "$90",
    image: "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWlyJTIwRm9yY2UlMjAxfGVufDB8fDB8fHww",
    description:
      "A timeless classic, the Nike Air Force 1 delivers style and versatility for everyday wear.",
  },
  {
    id: 4,
    name: "Zoom Pegasus",
    category: "Running Shoes",
    price: "$120",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8fDA%3D",
    description:
      "The Zoom Pegasus is built for speed and durability, designed to elevate your running experience.",
  },
  {
    id: 5,
    name: "Dunk Low",
    category: "Lifestyle",
    price: "$100",
    image:
      "https://images.unsplash.com/photo-1623325226027-3e403fab773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fER1bmslMjBMb3d8ZW58MHx8MHx8fDA%3D",
    description:
      "The Dunk Low is a retro-inspired sneaker that blends heritage with modern street style.",
  },
  {
    id: 6,
    name: "Blazer Mid",
    category: "Lifestyle",
    price: "$100",
    image: "https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhemVyJTIwTWlkfGVufDB8fDB8fHww",
    description:
      "The Nike Blazer Mid Vintage combines old-school basketball style with modern comfort.",
  },
];

export default function ProductShowcase() {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const categories = ["All", "Men's Shoes", "Running Shoes", "Lifestyle"];

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(null);
    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Floating gradient background shapes */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="text-yellow-500">Products</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our most popular shoes designed for{" "}
            <span className="font-semibold text-yellow-500">performance</span>,{" "}
            <span className="font-semibold text-yellow-500">comfort</span>, and{" "}
            <span className="font-semibold text-yellow-500">style</span>.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-yellow-500 text-black shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="h-9 w-9 rounded-full bg-white/80 dark:bg-gray-700/80 backdrop-blur-md flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="h-9 w-9 rounded-full bg-white/80 dark:bg-gray-700/80 backdrop-blur-md flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {product.category}
                </p>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className="text-center mt-14"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="px-8 py-3 rounded-full border-2 border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
            View All Products
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-2xl w-full relative animate-fade-in"
            data-aos="zoom-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="rounded-xl object-cover w-full h-80"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedProduct.description}
                  </p>
                  <p className="text-xl font-bold text-yellow-500 mb-6">
                    {selectedProduct.price}
                  </p>
                </div>
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition cursor-pointer"
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

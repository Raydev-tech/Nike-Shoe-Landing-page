import { ArrowRight } from "lucide-react"
import ProductShowcase from "./ProductShowcase"
import About from "./About"
import Categories from "./Categories"

export default function HeroSection() {
  return (
    <>
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
        
        {/* Left Content */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            data-aos="fade-right"
          >
            Step Into
            <span className="block text-yellow-400">The Future</span>
          </h1>

          <p
            className="text-lg md:text-2xl mb-8"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Elevate your style and performance with Nike’s latest footwear,
            engineered for next-level comfort and speed.
          </p>

          {/* Buttons with staggered AOS animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Shoe Image with Background Shapes */}
        <div
          className="relative mt-10 md:mt-0 md:ml-12 flex justify-center md:justify-end w-full md:w-1/2"
          data-aos="fade-left"
        >
          {/* Animated gradient circles */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 -right-16 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

          {/* Shoe */}
          <img
            src="https://images.unsplash.com/photo-1636718282214-0b4162a154f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE5pa2UlMjBTaG9lfGVufDB8fDB8fHww"
            alt="Nike Shoe"
            className="relative w-[350px] md:w-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-float transition-transform duration-500 hover:rotate-[-12deg] hover:scale-105"
          />
        </div>
      </div>
    </section>
    <ProductShowcase />
    <About />
    <Categories />
    </>
  )
}

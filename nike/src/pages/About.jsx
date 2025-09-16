import React from "react"

export default function About() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Floating shapes */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-yellow-500">Nike</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Innovation, performance, and style — that’s what drives us at{" "}
            <span className="font-semibold text-yellow-500">Nike</span>.  
            Every shoe we design is built to push boundaries and empower athletes everywhere.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1629995022862-63cd31c6d79e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8em9vbSUyMHBlZ2FzdXMlMjBuaWtlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Nike shoes"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="space-y-6">
            <h3 className="text-2xl font-bold">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Nike, our mission is simple:{" "}
              <span className="font-semibold text-yellow-500">to bring inspiration and innovation to every athlete in the world</span>.  
              We believe that if you have a body, you are an athlete. From iconic classics to cutting-edge performance shoes, we create products that move with you.
            </p>

            <h3 className="text-2xl font-bold">Why Choose Us?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>👟 Unmatched comfort and durability</li>
              <li>⚡ Innovative designs for peak performance</li>
              <li>🌍 Commitment to sustainability</li>
              <li>🔥 Timeless style that defines culture</li>
            </ul>

            <button className="mt-6 px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all duration-300 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

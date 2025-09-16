import { Dumbbell, Footprints, Shirt } from "lucide-react"

export default function Categories() {
  const categories = [
    {
      name: "Running",
      icon: <Footprints className="h-8 w-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D", // Nike-style running shoes
    },
    {
      name: "Training",
      icon: <Dumbbell className="h-8 w-8 text-white" />,
      image:
        "https://media.istockphoto.com/id/1365886686/photo/shot-of-a-woman-working-out-with-a-kettle-bell.webp?a=1&b=1&s=612x612&w=0&k=20&c=RQZBkYSSE2bKw2YlclBywCDKm_FbYqCB13NmhNx05is=", // Training / gym
    },
    {
      name: "Lifestyle",
      icon: <Shirt className="h-8 w-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80", // Casual lifestyle sneakers
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50" id="categories">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
          data-aos="fade-up"
        >
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <div className="mb-3">{cat.icon}</div>
                <h3 className="text-2xl font-semibold">{cat.name}</h3>
                <p className="mt-2 text-sm opacity-90">
                  Explore the latest {cat.name} collection
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

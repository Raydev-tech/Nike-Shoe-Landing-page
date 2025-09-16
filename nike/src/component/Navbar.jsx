import { useState } from "react"
import { ShoppingBag, Search, User, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(3) // 🔹 Example cart count (replace with real state)

  const navLinks = [
    { label: "New & Featured", href: "/new" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Kids", href: "/kids" },
    { label: "Sale", href: "/sale" },
  ]

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm"
      data-aos="fade-down"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Nike Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-2xl font-bold text-gray-900 flex items-center gap-1">
            <svg
              width="60"
              height="22"
              viewBox="0 0 60 22"
              className="fill-current"
              data-aos="zoom-in"
            >
              <path d="M59.14 11.34c-1.65 0-2.98 1.33-2.98 2.98s1.33 2.98 2.98 2.98 2.98-1.33 2.98-2.98-1.33-2.98-2.98-2.98zM0 21.17l25.84-10.33c7.02-2.81 14.7-2.81 21.72 0L60 21.17H0z" />
            </svg>
            <span className="tracking-tight">Nike</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side icons */}
        <div
          className="flex items-center space-x-4"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {/* Mobile menu toggle */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop-only icons */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition hidden md:inline-flex">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition hidden md:inline-flex">
            <User className="h-5 w-5" />
          </button>

          {/* Cart Icon with Badge */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <a href="/cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
            </a>
          </button>
        </div>
      </div>

      {/* Mobile Nav with slide animation */}
      <div
        className={`md:hidden overflow-hidden border-t bg-white shadow-md transform transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-black transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile-only icons */}
          <div className="flex space-x-6 border-t pt-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile Cart with Badge */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
              <a href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
              </a>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

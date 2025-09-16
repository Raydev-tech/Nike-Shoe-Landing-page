import { useCart } from "../context/CartContext.jsx"

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-400"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-gray-300 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

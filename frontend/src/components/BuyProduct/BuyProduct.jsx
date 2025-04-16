import React, { useState } from "react";

// Card component: shows cart items and total
function Cart({ cartItems, onRemove }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="bg-gray-800 rounded-lg p-6 w-full max-w-md text-white shadow-lg">
      <h2 className="text-2xl font-extrabold mb-4 border-b border-red-600 pb-2">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 max-h-64 overflow-y-auto">
            {cartItems.map(({ id, name, size, price }, index) => (
              <li
                key={id + "-" + index}
                className="flex justify-between items-center bg-gray-700 rounded-md p-3"
              >
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-sm text-gray-300">Size: {size}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold text-red-500">₹{price}</p>
                  <button
                    onClick={() => onRemove(index)}
                    aria-label={`Remove ${name} size ${size} from cart`}
                    className="text-red-600 hover:text-red-400 font-bold text-xl"
                    title="Remove item"
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-red-600 pt-4 flex justify-between font-extrabold text-xl">
            <span>Total:</span>
            <span className="text-red-500">₹{totalPrice}</span>
          </div>
        </>
      )}
    </aside>
  );
}

// Product component: displays product info and add to cart button
function Product({ onAddToCart }) {
  const [size, setSize] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const product = {
    id: "ironman-tshirt-001",
    name: "Iron Man Arc Reactor T-Shirt",
    description:
      "Show off your superhero style with this officially licensed Iron Man Arc Reactor T-shirt. Made from 100% soft cotton, it features a glowing arc reactor print that stands out in any crowd.",
    price: 899,
    image:
      "./src/assets/img/ironman_tshirt_1.jpeg",
  };

  const handleAdd = () => {
    if (!size) {
      setMessage({ text: "Please select a size before adding to cart.", type: "error" });
      return;
    }
    onAddToCart({ ...product, size });
    setMessage({ text: `Added ${product.name} (Size: ${size}) to your cart!`, type: "success" });
    setSize("");
  };

  return (
    <section className="flex-1 max-w-md flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl shadow-lg w-full object-cover mb-8"
      />
      <h1 className="text-4xl mb-4 text-red-600 font-extrabold drop-shadow-lg">
        {product.name}
      </h1>
      <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{product.description}</p>
      <div className="text-3xl font-extrabold text-red-600 mb-8">₹{product.price}</div>

      <label htmlFor="size" className="block mb-2 font-bold tracking-wide">
        Select Size
      </label>
      <select
        id="size"
        aria-label="Select T-shirt size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
      >
        <option value="" disabled>
          Choose your size
        </option>
        <option value="S">Small (S)</option>
        <option value="M">Medium (M)</option>
        <option value="L">Large (L)</option>
        <option value="XL">Extra Large (XL)</option>
        <option value="XXL">XXL</option>
      </select>

      <button
        onClick={handleAdd}
        aria-label="Add Iron Man T-shirt to cart"
        className="bg-red-600 hover:bg-red-800 transition-colors text-white font-extrabold py-4 rounded-lg tracking-widest"
      >
        Add to Cart
      </button>

      {message.text && (
        <p
          role="alert"
          aria-live="polite"
          className={`mt-6 font-bold text-center ${
            message.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message.text}
        </p>
      )}
    </section>
  );
}

// Main App component: manages cart state and renders Product and Cart
export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productWithSize) => {
    setCartItems((prev) => [...prev, productWithSize]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-anton select-none">
      <header className="bg-gray-900 py-5 text-center text-4xl font-extrabold tracking-widest uppercase">
        MARVEL STORE
      </header>

      <main className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        <Product onAddToCart={addToCart} />
        <Cart cartItems={cartItems} onRemove={removeFromCart} />
      </main>
    </div>
  );
}

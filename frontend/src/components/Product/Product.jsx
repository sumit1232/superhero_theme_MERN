import React, { useState } from "react";

export default function Product() {
  const [size, setSize] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleAddToCart = () => {
    if (!size) {
      setMessage({ text: "Please select a size before adding to cart.", type: "error" });
      return;
    }
    setMessage({ text: `Added Iron Man T-shirt (Size: ${size}) to your cart!`, type: "success" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-anton select-none">
      <header className="bg-gray-900 py-5 text-center text-4xl font-extrabold tracking-widest uppercase">
        MARVEL STORE
      </header>

      <main className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        {/* Product Image */}
        <section
          className="flex-1 max-w-md"
          aria-label="Marvel Iron Man T-shirt images"
        >
          <img
            src="./src/assets/img/ironman_tshirt_1.jpeg"
            alt="Iron Man Marvel T-shirt"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </section>

        {/* Product Details */}
        <section className="flex-1 max-w-md flex flex-col justify-between">
          <h1 className="text-5xl mb-4 text-red-600 drop-shadow-lg">
            Iron Man Arc Reactor T-Shirt
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Show off your superhero style with this officially licensed Iron Man Arc Reactor T-shirt. Made from 100% soft cotton, it features a glowing arc reactor print that stands out in any crowd.
          </p>
          <div className="text-3xl font-extrabold text-red-600 mb-8">₹899</div>

          <label htmlFor="size" className="block mb-2 font-bold tracking-wide">
            Select Size
          </label>
          <select
            id="size"
            aria-label="Select T-shirt size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full mb-8 px-4 py-3 rounded-lg bg-gray-800 text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
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
            onClick={handleAddToCart}
            aria-label="Add Iron Man T-shirt to cart"
            className="bg-red-600 hover:bg-red-800 transition-colors text-white font-extrabold py-4 rounded-lg tracking-widest"
          >
            Add to Cart
          </button>

          {message.text && (
            <p
              role="alert"
              aria-live="polite"
              className={`mt-6 font-bold text-center ${message.type === "error" ? "text-red-500" : "text-green-500"
                }`}
            >
              {message.text}
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

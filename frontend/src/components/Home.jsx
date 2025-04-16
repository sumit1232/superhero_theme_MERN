import React from "react";
import backgroundImg from "../assets/img/background.jpeg";
const products = [
  {
    id: 1,
    name: "Iron Man Action Figure",
    description: "Highly detailed Iron Man collectible figure with movable joints.",
    price: "$49.99",
    image:
      "./src/assets/img/ironman_tshirt.jpeg",
  },
  {
    id: 2,
    name: "Spider-Man Hoodie",
    description: "Comfortable and stylish hoodie featuring Spider-Man’s iconic logo.",
    price: "$39.99",
    image:
      "./src/assets/img/second.jpeg",
  },
  {
    id: 3,
    name: "Captain America Shield Replica",
    description: "Authentic replica of Captain America’s shield, perfect for cosplay.",
    price: "$59.99",
    image:
      "./src/assets/img/third-img.jpeg",
  },
];

export default function MarvelStore() {
  const addToCart = (productName) => {
    alert(`${productName} has been added to your cart!`);
  };

  const shopNow = () => {
    alert("Shop Now clicked!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-extrabold select-none"
    style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      {/* Header */}
      <header className="bg-gray-900 text-center py-6 text-4xl tracking-widest uppercase">
        MARVEL STORE
      </header>

      {/* Hero Section */}
      <section
        className="flex flex-col justify-center items-center h-96 bg-cover bg-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://i.annihil.us/u/prod/marvel/i/mg/6/90/5e8f7a1a1a1a1/clean.jpg')",
          textShadow: "2px 2px 8px #000",
        }}
      >
        <h1 className="text-5xl mb-4">Official Marvel Merchandise</h1>
        <p className="text-lg mb-8 max-w-xl">
          Get your favorite superhero gear today!
        </p>
        <button
          onClick={shopNow}
          className="bg-white text-red-700 font-bold px-8 py-3 rounded-md hover:bg-red-800 hover:text-white transition"
        >
          Shop Now
        </button>
      </section>

      {/* Products Section */}
      <section
        aria-label="Marvel Products"
        className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {products.map(({ id, name, description, price, image }) => (
          <article
            key={id}
            className="bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col"
          >
            <div
              className="h-80 bg-center bg-cover rounded-t-lg"
              style={{ backgroundImage: `url(${image})` }}
              role="img"
              aria-label={name}
            ></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl mb-2">{name}</h3>
              <p className="text-gray-300 flex-grow">{description}</p>
              <div className="text-red-600 font-extrabold text-2xl mt-4">
                {price}
              </div>
              <button
                onClick={() => addToCart(name)}
                className="mt-6 bg-red-700 hover:bg-red-900 text-white font-bold py-3 rounded-md transition"
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </section>

    </div>
  );
}

// src/pages/Products.jsx

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import products from "../data/products";
import ProductCard from "../components/productCard/ProductCard";

const Products = () => {
  const firstThreeProducts = products.slice(0, 3);

  return (
    <div className="mb-6 text-sandhard">
      <h1 className="font-bold text-2xl">Últimos productos</h1>
      <div className="max-w-2xl mx-auto my-6">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
        >
          {firstThreeProducts.map((product) => (
            <div key={product.id} className="relative h-80">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full"
              />
              {/* <p className="legend">{product.name}</p> */}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="py-6">
        <hr className="my-6 border border-sandse" />
        <p className="my-6 text-center text-2xl font-bold">
          Los más vendidos en la última semana. ¡No te los pierdas!
        </p>
        <hr className="my-6 border border-sandse" />
      </div>
      <h1 className="font-bold text-2xl">Todos los productos</h1>
      <div className="py-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            categories={product.categories}
            precio={product.precio} // Añadir esta línea
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

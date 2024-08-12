import React, { useState } from "react";
import Buttons from "../buttons/Buttons";
import CategoriesProducts from "../categoriesProducts/CategoriesProducts";
import Precio from "../precio/Precio";
import Toast from "../toast/Toast";

const ProductCard = ({ name, description, image, categories, precio }) => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="bg-sandpr py-4 px-4 rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain rounded-md"
      />
      <div className="text-blackpr font-bold text-2xl uppercase mt-4">
        {name}
      </div>
      <div className="mt-2">
        <p className="text-sandhard">{description}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <CategoriesProducts
            key={index}
            icon={category.icon}
            text={category.text}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Precio precio={precio} />
        <Buttons text="Añadir al carrito" size="small" type="primary" onClick={handleShowToast} />
        {showToast && (
          <Toast
            message="Producto añadido al carrito"
            type="primarySuccess"
            duration={3000}
            icon="success"
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;

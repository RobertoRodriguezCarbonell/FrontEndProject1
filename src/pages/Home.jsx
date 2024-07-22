// src/pages/Home.jsx

import React, { useState } from "react";
import Buttons from "../components/buttons/Buttons";
import Modal from "../components/modal/Modal";
import Input from "../components/input/Input";
import ProductCard from "../components/productCard/ProductCard";
import Toast from "../components/toast/Toast";
import products from "../data/products";  // Importar productos

const Home = () => {
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Selecciona los primeros cuatro productos
  const firstFourProducts = products.slice(0, 4);

  return (
    <div className="">
      <div className="mb-6 text-sandhard">
        <h1 className="font-bold text-2xl">Home</h1>
      </div>
      <div className="flex gap-x-4 flex-wrap">
        <Buttons
          text="Open Toast"
          size="small"
          type="primary"
          onClick={handleShowToast}
        />
        {showToast && (
          <Toast
            message="Mensaje enviado con éxito"
            type="primarySuccess"
            duration={3000}
            icon="success"
          />
        )}
        <Buttons
          text="Open Modal"
          size="small"
          type="primary"
          onClick={handleOpenModal}
        />
        <Buttons text="Button Component" size="large" type="custom" />
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Añadir nuevo cliente"
        >
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Primer apellido" />
          <Input type="text" placeholder="Segundo apellido" />
          <Input type="date" placeholder="Fecha de nacimiento" />
          <Input type="email" placeholder="Correo electrónico" />
          <div className="mt-4 flex justify-between">
            <Buttons
              text="Cancelar"
              size="extralarge"
              type="secondary"
              onClick={handleCloseModal}
            />
            <Buttons text="Añadir cliente" size="extralarge" type="primary" />
          </div>
        </Modal>
      </div>
      <div className="py-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {firstFourProducts.map((product) => (
          <ProductCard
            key={product.id} // Añadir key única
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

export default Home;

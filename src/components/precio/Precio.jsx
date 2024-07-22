import React from "react";

const Precio = ({ precio }) => {
  return (
    <div className="bg-sandse p-2 rounded-md h-[32px] flex items-center">
      <p className="text-lg font-semibold text-sandhard">
        {precio} €
      </p>
    </div>
  );
};

export default Precio;

import React from "react";
import { Medal, Headset, Dribbble, Bike, Laptop, LoaderPinwheel, Camera } from "lucide-react";

const iconsComponents = {
  deporte: Medal,
  gaming: Headset,
  basketball: Dribbble,
  bicicleta: Bike,
  laptop: Laptop,
  futbol: LoaderPinwheel,
  camera: Camera,
};

const Categories = ({ icon = "deporte", text = "Conectado" }) => {
  const IconComponet = iconsComponents[icon];

  return (
    <div className="bg-sandpr w-fit rounded-full border-2 border-sandhard">
      <div className="flex justify-between px-[15px] h-[25px]">
        <div className="flex items-center gap-x-[12px] text-sandhard">
          <div>
            <IconComponet className="w-[20px] h-[20px]" />
          </div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

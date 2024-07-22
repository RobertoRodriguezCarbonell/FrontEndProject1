import React from "react";
import { Power, PowerOff, BedDouble } from "lucide-react";

const iconsComponents = {
  power: Power,
  powerOff: PowerOff,
  bedDouble: BedDouble,
};

const Categories = ({ icon = "power", text = "Conectado" }) => {
  const IconComponet = iconsComponents[icon];

  return (
    <div className="bg-sandpr w-fit rounded-full border-2 border-sandhard">
      <div className="flex justify-between px-[15px] h-[40px]">
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

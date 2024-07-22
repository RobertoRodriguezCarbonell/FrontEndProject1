import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../buttons/Buttons";

const Navbar = () => {
  return (
    <nav className="bg-sandse text-sandhard">
      <div className="container mx-auto items-center p-4">
        <div className="flex justify-between gap-x-4">
          <Link to="/">
            <Buttons text="Ropotober" size="small" type="custom" />
          </Link>
          <div className="flex gap-x-4">
            <Link to="/products">
              <Buttons text="Products" size="small" type="custom" />
            </Link>
            <Link to="/about">
              <Buttons text="About" size="small" type="custom" />
            </Link>
            <Link to="/contact">
              <Buttons text="Contact" size="small" type="custom" />
            </Link>
            <Link to="/services">
              <Buttons text="Services" size="small" type="custom" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

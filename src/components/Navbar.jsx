import React from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
function Navbar() {
  const item=useSelector((state)=>state.cart)
  return (
    <div className="flex sticky top-0 z-10 bg-blue-900 justify-between  w-screen items-center py-4 px-10 text-white">
      <Link to="/" className="text-3xl font-bold italic">
        Shop
      </Link>
      <Link to="cart">
        <Badge badgeContent={item.length} color="secondary">
          <IoCart className="scale-[2]" />
        </Badge>
      </Link>
    </div>
  );
}

export default Navbar;

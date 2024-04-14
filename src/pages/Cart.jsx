import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (p) => {
    dispatch(remove(p));
  };
  return (
    <div className="grid grid-cols-1 mx-auto justify-center text-black gap-3 w-[90vw] mt-3 text-start ">
      {cartProduct.map((c) => (
        <div
          key={c.id}
          className=" text-start p-[20px] bg-[#c5c2c2] flex items-center justify-between w-full rounded-xl"
        >
          <div className=" w-1/5">
          <img src={c.image} alt="" className="h-[100px] w-full object-cover" />
          </div>
          

          <h2 className="w-1/4">{c.title}hw</h2>

          <h3 className="w-1/4">RS. {c.price}</h3>
          <button
            className="bg-red-500 p-2 rounded-lg w-[13%]"
            onClick={() => {
              handleRemove(c.id);
            }}
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;

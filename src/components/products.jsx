import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

function products() {
  //   const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProduct(data);
    // };
    // fetchProduct();
  }, []);

  const { data: product, status } = useSelector((state) => state.product);

  const handleAdd = (p) => {
    dispatch(add(p));
  };
  if (status === STATUSES.LOADING) {
    return (
      <div className="w-[100vw] h-[80vh] z-30 flex justify-center items-center">
        <h1 className="text-3xl">Loading.....</h1>
      </div>
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <div className="w-[100vw] h-[80vh] z-30 flex justify-center items-center">
        <h1 className="text-3xl">Something went wrong</h1>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-5 max-sm:grid-cols-1 md:grid-cols-3 gap-3 mx-auto text-black mt-3 ">
      {product.map((p) => (
        <div
          key={p.id}
          className="relative text-center p-[20px] bg-[#c5c2c2] flex flex-col items-center w-[270px] h-[300px] rounded-md "
        >
          <img src={p.image} alt="" className="h-[80px] object-cover " />
          <h2>{p.title}</h2>
          <h3>RS. {p.price}</h3>
          <button
            className="bg-blue-500 absolute bottom-5 p-2 rounded-lg"
            onClick={() => {
              handleAdd(p);
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default products;

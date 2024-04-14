import React from "react";
import Products from "../components/products";

function Home() {
  return (
    <div className="flex flex-col items-center w-[100vw] overflow-x-hidden">
      <h1>products</h1>
      
        <Products />
      
    </div>
  );
}

export default Home;

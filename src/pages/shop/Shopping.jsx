import React from "react";
import { PRODUCTS } from "../../products";
import MyProducts from "./MyProducts";

function Shop() {
  return (
    <div className="container overflow-hidden ">
      <h3 className="text-center text-slate-900 font-[700] md:text-[32px] mb-5 mt-5">
          My Ecommerce App
        </h3>
        
      <div className="flex items-center gap-4 flex-wrap ">
        
        <div >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 " >
            {PRODUCTS.map((product) => {
              return <MyProducts key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function MyProducts({ product }) {
  const { productName, price, ProductImage ,id} = product;
  const {addToCart, cartItems }=useContext(ShopContext);
 
  const cartItemAmount=cartItems[id];
  return (
    <div className=" p-5 rounded-[5px]  overflow-hidden shadow-md shadow-slate-400 flex flex-col items-center gap-3 ">
      <div className="">
        <img className="w-full h-auto" src={ProductImage} alt={productName} />
      </div>

      <h3>{productName}</h3>
      <p>price: {price}</p>
      <div className="">
        <button onClick={() => addToCart(id)} 
        /* The reason for passing the id to
         the addToCart function is to identify
          which product you want to add to the cart.
           The id represents a unique identifier for a product, 
           and it's used to determine which product's quantity 
           should be incremented in the shopping cart.
           id is not used as a quantity; it's used as a way 
           to identify the specific product that you want to add to the cart.
        */
         className="text-white bg-slate-500 hover:bg-slate-900 py-2 px-4  rounded-[8px] font-[500] ease-in duration-200">
          Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
}

export default MyProducts;

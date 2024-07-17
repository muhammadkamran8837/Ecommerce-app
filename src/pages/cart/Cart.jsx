import React from "react";
import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { addToCart, removeFromCart, cartItems, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="container overflow-hidden ">
      <div className="flex items-center justify-center">
        <h1 className=" text-slate-900 font-[700] md:text-[32px] mb-5 mt-5">
          Your Cart items
        </h1>
      </div>
      <div className="flex items-center flex-col gap-4 flex-wrap ">
        <div>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} product={product} />;
            }
          })}
        </div>
      </div>
      {/* Cart Amount Section Starts */}
      {totalAmount > 0 ? (
        <div className=" flex items-center justify-center flex-col gap-5 ">
          <div className=" ">
            <p>Subtotal: ${totalAmount}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="text-white bg-slate-500 hover:bg-slate-900 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Continue shopping
            </button>
            <button className="text-white bg-slate-500 hover:bg-slate-900 py-2 px-4  rounded-[8px] font-[500] ease-in duration-200">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
        <h1 className=" text-slate-900  mb-5 mt-5">
          Your Cart is empty
        </h1>
      </div>

        
      )}
      {/* Cart Amount Section Ends */}
    </div>
  );
}

export default Cart;

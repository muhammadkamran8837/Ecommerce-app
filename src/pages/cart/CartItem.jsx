import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartItem({ product }) {
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);
  const { productName, price, ProductImage, id } = product;

  return (
    <div className="p-5  m-5 rounded-lg shadow-md flex items-center justify-center">
      <div className=" flex items-center flex-col gap-5">
        <div className="w-48 h-32">
          <img className="w-full h-full" src={ProductImage} alt={productName} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{productName}</h3>
          <p className="text-gray-600">Price: ${price}</p>
        </div>
        <div className="flex items-center flex-row gap-2">
          <button onClick={() => addToCart(id)}>+</button>
          <input
            value={cartItems[id]}
            onChange={(event) => updateCartItemCount(Number(event.target.value),id)}
            className="w-12 border border-solid text-center"
            type=" "
          />
          <button onClick={() => removeFromCart(id)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

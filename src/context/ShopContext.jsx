import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);
function ShopContextProvider(props) {
  //  This function gets the array of objects that
  // stores the product data, and returns an empty object
  // the loop iterates and adds empty value in object everytime

  const getdefaultcart = () => {
    let cart = {}; // object initlized
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0; //  object value set to zero
    }
    return cart;
  };
  //   {
  //     1: 0, Product with ID 1 has 0 items
  //     2: 0,
  //     3: 0,
  //     4: 0,
  //     5: 0,
  //     6: 0,
  //     7: 0,
  //     8: 0,
  //   }

  const [cartItems, setCartItems] = useState(getdefaultcart());

  const addToCart = (itemId) => {
    // prev is the previous value of the state which is zero, ...prev means keep track of previous value and add new one
    // The itemId represents the product that you want to add to the cart.
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    // prev is the previous value of the state, ...prev means keep track of previous value and add new one
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  // const getTotalCartAmount=()=>{
  //   let totalAmount=0;
  //   for(const item in cartItems[item]){
  //     if (cartItems[item]>0) {
  //       findItemInfo=PRODUCTS.find((product)=>product.id===Number)

  //     }
  //   }
  // }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
    /* const itemId is a variable that represents each property
       (or key) in the cartItems object during each iteration of the loop.
       cartItems is the object over which you are iterating.*/
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const product = PRODUCTS.find(
          (product) => product.id === parseInt(itemId)
        );
        totalAmount += product.price * quantity;
      }
    }
    return totalAmount;
  };

  const contextvalues = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextvalues}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

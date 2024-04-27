import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const[cartItems,setCartItems] = useState({});
  //This state variable will hold the items in the shopping cart.

  const addtoCart = (itemId) => {
       if(!cartItems[itemId]){
        //This line checks if the itemId is not already present in the cartItems object.
        // If it's not present, it means this is the first time this item is being added to the cart.
        setCartItems((prev) => ({...prev,[itemId] : 1}))
        //Inside the if block, this line updates the cartItems state.
        // It uses the updater function form of setState provided by useState. 
        //It spreads the previous state (prev) into a new object, then sets 
        //the value of the itemId key to 1, indicating that there is one item of this type in the cart.
       }
       else {
        // If the item already exists in the cart, this block is executed.
        setCartItems((prev) => ({...prev,[itemId] :  prev[itemId]+1}))
        //, this line updates the cartItems state. 
        //It increments the quantity of the item represented by itemId by 1
       }
  }

  const removeCart = (itemId) =>{
    setCartItems((prev) => ({...prev,[itemId] :  prev[itemId]-1}))
  }

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    //This variable will accumulate the total cost of all items in the cart.
    for(const item in cartItems){
      //This line starts a for...in loop that iterates through each item in the cartItems object. In each iteration, 
      //item represents the key/index of the current item in the cartItems object.
      if(cartItems[item] > 0){
        // means the item exists in the cart.

        let itemInfo = food_list.find((product) => product._id === item)
        //This line uses the find method to search for the item information in the food_list array based on the _id property matching
        // the current item. If found, the information is stored in the itemInfo variable.
        totalAmount += itemInfo.price* cartItems[item]
        //This line calculates the total cost of the current item by multiplying 
        //its price (itemInfo.price) with its quantity (cartItems[item]). The result is added to the totalAmount variable.
      }
   
    }
    return totalAmount;
    //Finally, the function returns the totalAmount, which represents the total cost of all items in the cart.
  }
  // useEffect(()=>{
  //  console.log(cartItems)
  
  // },[cartItems])
 
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtoCart,
    removeCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

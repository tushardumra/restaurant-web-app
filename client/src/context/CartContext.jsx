import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
  try {
    const savedCart =
      localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  } catch {
    return [];
  }
});

  useEffect(() => {
    // console.log(cartItems);
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === food._id);

      if (existingItem) {
        return prevItems.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...food, quantity: 1 }];
    });
  };

  const increaseQuantity = (foodId) => {
    setCartItems((prevItems) => 
      prevItems.map((item) =>
        item._id === foodId
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  }

  const decreaseQuantity = (foodId) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item._id === foodId
        ? {
          ...item,
          quantity: item.quantity - 1,
        } : item
      )
      .filter((item) => item.quantity > 0)
    );
  }

  const removeFromCart = (foodId) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item._id !== foodId)
    );
  }

  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

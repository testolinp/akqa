import React, { useState, createContext, useContext } from 'react';

const BasketContext = createContext({});

const items = [
  { id: 0, product: 'Cotton T-Shirt, Medium', price: 1.99, qty: 1 },
  { id: 1, product: 'Baseball Cap, One Size', price: 2.99, qty: 2 },
  { id: 2, product: 'Swim Shorts, Medium', price: 3.99, qty: 1 }
]

export const BasketProvider = (props) => {
  const [basketItems, setBasketItems] = useState(items || []);

  const initializeBasket = () => {
    //Fetch api to get content
  }

  const removeProduct = (itemId) => {
    const removedBasket = basketItems.filter((item) => item.id !== itemId );
    setBasketItems(removedBasket);
  };

  const getBasketSubtotal = () => {
    return basketItems.reduce((prev, act) => prev + (act.price * act.qty), 0);
  }

  const getBasketVat = () => {
    return (getBasketSubtotal() * 0.2).toFixed(2)
  }

  const getTotal = () => {
    return (parseFloat(getBasketSubtotal()) + parseFloat(getBasketVat())).toFixed(2);
  }

  const value = {
    basketItems,
    initializeBasket,
    removeProduct,
    getBasketSubtotal,
    getBasketVat,
    getTotal
  };

  return <BasketContext.Provider value={value} {...props} />;
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  return context;
};

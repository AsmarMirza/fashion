import React, { createContext, useState } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = UseLocalStorage("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }
  function decreaseBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (basket[index].count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }
  function getTotal() {
    return basket
      .reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.count,
        0
      )
      .toFixed(2);
  }

  function removeBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }

  return (
    <div>
      <MainContext.Provider
        value={{ basket, addBasket, removeBasket, decreaseBasket, getTotal }}
      >
        {children}
      </MainContext.Provider>
    </div>
  );
}

export default MainProvider;

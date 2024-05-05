import React, { createContext } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";
export const WishlistContext = createContext();
function WishListProvider({ children }) {
  const [wishList, setWishList] = UseLocalStorage("wishList", []);

  function addWishList(item) {
    const index = wishList.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      setWishList(wishList.filter((x) => x.id !== item.id));
    } else {
      setWishList([...wishList, item]);
    }
  }

  function removeWishList(item) {
    const index = wishList.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      setWishList(wishList.filter((x) => x.id !== item.id));
    }
  }

  function isExist(item) {
    return wishList.findIndex((x) => x.id === item.id) !== -1;
  }

  return (
    <WishlistContext.Provider
      value={{ wishList, addWishList, isExist, removeWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishListProvider;

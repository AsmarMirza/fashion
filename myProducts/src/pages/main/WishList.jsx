import React, { useContext } from "react";
import style from "./products.module.scss";
import { WishlistContext } from "../../context/WishListProvider";
function WishList() {
  const { wishList, removeWishList } = useContext(WishlistContext);
  return (
    <div className={style.basket}>
      <div className={style.total}>
        <h2>
          Your Favorities <i className="fa-regular fa-heart"></i>
        </h2>
      </div>
      <div className={style.container}>
        {wishList.map((x) => (
          <div className={style.box} key={x.id}>
            <img className={style.img} src={x.image} alt="product" />
            <h5>{x.title}</h5>
            <strong>
              <p>{x.price}$</p>
            </strong>
            <button onClick={() => removeWishList(x)}>Remove favorities</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;

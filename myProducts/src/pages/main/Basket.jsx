import React, { useContext } from "react";
import { MainContext } from "../../context/MainProvider";
import style from "./products.module.scss";
function Basket() {
  const { basket, addBasket, decreaseBasket, removeBasket, getTotal } =
    useContext(MainContext);
  return (
    <div className={style.basket}>
      <div className={style.total}>
        <strong> Total:{getTotal()}$</strong>
      </div>
      <div className={style.container}>
        {basket.map((x) => (
          <div className={style.box} key={x.id}>
            <img className={style.img} src={x.image} alt="product" />
            <h5>{x.title}</h5>
            <strong>
              <p>{x.price}$</p>
            </strong>
            <div>
              <button onClick={() => addBasket(x)} className={style.inc}>
                +
              </button>
              <button onClick={() => decreaseBasket(x)} className={style.dec}>
                -
              </button>
            </div>

            <p>count:{x.count}</p>

            <button onClick={() => removeBasket(x)}>Remove basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;

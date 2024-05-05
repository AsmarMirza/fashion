import React, { useContext, useEffect, useState } from 'react'
import style from "./products.module.scss"
import { MainContext } from '../../context/MainProvider'
import  { WishlistContext } from '../../context/WishListProvider'
function Products() {
  const { addBasket }=useContext(MainContext)
  const {addWishList,isExist}=useContext(WishlistContext)
  const [products, setProducts] = useState([])
  const [search, setsearch] = useState("")

  useEffect(() => {
   async function getAllProducts(){
    const res=await fetch("http://localhost:3000/products")
    const data=await res.json()
    setProducts(data)
   }
   getAllProducts()
  }, [])
  function increase(key){
    setProducts(products.toSorted((a,b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)))
  }
  function decrease(key){
    setProducts(products.toSorted((a,b) => (a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0)))
  }
  return (
    <div >
      <button onClick={()=>increase("price")}>Asc</button>
      <button onClick={()=>decrease("price")}>Dsc</button>
      <input type="text"  placeholder='Search..'
       value={search}
       onChange={(e)=>setsearch(e.target.value)}
      />
    <div className={style.container}>
      {products.filter((x)=>x.title.toLowerCase().includes(search.toLowerCase().trim()))
      .map((x)=>(
      <div className={style.box} key={x.id}>
        <div onClick={ ()=>addWishList(x)}>
        {isExist(x)? <i style={{color:"red"}} className="fa-solid fa-heart"></i>  :<i className="fa-regular fa-heart"></i> }   
        </div>
 
      <img className={style.img} src={x.image} alt="product" />
       <h5>{x.title}</h5>
       <strong><p>{x.price}$</p></strong>
       <button  onClick={()=>addBasket(x)} className={style.button}>Add basket</button>
      </div>))}
    </div>
    </div>
  )
}

export default Products

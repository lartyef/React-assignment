import { useEffect, useReducer, useState } from 'react'
import { cartReducer } from './reducers/cartReducer'
import Products from './Components/Products'
import Carts from './Components/Carts'
import NavBar from "./Components/NavBar/NavBar"
import "./App.css"
import Hero from "./Components/Hero"

const initialState = {
  products: [],
  cart: []
};

function App() {
  
  const [state, dispatch] = useReducer(cartReducer,initialState);

  const url = 'https://dummyjson.com/products';

  const fetchProducts = async() => {
    try{
       const response = await fetch(url)
       const data = await response.json();
       //console.log(data);

       dispatch({
        type:"ADD_PRODUCTS",
        payload: data.products
       })
    }
    catch(err){

    }
  }
  
   useEffect(() => {
    fetchProducts()
   }, [])

  return (
    <section>
   
      <NavBar state={state} dispatch={dispatch}/>
      <Hero/>
    <div style={{display:"flex"}}>
      <Products state={state} dispatch={dispatch}/>
      {/* <Carts state={state} dispatch={dispatch}/> */}
    </div>
    </section>
  )
}

export default App

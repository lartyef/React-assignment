import { useReducer } from "react";
import CartContainer from "../../Components/Cart/CartContainer";
import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    const [itemCount, setItemCount] = useState(0)

   
    return (
   
   <Router>
   <NavBar itemCount={itemCount}/>
   <CartContainer itemCount={itemCount} setItemCount={setItemCount}/>
  
   </Router>
    )
}
export default Home;
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Shirts from "./Shirts";
import Cart from "./Cart";
import { toast } from 'react-toastify';


const Home = () => {
  const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirts) => {
    const exists = cart.find(ts => ts._id === tShirts._id);
    if(exists){
      toast("Item already added");
    }
    else{
      const newCart = [...cart, tShirts]
      setCart(newCart);
    }
  };

  const handleRemoveToCart = (id) => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
  }

  return (
    <div className="container">
      <div className="lg:flex gap-12">
        <div className="grid lg:grid-cols-3 gap-3">
          {tShirts.map((shirts) => (
            <Shirts key={shirts._id} shirts={shirts} handleAddToCart={handleAddToCart}></Shirts>
          ))}
        </div>
        <div>
          <Cart handleRemoveToCart={handleRemoveToCart} cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;

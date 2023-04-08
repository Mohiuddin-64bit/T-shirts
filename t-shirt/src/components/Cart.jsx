import React from "react";

const Cart = ({ cart, handleRemoveToCart }) => {
  let message;
  if(cart.length === 0){
    message = <p className="text-lg bg-pink-300 font-bold p-2 rounded-lg mb-3">Please add some Product</p>
  }
  else{
    message = <p className="text-lg bg-pink-300 font-bold p-2 rounded-lg mb-3">Thank for purchasing</p>
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-7">Order Summary</h2>
      {cart.length > 2 ? <span>Buy More</span> : <span>You have no money</span>}
      {cart.length === 3 || <p>3 ta to hoilona</p>}
      {message}
      {cart.map((tshirt) => (
        <p className="text-2xl" key={tshirt._id}>
          {tshirt.name}
          <button
            className="btn btn-primary"
            onClick={() => handleRemoveToCart(tshirt._id)}
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

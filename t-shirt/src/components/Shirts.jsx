import React from "react";

const Shirts = ({ shirts, handleAddToCart }) => {
  const { name, picture, gender, price, _id } = shirts;

  return (
    <div>
      <div className="card card-compact w-72 h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg font-bold">Price: {price}</p>
          <div className="">
            <button onClick={() => handleAddToCart(shirts)} className="w-full btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shirts;

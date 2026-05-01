import React from "react";

const CarProduct = ({ product: { id, name, price, img_url } }) => {
  return (
    <div key={id} className="flex flex-col mt-4 bg-white border border-primary/30 hover:-translate-y-2 duration-300 ease-in-out shadow hover:shadow-2xl">
      <figure>
        <img src={img_url} alt="Gym Equipment" className="h-full p-4"/>
      </figure>
      <div className="flex flex-col  p-4 gap-2 text-text-primary ">
        <h2 className="font-medium text-p-m">{name}</h2>
        <p className="font-bold text-h3">${price}</p>
      </div>
    </div>
  );
};

export default CarProduct;

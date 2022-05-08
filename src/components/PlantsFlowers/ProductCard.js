import React from "react";
import { BsFillStarFill } from "react-icons/bs";
const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col justify-between w-6/12 px-2 my-2 ">
      <div className="image__container px-4 bg-gray-900 flex justify-center h-20 pb-1 rounded-t-lg relative">
        <img className="object-fit" src={product.image} alt={product.name} />
        <div className="absolute rounded-sm bg-[#F59E0B] text-white flex gap-1 items-center justify-center w-11 px-1 left-2/4 bottom-[-8px] translate-x-[-50%]">
          <BsFillStarFill size={12} color="#fff" />
          <p className="text-xs font-graphik">{product.rating.toFixed(1)}</p>
        </div>
      </div>

      <div className="card__content flex flex-col bg-white justify-around items-center rounded-b-lg h-28 shadow-cardBoxShadow">
        <h4 className="font-graphik-medium text-base text-gray-900">
          {product.name}
        </h4>
        <button className="bg-[#E2FEDB] text-[#6BA91A] text-base text-center font-graphik px-8 py-1.5 rounded-lg">
          Review
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

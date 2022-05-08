import React from "react";

const ItemCard = ({ item }) => {
  return (
    <li className="card flex flex-col items-center flex-shrink-0">
      <div className="image__container w-32 h-20 items-center flex justify-center flex-col py-5 rounded-lg bg-white shadow-cardBoxShadow">
        <img className="px-1" src={item.itemImage} alt="obi-logo" />
      </div>
      <h4 className="mt-2 text-center text-base font-graphik-medium text-gray-900">
        {item.itemName}
      </h4>
    </li>
  );
};

export default ItemCard;

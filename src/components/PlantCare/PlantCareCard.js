import React from "react";

const PlantCareCard = ({ item }) => {
  return (
    <div className="flex flex-col p-2 bg-white rounded-[4px] flex-none justify-between w-60 h-64">
      <div className="image__container">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="plantCare__content flex flex-1 flex-col">
        <p className="font-graphik text-base text-[#64A315] mt-2 ">
          {item.name}
        </p>
        <p className="text-sm text-gray-900 font-graphik-medium">
          {item.description}
        </p>
      </div>
      <div className="button__container flex items-end h-10 pt-2">
        <button className="rounded-lg bg-[#64A315] flex-1 py-2 px-8 text-white text-center text-base font-graphik">
          Go over
        </button>
      </div>
    </div>
  );
};

export default PlantCareCard;

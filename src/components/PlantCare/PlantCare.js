import React from "react";
import potImage from "../../assets/pot-plants-photo.png";
import soilImage from "../../assets/soil-source-photo.png";
import waterHoseImage from "../../assets/stretchable-hose-photo.png";
import PlantCareCard from "./PlantCareCard";
const plantCareItems = [
  {
    id: 1,
    name: "Pots for plants",
    description: `Flower pot Ingreen ø13 h10. 4 cm v0. 7 L plastic marble`,
    image: potImage,
  },
  {
    id: 2,
    name: "Soil source",
    description: `Geolia soil "For orchids" 2.5 L`,
    image: soilImage,
  },
  {
    id: 3,
    name: "Watering",
    description: "Stretchable hose with Geolia Compact gun",
    image: waterHoseImage,
  },
];
const PlantCare = () => {
  return (
    <section>
      <div className="flex justify-between px-2 mt-8 items-center">
        <h2 className="text-gray-900 font-graphik-bold text-lg">Plant Care</h2>
        <a className="font-graphik text-base text-[#6BA91A]" href="#">
          See all
        </a>
      </div>
      <ul className="card__container flex mt-3 overflow-y-hidden overflow-x-scroll w-full gap-3 px-3">
        {plantCareItems.map((item) => {
          return <PlantCareCard key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default PlantCare;

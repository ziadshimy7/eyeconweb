import React from "react";
import obiLogo from "../../assets/obi-logo.png";
import leruaMerlinLogo from "../../assets/leroy-merlin-logo.png";
import klumbaLogo from "../../assets/klumba-logo.png";
import buketBarLogo from "../../assets/buket-bar-logo.png";
import ItemCard from "./ItemCard";
const Recommended = () => {
  const items = [
    {
      itemID: 1,
      itemName: "ОБИ",
      itemImage: obiLogo,
    },
    {
      itemID: 2,
      itemName: "Леруа Мерлен",
      itemImage: leruaMerlinLogo,
    },
    {
      itemID: 3,
      itemName: "Клумба",
      itemImage: klumbaLogo,
    },
    {
      itemID: 4,
      itemName: "Букет Бар",
      itemImage: buketBarLogo,
    },
  ];
  return (
    <header className="container mt-4 flex flex-col">
      <p className="text-gray-900 font-graphik-bold ml-2 text-lg">
        Recommended for you
      </p>
      <ul className="card__container flex mt-3 overflow-y-hidden overflow-x-scroll w-full gap-3 px-3">
        {items.map(({ itemID, itemImage, itemName }) => {
          return <ItemCard key={itemID} item={{ itemImage, itemName }} />;
        })}
      </ul>
    </header>
  );
};

export default Recommended;

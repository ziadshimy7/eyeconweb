import React from "react";
import orchidPhoto from "../../assets/orchid-photo.png";
import pionsPhoto from "../../assets/pions-photo.png";
import aloePhoto from "../../assets/aloe-photo.png";
import chrysanthemumPhoto from "../../assets/chrysanthemum-photo.png";
import ProductCard from "./ProductCard";
import TitleLinkWrapper from "../../Wrappers/TitleLinkWrapper/TitleLinkWrapper";
const products = [
  {
    id: 1,
    name: "Orchid",
    rating: 8,
    image: orchidPhoto,
  },
  {
    id: 2,
    name: "Pions",
    rating: 9,
    image: pionsPhoto,
  },
  {
    id: 3,
    name: "Pions",
    rating: 5.6,
    image: aloePhoto,
  },
  {
    id: 4,
    name: "Chrysanthemum",
    rating: 7.5,
    image: chrysanthemumPhoto,
  },
];
const PlantsFlowers = () => {
  return (
    <section>
      <div className="products__container flex flex-wrap mt-2">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default TitleLinkWrapper(
  PlantsFlowers,
  "Plants and flowers",
  "See all",
  "text-[#6BA91A]"
);

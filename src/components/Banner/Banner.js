import React from "react";
import bannerImage from "../../assets/banner-photo.png";
const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className="flex p-2 bg-gradient-to-b from-[#CBD623] to-[#41701E] rounded-lg mt-4 w-11/12">
        <div className="banner__content flex-1">
          <h3 className="text-white font-graphik-semibold text-base font-normal mb-3">
            Rubber-bearing ficus <br /> (elastic)
          </h3>
          <p className="font-graphik text-sm text-white text-opacity-50">
            Ficus elastica (Ficus elastica), or rubber-bearing ficus...
          </p>
        </div>
        <div className="image__container">
          <img src={bannerImage} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

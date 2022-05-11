import React from "react";
import newsImage from "../../assets/indoor-flowers-photo.png";
import { GrView } from "react-icons/gr";
import TitleLinkWrapper from "../../Wrappers/TitleLinkWrapper/TitleLinkWrapper";
const News = () => {
  return (
    <section>
      <div className="flex justify-center flex-1 h-64">
        <img className="px-1 object-fit" src={newsImage} alt="Potted plants" />
      </div>
      <p className="px-3 text-gray-900 text-base font-graphik-semibold">
        Indoor flowers and potted plants
      </p>
      <div className="flex items-center">
        <p className="px-3 text-[#6B7280] inline-block font-graphik text-sm">
          16.06.21
        </p>
        <GrView
          className="font-light text-[#6B7280] inline-block font-graphik"
          size={14}
          color="#6B7280"
        />
        <p className="mx-1 text-[#6B7280] font-graphik text-sm">16</p>
      </div>
    </section>
  );
};

export default TitleLinkWrapper(News, "News", "See all", "text-blue-500");

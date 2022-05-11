import React from "react";

const TitleLinkWrapper = (Component, titleName, linkName, linkColor) =>
  function HOC() {
    return (
      <>
        <div className="flex justify-between px-2 mt-8 items-center mb-3">
          <h2 className="text-gray-900 font-graphik-bold text-lg">
            {titleName}
          </h2>
          <a
            className={`font-graphik-medium text-base ${
              linkColor ? `text-[${linkColor}]` : "text-blue-500"
            } `}
            href="#"
          >
            {linkName}
          </a>
        </div>
        <Component />
      </>
    );
  };

export default TitleLinkWrapper;

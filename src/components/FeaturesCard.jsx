import React from "react";

const FeaturesCard = ({ icon:Icon, heading, description }) => {
  return (
    <>
      <div className="flex flex-col gap-2 p-8 bg-white shadow-lg border-2 border-white rounded-md">
        <Icon size={26} color="purple" />
        <h1 className="text-xl font-bold">{heading}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </>
  );
};

export default FeaturesCard;

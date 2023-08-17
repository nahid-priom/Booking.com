import React from "react";

const SearchItem = () => {
  return (
    <div className="border p-2.5 rounded flex justify-between gap-5 mb-5 border-gray-500">
      <img
        className="w-52 h-52 object-cover"
        src="https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg"
        alt="House"
      />
      <div className="flex flex-col gap-2.5 basis-1/2">
        <h1 className="text-xl text-blue-800 font-bold">
          Tower Street Apartments
        </h1>
        <span className="text-xs">500m from center</span>
        <span className="text-xs bg-green-700 text-white w-max p-1 rounded">
          Free Airport Taxi
        </span>
        <span className="text-xs font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">Entire Studio * 1 Bathroom * 1 Bed</span>
        <span className="text-xs text-green-700 font-bold">
          Free Cancellation
        </span>
        <span className="text-xs text-green-700">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="basis-1/4 flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-bold">Excellent</span>
          <button className=" bg-blue-900 text-white p-1 font-bold ">
            8.9
          </button>
        </div>
        <div className="text-right flex flex-col gap-1">
          <span className="text-2xl">$123</span>
          <span className="text-xs text-gray-600 ">Includes Taxes and Fees</span>
          <button className="bg-blue-600 text-white font-bold cursor-pointer py-1 rounded px-1">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

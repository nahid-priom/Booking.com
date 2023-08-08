import React from "react";

const Featured = () => {
  return (
    <div className="w-full max-w-5xl flex justify-between gap-5 z-1">
      <div className="relative text-white rounded-xl overflow-hidden h-60">
        <img
          className="w-full object-cover "
          src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div className="absolute bottom-5  left-5 ">
          <h1 className="text-2xl font-extrabold">Dublin</h1>
          <h1 className="text-xl font-bold">123 Properties</h1>
        </div>
      </div>
      <div className="relative text-white rounded-xl overflow-hidden h-60">
        <img
          className="w-full object-cover "
          src="https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div className="absolute bottom-5  left-5 ">
          <h1 className="text-2xl font-extrabold">Rohona</h1>
          <h1 className="text-xl font-bold">123 Laung</h1>
        </div>
      </div>
      <div className="relative text-white rounded-xl overflow-hidden h-60">
        <img
          className="w-full object-cover "
          src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div className="absolute bottom-5  left-5 ">
          <h1 className="text-2xl font-extrabold">Sonarga</h1>
          <h1 className="text-xl font-bold">200 Properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;

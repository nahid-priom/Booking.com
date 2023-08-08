import React from "react";

const PropertyList = () => {
  return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
      <div className="rounded overflow-hidden cursor-pointer">
        <img
          className="w-full object-cover rounded"
          src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div>
          <h1 className="text-2xl font-bold">Hotels</h1>
          <h2 className="text-xl font-light">233 hotels</h2>
        </div>
      </div>
      <div className="rounded overflow-hidden cursor-pointer">
        <img
          className="w-full object-cover rounded"
          src="https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div>
          <h1 className="text-2xl font-bold">Apartments</h1>
          <h2 className="text-xl font-light">2331 hotels</h2>
        </div>
      </div>
      <div className="rounded overflow-hidden cursor-pointer">
        <img
          className="w-full object-cover rounded"
          src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div>
          <h1 className="text-2xl font-bold">Ressorts</h1>
          <h2 className="text-xl font-light">23 hotels</h2>
        </div>
      </div>
      <div className="rounded overflow-hidden cursor-pointer">
        <img
          className="w-full object-cover rounded"
          src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div>
          <h1 className="text-2xl font-bold">Motels</h1>
          <h2 className="text-xl font-light">2113 hotels</h2>
        </div>
      </div>
      <div className="rounded overflow-hidden cursor-pointer">
        <img
          className="w-full object-cover rounded"
          src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hotel 1"
        />
        <div>
          <h1 className="text-2xl font-bold">Motels</h1>
          <h2 className="text-xl font-light">2113 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

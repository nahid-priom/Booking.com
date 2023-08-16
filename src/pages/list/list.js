import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="basis-1/4 bg-yellow-400 p-3 rounded-xl sticky top-2.5">
            <h1 className="text-2xl font-bold text-gray-600 mb-2.5 ">Search</h1>
            <div className="flex flex-col my-2.5">
              <label className="font-bold text-gray-600">Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="h-8 p-1"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2.5 ">
              <label className="font-bold text-gray-600">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="h-8 flex items-center cursor-pointer p-1 bg-white"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div>
              <label className="font-bold text-gray-600">Options</label>
              <div className="p-2.5">
                <div className="flex justify-between mb-2.5 text-gray-600 text-base">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="w-14" />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-600 text-base">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-14" />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-600 text-base">
                  <span>Adult</span>
                  <input
                    min={1}
                    type="number"
                    placeholder={options.adult}
                    className="w-14"
                  />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-600 text-base">
                  <span>Children</span>
                  <input
                    min={1}
                    type="number"
                    placeholder={options.children}
                    className="w-14"
                  />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-600 text-base">
                  <span>Room</span>
                  <input
                    min={1}
                    type="number"
                    placeholder={options.room}
                    className="w-14"
                  />
                </div>
              </div>
            </div>
            <button className="p-2.5 bg-blue-600 rounded my-4 w-full font-bold cursor-pointer text-white">Search</button>
          </div>
          <div className="flex-3"></div>
        </div>
      </div>
    </div>
  );
};

export default List;

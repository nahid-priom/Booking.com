import React, { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  const [active, setActive] = useState(true);
  return (
    <div className=" bg-blue-900 text-white flex relative justify-center">
      <div
        className={`w-full max-w-5xl mt-5 mr-0 ml-0 ${
          type === "list" ? "mb-0" : "mb-24"
        }`}
      >
        <div className="flex items-center gap-x-10 mb-10">
          <div
            className={`flex items-center rounded-3xl p-2.5 ${
              active ? "border-2 border-white" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBed} />
            <span className="ml-2">Stays</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPlane} />
            <span className="ml-2">Flights</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCar} />
            <span className="ml-2">Car Rentals</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBed} />
            <span className="ml-2">Attractions</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faTaxi} />
            <span className="ml-2">Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="text-3xl font-bold ">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="my-5">
              Get reward for your travels & Unlock instant savings of 10% or
              more with a free Booking.com account
            </p>
            <button className="font-bold border-0 py-2 px-4 cursor-pointer rounded text-white bg-blue-500">
              Sign in / Register
            </button>
            <div className="w-full max-w-5xl h-14 bg-white border-2 border-yellow-500 flex items-center justify-around rounded py-5 absolute -bottom-7">
              <div className="flex items-center gap-2.5 border-0 outline-none">
                <FontAwesomeIcon icon={faBed} className="bg-gray-500" />
                <input
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                  placeholder="Where are you going?"
                  className="text-black"
                />
              </div>
              <div className="flex items-center gap-2.5 border-0 outline-none">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="bg-gray-500"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-gray-400 cursor-pointer "
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-14 shadow-md shadow-gray-300 z-10"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="flex items-center gap-2.5 border-0 outline-none">
                <FontAwesomeIcon icon={faPerson} className="bg-gray-500" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="text-gray-400 cursor-pointer"
                >
                  {`${options.adult} adult - ${options.children} children - ${options.room} room`}{" "}
                </span>
                {openOptions && (
                  <div className="absolute top-14 bg-white text-gray-600 border-r-2 shadow-md shadow-gray-300 z-10">
                    <div className="w-48 flex justify-between m-2.5">
                      <span>Adult</span>
                      <div className="flex items-center gap-2.5 text-base text-black">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          className="w-8 h-8 border-2 border-blue-400 text-blue-400 cursor-pointer bg-white disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className="w-8 h-8 border-2 border-blue-400 text-blue-400 cursor-pointer bg-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-48 flex justify-between m-2.5">
                      <span>Children</span>
                      <div className="flex items-center gap-2.5 text-base text-black">
                        <button
                          disabled={options.children <= 1}
                          onClick={() => handleOption("children", "d")}
                          className="w-8 h-8 border-2 border-blue-400 text-blue-400 cursor-pointer bg-white disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="w-8 h-8 border-2 border-blue-400 text-blue-400 cursor-pointer bg-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-48 flex justify-between m-2.5">
                      <span>Room</span>
                      <div className="flex items-center gap-2.5 text-base text-black">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className="w-8 h-8 border-2 border-blue-400 text-blue-400 cursor-pointer bg-white disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="w-8 h-8 border-2 border-blue-400 text-blue-400 cursor-pointer bg-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={handleSearch}
                  className="font-bold border-0 py-1 px-2.5 cursor-pointer rounded text-white bg-blue-500"
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

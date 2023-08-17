import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex flex-col items-center mt-5">
        {open && (
          <div className="sticky top-0 left-0  w-screen h-screen bg-black/50 flex items-center z-50">
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-4xl text-gray-300 cursor-pointer"
              icon={faCircleXmark}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="m-5 text-6xl  text-gray-300 cursor-pointer"
              onClick={() => handleMove("l")}
            />
            <div className="w-full h-full flex items-center justify-center">
              <img
                className="w-3/4 h-4/6"
                src={photos[slideNumber].src}
                alt={photos[slideNumber].src}
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="m-5 text-6xl  text-gray-300 cursor-pointer"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="w-full flex flex-col relative max-w-5xl gap-2.5">
          <button className="absolute top-2.5 right-0 py-2.5 px-5 bg-blue-600 rounded cursor-pointer font-bold text-white">
            Reserve or Book Now!
          </button>
          <h1 className="text-2xl ">Grand Hotel</h1>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="text-xs flex items-center gap-2.5">
              Elton St 125 New york
            </span>
          </div>
          <span className="text-blue-600 font-semibold">
            Excellent Location - 500m from center
          </span>
          <span className="text-green-600 font-semibold">
            Book a stay over $114 at this property and get a free airpoty taxi
          </span>
          <div className="flex flex-wrap justify-between">
            {photos.map((photo, i) => (
              <div className="w-1/3">
                <img
                  onClick={() => handleOpen(i)}
                  className="w-full h-64 pb-2 pr-2 object-cover cursor-pointer"
                  src={photo.src}
                  alt={photo.src}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div className="basis-3/4">
              <h1 className="text-2xl font-bold">
                Stay in the heart of Krakow
              </h1>
              <p className="text-xs mt-5">
                Perfectly situated on the beachfront, the historical backdrop of
                The Radisson Blu Grand Hotel & Spa, Malo-les-Bains makes it the
                perfect getaway for a relaxing holiday with family or friends.
                The hotel is just a stone's throw from three museums, public
                parks, and restaurants, so you can explore this lively resort
                town and later unwind in the hotel’s spa and wellness area. The
                hotel also boasts direct access to the Malo-les-Bains beach.{" "}
              </p>
            </div>
            <div className="basis-1/4 rounded bg-gray-200 p-5 flex flex-col gap-5">
              <h1 className="text-base font-bold text-gray-700 ">
                Perfect for a 9 night stay!
              </h1>
              <span className="text-sm">
                Located in the real heart of Krakow, this property has an
                Excellent location score of 9.8
              </span>
              <h2 className=" font-semibold">
                <b>$945</b> (9 nights)
              </h2>
              <button className="py-2.5 px-5 bg-blue-600 rounded cursor-pointer font-bold text-white">
                Reserve or book now!
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;

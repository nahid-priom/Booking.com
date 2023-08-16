import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className=" mt-12 flex flex-col items-center gap-4">
        <Featured />

        <h1 className="font-extrabold w-100 text-xl py-4">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="font-extrabold w-100 text-xl py-4">Home guests Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

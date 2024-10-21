import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`,
      }}
    >
      <div className="w-full bg-slate-700 text-white font-extrabold text-center">
        Avenger EndGame
      </div>
    </div>
  );
};

export default Banner;

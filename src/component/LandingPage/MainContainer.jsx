import React from "react";

const MainContainer = () => {
  const length = 100;
  return (
    <div className=" w-full h-full flex">
      <div className=" h-[95%] w-[94%] grid my-auto mr-auto grid-cols-[repeat(14,1fr)] grid-rows-[repeat(17,1fr)]">
        <div className="col-span-6 row-span-3 bg-gray-400"> </div>
        <div className="col-span-3 row-span-2 bg-gray-400 col-start-8"></div>
        <div className="col-span-3 row-span-2 bg-gray-400 col-start-8"></div>
        <div className="col-span-4 row-span-full col-start-11 bg-gray-400"></div>
        <div className="col-span-5 row-span-7 bg-gray-400"></div>
        <div className="col-span-5 row-span-5 bg-gray-400 row-start-6 col-start-6"></div>
        <div className="col-span-10 row-span-7 bg-gray-400 "></div>
      </div>

      {/* <div className="absolute w-[22em] h-[17em] bg-[#635399] border-[#8d8ef8] border-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 rounded-xl"></div>
      <div
        className="absolute w-[22em] h-[17em] left-1/2 top-1/2 transform -translate-x-[38%] -translate-y-[48%] z-10 rounded-xl"
        style={{
          background: "linear-gradient(to bottom, #af9fd1, #532f8f)",
          opacity: "17%",
        }}
      ></div> */}
    </div>
  );
};
export default MainContainer;

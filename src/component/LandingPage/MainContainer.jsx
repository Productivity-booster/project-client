import React from "react";
import WelcomeContainer from "./WelcomeContainer";
import DigitalClock from "./DigitalClock";
import ImportantNotiContainer from "./ImportantNotiContainer";
import WeatherWidget from "./WeatherWidget";
import ExpenseTracker from "./ExpenseTracker";
import TasksOverview from "./TaksOverview";

const MainContainer = () => {
  const length = 100;
  return (
    <div className=" w-full h-full flex">
      <div className=" h-[88%] w-[88%] grid my-auto ml-[2rem] mr-auto grid-cols-[repeat(14,1fr)] grid-rows-[repeat(17,1fr)]">
        <div className="col-span-6 row-span-3">
          <WelcomeContainer />
        </div>
        <div className="col-span-3 row-span-2 col-start-8">
          <DigitalClock />
        </div>
        <div className="col-span-3 row-span-2 col-start-8">
          <WeatherWidget />
        </div>
        <div className="col-span-4 row-span-full col-start-11">
          <ImportantNotiContainer />
        </div>
        <div className="col-span-5 row-span-7 bg-gray-400"></div>
        <div className="col-span-5 row-span-5 row-start-6 col-start-6">
          <TasksOverview />
        </div>
        <div className="col-span-10 row-span-7">
          <ExpenseTracker />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;

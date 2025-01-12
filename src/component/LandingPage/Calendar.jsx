import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);

  const today = new Date();
  const dayOfMonth = today.getDate();

  useEffect(() => {
    const generateCurrentMonthCalendar = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth();

      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
      const startDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust to Mon-Sun

      let result = Array(5)
        .fill(null)
        .map(() => Array(7).fill(""));
      let day = 1;

      // Fill the result
      for (let row = 0; row < 5; row++) {
        for (let col = row === 0 ? startDay : 0; col < 7; col++) {
          if (day > daysInMonth) break;
          result[row][col] = day++;
        }
      }

      while (day <= daysInMonth) {
        for (let col = 0; col < 7; col++) {
          if (result[0][col] === "") {
            result[0][col] = day++;
            if (day > daysInMonth) break;
          }
        }
      }

      setCalendar(result);
    };

    generateCurrentMonthCalendar();
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
  {/* Days of the week */}
  <div className="flex w-full h-[10%]">
    {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map((day) => (
      <span
        key={day}
        className="grow text-center text-[#cddcff] pb-3 flex items-center justify-center"
      >
        {day}
      </span>
    ))}
  </div>

  {/* Calendar Grid */}
  <div className="calendar-container w-full h-[90%] grid grid-cols-7 grid-rows-5">
    {calendar.map((week, rowIndex) =>
      week.map((day, colIndex) => (
        <span
          key={`${rowIndex}-${colIndex}`}
          className={`flex cursor-default items-center justify-center border border-[#c2c2ff]/[52%] text-[#a1b0d4] hover:border-[#c2c2ff] hover:bg-[#cddcff]/[40%] ${
            day === dayOfMonth ? "bg-[#cddcff]/[36%] text-white" : ""
          }`}
        >
          {day}
        </span>
      ))
    )}
  </div>
</div>

  );
};

export default Calendar;

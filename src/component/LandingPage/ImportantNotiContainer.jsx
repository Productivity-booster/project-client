import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ImportantNotiContainer = () => {
  const [examList, setExamList] = useState([]);
  const [assignmentList, setAssignmentList] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const fetchNoti = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/mainPage/getNotifications`,
          {
            withCredentials: true,
          }
        );

        console.log(response.data);

        setAssignmentList(response.data.assignments);
        setEventList(response.data.events);
        setExamList(response.data.exams);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchNoti();
  }, []);

  // useEffect(() => {
  //   console.log("Assignment List Updated:", assignmentList);
  //   console.log("Event List Updated:", eventList);
  //   console.log("Exam List Updated:", examList);
  // }, [assignmentList, eventList, examList]);

  return (
    <div className="relative w-full h-full flex">
      <div className="relative w-[90%] h-[96%] ml-auto bg-[#22073d]/[46%] my-auto rounded-xl border-[#140020]/[46%] py-[5%] z-10">
        <h1 className="text-[#cddcff] text-xl border-b-[1px] border-[#cddcff] mx-[8%] h-[6%]">
          <span className=" flex mx-auto w-max font-bold">
            Important Notifications
          </span>
        </h1>

        <div className="relative main-container w-[88%] m-auto h-full my-[5%] ">

          {/* Exam */}
          <div className="exam-group w-full h-[30%] flex flex-col mb-1 rounded-md overflow-hidden">
            <h1 className="text-[#cbc5f2] font-bold mx-[4%] text-lg mb-1">
              · Exams
            </h1>
            <div className="w-full flex-1 h-max overflow-y-auto text-[#cddcff] snap-y mb-1 snap-proximity">
              {examList.map((exam, index) => (
                <div
                  key={index}
                  className={`relative w-full rounded-lg px-2 py-0.5 mb-2 snap-center ${
                    index % 2 === 0
                      ? "bg-[#92a7c8]/[24%]"
                      : "bg-[#d4baff]/[24%]"
                  }`}
                >
                  <h1 className="text-xs">{exam.exam_name}</h1>
                  <span className="text-xs">{exam.exam_date}</span>
                </div>
              ))}
            </div>
          </div>


          {/* Assignment */}
          <div className="assignment-group w-full h-[30%] flex flex-col mb-1 rounded-md overflow-hidden">
            <h1 className="text-[#cbc5f2] font-bold text-lg mb-1">
              · Assignments
            </h1>
            <div className="w-full flex-1 h-max overflow-y-auto text-[#cddcff] mb-1 snap-y snap-proximity">
              {assignmentList.map((assignment, index) => (
                <div
                  key={index}
                  className={`relative w-full rounded-lg px-2 py-0.5 mb-2 snap-center ${
                    index % 2 === 0
                      ? "bg-[#92a7c8]/[24%]"
                      : "bg-[#d4baff]/[24%]"
                  }`}
                >
                  <h1 className="text-xs truncate">{assignment.assignment_name}</h1>
                  <span className="text-xs">{assignment.assignment_duedate}</span>
                </div>
              ))}
            </div>
          </div>


          {/* Event */}
          <div className="event-group w-full h-[30%] flex flex-col mb-2 rounded-md overflow-hidden">
            <h1 className="text-[#cbc5f2] font-bold mx-[4%] text-lg mb-1">
              · Events
            </h1>
            <div className="w-full flex-1 h-max overflow-y-auto text-[#cddcff] mb-1 snap-y snap-proximity">
              {eventList.map((event, index) => (
                <div
                  key={index}
                  className={`relative w-full rounded-lg px-2 py-0.5 mb-2 snap-center ${
                    index % 2 === 0
                      ? "bg-[#92a7c8]/[24%]"
                      : "bg-[#d4baff]/[24%]"
                  }`}
                >
                  <h1 className="text-xs">{event.event_name}</h1>
                  <span className="text-xs">{event.event_date}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
      <div
        className="absolute w-[90%] h-[90%] top-1/2 right-0 -translate-y-[47%] translate-x-[6%] my-auto bg-white rounded-xl z-0"
        style={{
          background: "linear-gradient(to bottom, #af9fd1, #532f8f)",
          opacity: "14%",
        }}
      ></div>
    </div>
  );
};

export default ImportantNotiContainer;

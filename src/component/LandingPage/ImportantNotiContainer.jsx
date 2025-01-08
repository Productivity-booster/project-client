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

        // console.log(response.data);

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
      <div className="relative w-[90%] h-[90%] ml-auto bg-[#22073d]/[46%] my-auto rounded-xl border-[#140020]/[46%] py-[5%]">
        <h1 className="text-[#cddcff] text-xl border-b-[1px] border-[#cddcff] mx-[8%] h-[6%]">
          <span className=" flex mx-auto w-max font-bold">
            Important Notifications
          </span>
        </h1>

        <div className="relative main-container w-[88%] m-auto h-[93%] my-[5%] ">
        <h1 className="text-[#cbc5f2] font-bold mx-[4%] text-lg">
              · Exams
            </h1>
            <div className="relative w-full h-[250px] overflow-hidden">
              <div className=" w-full h-full overflow-auto">
                {examList.map((exam, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-400 w-full h-10 rounded-lg p-2 mb-2"
                  >
                    <h1>{exam.exam_name}</h1>
                    <span>{exam.exam_date}</span>
                  </div>
                ))}
              </div>
          </div>

          <div className="assignment-group w-full h-[33%]">
            <h1 className="text-[#cbc5f2] font-bold mx-[4%] text-lg">
              · Assignments
            </h1>
            <div></div>
          </div>

          <div className="event-group w-full h-[33%]">
            <h1 className="text-[#cbc5f2] font-bold mx-[4%] text-lg">
              · Events
            </h1>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="absolute w-[90%] h-[90%] top-1/2 right-0 -translate-y-[47%] translate-x-[6%] my-auto bg-white rounded-xl"
        style={{
          background: "linear-gradient(to bottom, #af9fd1, #532f8f)",
          opacity: "14%",
        }}
      ></div>
    </div>
  );
};

export default ImportantNotiContainer;

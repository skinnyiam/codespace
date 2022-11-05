import React, { useState, useEffect } from "react";
import DayCard from "./dayCard";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import Norecords from "../components/noredords"
import useFirestore from "../hooks/useFirestore";
import { useUserAuth } from "../context/authContext";

const Journal = () => {
  const { user } = useUserAuth();
  const { getDay } = useFirestore();

  const [records, setRecords] = useState([]);

  const getDayRecords = () => {
    if (user) {
      getDay(user.uid).then((data) => {
        setRecords(data);
        console.log(data);
      });
    }
  };

  useEffect(() => {
    getDayRecords();
  }, []);

  return (
    <div className="max-w-[850px] mx-auto h-auto pb-10 ">
      <div className="flex justify-center mt-4 ">
        <h1 className="sm:text-2xl font-bold text-white text-xl mx-auto">
          {" "}
          Welcome Saurabh to CodeSpace
        </h1>
      </div>

      <div className="sm:mt-6 mt-4  mx-w-[850px] flex justify-between sm:mx-0 mx-[-10px]  bg-white w-full sm:h-20 h-auto rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg border-0 border-black drop-shadow-2xl p-6 ">
        <h1 className="font-bold text-md ">
          Plan your day here ... What you learnt ? , save your resources , What
          went well ?
        </h1>
        <Tooltip
          label="Create new Document"
          aria-label="A tooltip"
          placement="top"
        >
          <button className="mb-2">
            <Link href="/editjournal">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </Link>
          </button>
        </Tooltip>
      </div>
      <h1 className="mt-6 text-xl flex justify-center font-bold text-white">
        Previous Records
      </h1>

      <div className="text ml-2 font-semibold text-zinc-200 w-auto max-h-[2000px]">
           {
            records.length==0 ? <Norecords /> : null
           }
        { records.map((el) => {
          return (
            <DayCard
              day={el.datas.day}
              focus={el.datas.focus}
              id={el.id}
              key={el.id}
              records={records}
              setRecords={setRecords}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Journal;

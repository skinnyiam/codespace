import React, { useState } from "react";
import Head from "next/head";
import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { useUserAuth } from "../context/authContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useFirestore from "../hooks/useFirestore";

 

const ViewDocument = () => {
  const router = useRouter();
  const [details, setdetails] = useState(null);

  useEffect(() => {
    console.log(router.query.q);
    getData();
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { user } = useUserAuth();
  const { getParticularData} = useFirestore();

  const getData = () => {
    if (user) {
      getParticularData(user.uid, router.query.q).then((data) => {
        setdetails(data);
        console.log(data);
      });
    }
  };

  

  return (
    <>
      <Head>
        <title>Day: {!details ? null : details.day} | Codespace</title>
        <link rel="icon" type="image/png" sizes="16*16" href="/Code1.png" />
      </Head>
      {!details ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-auto pt-[70px] pb-10 ">
          <div className="flex justify-end max-w-[850px] mx-auto mb-4 ">
            {/* <h1 className="font-semibold ">Day 13</h1> */}
            <div className="flex justify-between">
              <Tooltip
                label="Back to DashBoard"
                aria-label="A tooltip"
                placement="left-start"
              >
                <button>
                  <Link href="/dashboard">
                    <svg
                      className="mr-2"
                      stroke="currentColor"
                      fill="currentColor"
                     
                      viewBox="0 0 16 16"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                       
                        d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                      
                      ></path>
                      <path
                      
                        d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                       
                      ></path>
                    </svg>
                  </Link>
                </button>
              </Tooltip>
            </div>
          </div>

          <div className=" h-auto bg-[url('/paper.jpg')] bg-cover bg-no-repeat p-6 bg-white mx-auto max-w-[980px] rounded-lg ">
            <h1 className="flex font-HandWriting justify-center text-gray-600 font-semibold text-2xl">
              Day : {details.day}
            </h1>
            <h1 className="flex font-HandWriting justify-center text-gray-600 font-semibold text-2xl mt-4">
              Date : {details.date}
            </h1>
            <div className="flex flex-col">
              <h1 className="font-HandWriting text-gray-600 font-bold text-2xl underline underline-offset-4">
                Focused on :
              </h1>
              <h1 className="font-HandWriting text-gray-600 font-thin text-2xl mt-4 p-4">
                {details.focus}
              </h1>
            </div>
            <div className="flex flex-col mt-4">
              <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl underline underline-offset-4">
                Accomplised tasks :
              </h1>
              <div className="flex flex-col mt-4 p-4">
                <ul>
                  {!details.task1 ? null : (
                    <li className="list-disc font-HandWriting text-gray-600 font-thin text-2xl ">
                      {details.task1}
                    </li>
                  )}
                  {!details.task2 ? null : (
                    <li className="list-disc font-HandWriting text-gray-600 font-thin text-2xl ">
                      {details.task2}
                    </li>
                  )}
                  {!details.task3 ? null : (
                    <li className="list-disc font-HandWriting text-gray-600 font-thin text-2xl ">
                      {details.task3}
                    </li>
                  )}
                  {!details.task4 ? null : (
                    <li className="list-disc font-HandWriting text-gray-600 font-thin text-2xl ">
                      {details.task4}
                    </li>
                  )}
                  {!details.task5 ? null : (
                    <li className="list-disc font-HandWriting text-gray-600 font-thin text-2xl ">
                      {details.task5}
                    </li>
                  )}
                </ul>
              </div>
              <div className="flex flex-col mt-4">
                <h1 className="font-HandWriting text-gray-600 font-bold text-2xl underline underline-offset-4">
                  Topics i Learned on :
                </h1>
                <h1 className="font-HandWriting text-gray-600 font-thin text-2xl mt-4 p-4">
                  {details.learned}
                </h1>
              </div>

              <div className="flex flex-col mt-4">
                <h1 className="font-HandWriting text-gray-600 font-bold text-2xl underline underline-offset-4">
                  Resources i Used :
                </h1>
                <h1 className="font-HandWriting text-gray-600 font-thin text-2xl mt-4 p-4">
                  {details.resources}
                </h1>
              </div>

              <div className="flex flex-col mt-4">
                <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl underline underline-offset-4">
                  What went well :
                </h1>
                <h1 className="font-HandWriting text-gray-600 font-thin text-2xl mt-4 p-4">
                  {details.wentWell}
                </h1>
              </div>

              <div className="w-full flex  justify-between p-8">
                <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                  Did i make progress toward my goals :
                </h1>
                <div className="flex ">
                  <div className="flex ">
                    <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                      {details.goal}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full flex  justify-between p-8">
                <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                  Did i share my progress :
                </h1>
                <div className="flex ">
                  <div className="flex">
                    <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                      {details.progress}
                    </h1>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewDocument;

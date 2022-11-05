import React, { useState } from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import Head from "next/head";
import useFirestore from "../hooks/useFirestore";
import { useUserAuth } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditJournal = () => {

  const ToastSuccess = () => {
    toast.success("Document Saved!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const ToastError = () => {
    toast.error("Please fill full details!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [time,setTime]=useState("")
  const [data, setData] = useState({
    focus: "",
    task1: "",
    task2: "",
    task3: "",
    task4: "",
    task5: "",
    learned: "",
    resources: "",
    wentWell: "",
    goal: "",
    progress: "",
    day:"",
    date:"",
    
  });
  const { user } = useUserAuth();
  const { editDay } = useFirestore();

  const handleSubmit = (event) => {
    
    if (user) {
      var today = new Date();
      var time = today.getTime();
      console.log(time);
      
      setTime(time);
      data={...data,time}
      if(!data.date || !data.day || !data.focus || !data.goal || !data.learned || !data.progress || !data.resources || !data.task1 || !data.wentWell){
        ToastError()
        return false;
      }
      editDay(user.uid, data,time);
      ToastSuccess();
      
      setData({
        focus: "",
        task1: "",
        task2: "",
        task3: "",
        task4: "",
        task5: "",
        learned: "",
        resources: "",
        wentWell: "",
        goal: "",
        progress: "",
        day:"",
        date:""
      })
    } else {
      console.log("fuck you");
    }

    console.log(data);
  };

  return (
    <>
      <Head>
        <title> Edit Document | Codespace </title>{" "}
        <link rel="icon" type="image/png" sizes="16*16" href="/Code1.png" />
      </Head>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-auto pt-[70px] ">
        <div className="flex justify-between max-w-[980px] mx-auto mb-4 ">
          <h1 className="font-semibold ">Create your Document</h1>
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
        <form >
        <div className=" h-auto bg-[url('/paper.jpg')] bg-cover bg-no-repeat p-6 bg-white mx-auto max-w-[980px] rounded-lg ">
          <div className="flex justify-center items-center">
          <ToastContainer closeOnClick />
            
          <h1 className="flex font-HandWriting justify-center text-gray-600 font-semibold text-2xl">
            Day :
          </h1>
          <input
          required
           value={data.day}
           onChange={(e) => {
            setData({
              ...data,
              day: e.target.value,
            });
          }}
          type="number" className="bg-gray-600 h-8  opacity-50 rounded-lg text-white ml-2 outline-none p-4 font-HandWriting font-thin text-lg"/>
          </div>
          <div className="flex justify-center items-center">

          <h1 className="flex font-HandWriting justify-center text-gray-600 font-semibold text-2xl mt-4">
            Date :
          </h1>
          <input
          required
           value={data.date}
           onChange={(e) => {
            setData({
              ...data,
              date: e.target.value,
            });
          }}
          type="date" className="bg-gray-600 mt-4 h-8 opacity-50 w-auto rounded-lg text-white ml-2 outline-none p-4 font-HandWriting font-thin text-lg"/>
          </div>

          <div className="flex flex-col">
            <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
              Today i am focusing on :
            </h1>
            <textarea
            required
              value={data.focus}
              onChange={(e) => {
                setData({
                  ...data,
                  focus: e.target.value,
                });
              }}
              className="bg-gray-600 h-28 opacity-50 rounded-lg text-white mt-2 outline-none p-4 font-HandWriting font-thin text-lg"
              type="text"
            />
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
              Today Action Plan :
            </h1>
            <div className="border-0 border-gray-600 h-auto w-full bg-zinc-800 rounded-lg opacity-50 mt-2">
              <div className="h-10 w-full bg-black  rounded-t-lg flex justify-center items-center">
                <h1 className="font-HandWriting text-white font-semibold text-2xl">
                  TASK
                </h1>
              </div>
              <div className=" p-6">
                <div className="w-full flex justify-between p-4">
                  <textarea
                  required
                    value={data.task1}
                    onChange={(e) => {
                      setData({
                        ...data,
                        task1: e.target.value,
                      });
                    }}
                    className="w-full bg-slate-700 text-white outline-none font-thin font-HandWriting rounded-lg p-[7px] h-10"
                    type="text "
                    name=""
                    id=""
                  />
                </div>
                <div className="w-full flex justify-between p-4">
                  <textarea
                    value={data.task2}
                    onChange={(e) => {
                      setData({
                        ...data,
                        task2: e.target.value,
                      });
                    }}
                    className="w-full bg-slate-700 text-white outline-none font-thin font-HandWriting rounded-lg p-[7px] h-10"
                    type="text "
                    name=""
                    id=""
                  />
                </div>
                <div className="w-full flex justify-between p-4">
                  <textarea
                    value={data.task3}
                    onChange={(e) => {
                      setData({
                        ...data,
                        task3: e.target.value,
                      });
                    }}
                    className="w-full bg-slate-700 text-white outline-none font-thin font-HandWriting rounded-lg p-[7px] h-10"
                    type="text "
                    name=""
                    id=""
                  />
                </div>
                <div className="w-full flex justify-between p-4">
                  <textarea
                    value={data.task4}
                    onChange={(e) => {
                      setData({
                        ...data,
                        task4: e.target.value,
                      });
                    }}
                    className="w-full bg-slate-700 text-white outline-none font-thin font-HandWriting rounded-lg p-[7px] h-10"
                    type="text "
                    name=""
                    id=""
                  />
                </div>
                <div className="w-full flex justify-between p-4">
                  <textarea
                    value={data.task5}
                    onChange={(e) => {
                      setData({
                        ...data,
                        task5: e.target.value,
                      });
                    }}
                    className="w-full bg-slate-700 text-white outline-none font-thin font-HandWriting rounded-lg p-[7px] h-10"
                    type="text "
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                Today i Learned :
              </h1>
              <textarea
              required
                value={data.learned}
                onChange={(e) => {
                  setData({
                    ...data,
                    learned: e.target.value,
                  });
                }}
                className="bg-gray-600 h-28 opacity-50 rounded-lg text-white mt-2 outline-none p-4 font-HandWriting font-thin text-lg"
                type="text"
              />
            </div>

            <div className="flex flex-col mt-4">
              <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                Resources i Used :
              </h1>
              <textarea
              required
                value={data.resources}
                onChange={(e) => {
                  setData({
                    ...data,
                    resources: e.target.value,
                  });
                }}
                className="bg-gray-600 h-28 opacity-50 rounded-lg text-white mt-2 outline-none p-4 font-HandWriting font-thin text-lg"
                type="text"
              />
            </div>

            <div className="flex flex-col mt-4">
              <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                What went well :
              </h1>
              <textarea
              required
                value={data.wentWell}
                onChange={(e) => {
                  setData({
                    ...data,
                    wentWell: e.target.value,
                  });
                }}
                className="bg-gray-600 h-28 opacity-50 rounded-lg text-white mt-2 outline-none p-4 font-HandWriting font-thin text-lg"
                type="text"
              />
            </div>

            <div className="w-full flex  justify-between p-8">
              <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                Did i make progress toward my goals :
              </h1>
              <div className="flex ">
                <div className="flex mr-4">
         

                  <input
                  required
                  className="bg-gray-600 h-8  opacity-50 rounded-lg text-white ml-2 outline-none p-4 font-HandWriting font-thin text-lg"
                    value={data.goal}
                    onChange={(e) => {
                      setData({
                        ...data,
                        goal: e.target.value,
                      });
                    }}
                    
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex  justify-between p-8">
              <h1 className="font-HandWriting text-gray-600 font-semibold text-2xl">
                Did i share my progress :
              </h1>
              <div className="flex ">
                <div className="flex mr-4">
                  <input
                  required
                    value={data.progress}
                    onChange={(e) => {
                      setData({
                        ...data,
                        progress: e.target.value,
                      });
                    }}
                  className="bg-gray-600 h-8  opacity-50 rounded-lg text-white ml-2 outline-none p-4 font-HandWriting font-thin text-lg"
                   
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

           
          </div>
          <div className="flex justify-center mt-8 ">
            <button
              onClick={handleSubmit}
              
              className=" h-[33px] font-medium w-[170px] rounded-lg text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Submit
            </button>
          </div>
         
        </div>
        </form>
      </div>
    </>
  );
};

export default EditJournal;
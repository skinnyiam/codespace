import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Lottie from "react-lottie";
import Code from "../lotties/code.json";

const Index = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Code,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Head>
        <title> Home | Codespace </title>{" "}
        <link rel="icon" type="image/png" sizes="16*16" href="/Code1.png" />
      </Head>{" "}
      <div className=" h-screen w-full mx-auto pt-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {" "}
        {/* terminal div  */}{" "}
        <div className="flex flex-col h-[600px] mt-8 bg-black rounded-2xl max-w-[1160px] mx-4 sm:mx-4 md:mx-4 lg:mx-auto ">
          <div className="bg-slate-600 h-[30px]  rounded-t-2xl flex">
            <div className="ml-2 flex">
              <div className="rounded-full h-[15px] w-[15px] bg-red-600 mt-2 mr-2">
                {" "}
              </div>{" "}
              <div className="rounded-full h-[15px] w-[15px] bg-yellow-400 mt-2 mr-2">
                {" "}
              </div>{" "}
              <div className="rounded-full h-[15px] w-[15px] bg-green-600 mt-2 mr-2">
                {" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex mt-10 justify-between ">
            <div className="flex flex-col w-[500px] ml-2 sm:ml-20 mt-0 pl-2 sm:pl-8">
              <h1 className="text-blue-600 font-bold text-4xl"> {"<h1>"} </h1>{" "}
              <h1 className="text-white font-bold text-4xl">
                {" "}
                {"Happy Coding !"}{" "}
              </h1>{" "}
              <h1 className="text-blue-600 font-bold text-4xl"> {"</h1>"} </h1>{" "}
              <h2 className="text-blue-600 mt-4 font-bold text-3xl">
                {" "}
                {"<h3>"}{" "}
              </h2>{" "}
              <h2 className="text-white font-bold text-3xl">
                {" "}
                {"100 DAYS OF CODE"}{" "}
              </h2>{" "}
              <h2 className="text-blue-600 mt-2 font-bold text-3xl">
                {" "}
                {"</h3>"}{" "}
              </h2>{" "}
              <p className="text-blue-600 font-bold mt-4 text-xl"> {"<p>"} </p>{" "}
              <p className="text-white font-normal text-xl">
                {" "}
                {
                  "CodeSpace provides a platform where coders can update their daily task."
                }{" "}
              </p>{" "}
              <p className="text-white font-normal text-xl">
                {" "}
                {"Plan for what to learn, save their codes to revise."}{" "}
              </p>{" "}
              <p className="text-blue-600  text-xl font-bold"> {"</p>"} </p>{" "}
              <button className="h-10  m-4 w-[130px]  font-semibold text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                <Link href="/dashboard"> Get Started </Link>{" "}
              </button>{" "}
            </div>{" "}
            <div className="w-[400px]  justify-center items-center pr-20 z-30 hidden sm:hidden md:hidden lg:flex">
              {" "}
              {/* <img src="/cp.png" alt="" width="350px" height="350px" /> */}{" "}
              <Lottie options={defaultOptions} height={300} width={300} />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Index;

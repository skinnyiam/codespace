import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Writing from "../lotties/writing.json";
import Lottie from "react-lottie";
import Writing1 from "../lotties/writing1.json";
import Writing2 from "../lotties/writing2.json";
import Sprinkle from "../lotties/sprinklet.json";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "../context/authContext";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  // const [show, Dontshow] = useState(false);
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleSignin } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      ToastSuccess();
    } catch (err) {
      console.log(err);
      ToastError();
    }
  };

  const getJokes = async () => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Dark?amount=1`);
    const data = await response.json();
    console.log(data.setup);
    console.log(data.delivery);
    setSetup(data.setup);
    setDelivery(data.delivery);
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    await googleSignin();
    ToastSuccess();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Writing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: Sprinkle,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionss = {
    loop: true,
    autoplay: true,
    animationData: Writing1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsss = {
    loop: true,
    autoplay: true,
    animationData: Writing2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const ToastError = () => {
    toast.error("Invalid Credentials!", {
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

  const ToastSuccess = () => {
    toast.success("Login Successful!", {
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

  return (
    <>
      <Head>
        <title> Login | Codespace </title>{" "}
        <link rel="icon" type="image/png" sizes="16*16" href="/Code1.png" />
      </Head>
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen  pt-[75px] mx-auto">
        <div className="max-w-[1180px]  mx-auto flex justify-around sm:h-[80vh] h-fit  rounded-2xl">
          {/* main div  */}

          <div className="flex ">
            {/* pic div  */}

            <div className="w-[590px] bg-gray-600 md:block sm:block hidden">
              <div className="pt-4 flex justify-center ">
                <button
                  onClick={getJokes}
                  className=" h-[33px] font-medium w-[170px] rounded-lg text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                  Make me Laugh
                </button>
              </div>

              {/* {jokes div } */}
              {setup && setup.length == 0 ? (
                <div className="pt-4">
                  <div className="border border-blue-200  shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"> </div>

                        <div className="space-y-3">
                          <div className="h-2 bg-slate-700 rounded"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-4">
                  <div className="border border-blue-200 rounded-md p-4 max-w-sm w-full mx-auto">
                    <h1 className="text-white">{setup}</h1>
                    <h1 className="text-white">{delivery}</h1>
                  </div>
                </div>
              )}
              <div className="flex justify-center pt-20">
                <div className="rounded-full bg-slate-700 h-44 w-44 mr-2 pt-2">
                  <Lottie options={defaultOptionsss} height={140} width={140} />
                </div>
                <div className="rounded-full bg-slate-700 h-44 w-44 mr-2 pt-2">
                  <Lottie options={defaultOptionss} height={160} width={160} />
                </div>

                <div className="rounded-full bg-slate-700 h-44 w-44 pt-4 ">
                  <Lottie options={defaultOptions} height={120} width={120} />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mx-auto pt-8">
                <h1 className="text-3xl font-bold text-white">
                  Start your Journey with{" "}
                </h1>
                <h1 className="text-3xl font-bold text-black ">
                  {"<CodeSpace />"}
                </h1>
              </div>
            </div>

            {/* login div  */}

            <div className="flex flex-col justify-center items-center sm:h-auto  sm:w-[590px] bg-transparent sm:bg-stone-300 w-auto">
              <div className="absolute z-10 ml-8 ">
                {/* <Lottie options={defaultOptions1} height={600} width={900} /> */}
              </div>
              <div className="  bg-gray-600 rounded-2xl sm:h-[500px] h-auto w-[300px] p-2 sm:p-0 shadow-lg shadow-gray-800 z-40">
                <div className="flex flex-col justify-center items-center mt-2">
                  <img className="h-[30px] w-[30px]" src="/logo.png" alt="" />
                  <h3 className="text-3xl ml-10 font-bold text-white ">
                    {" "}
                    Nice to see you again!!!{" "}
                  </h3>
                </div>

                <div className="flex flex-col mt-8">
                  <form method="POST" className="">
                    <div className="mb-4">
                      <h1 className="text-xl text-white font-medium ml-8">
                        Email
                      </h1>
                      <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control block w-60 mx-auto px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-4">
                      <h1 className="text-xl text-white font-medium ml-8">
                        Password
                      </h1>
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control block w-60 mx-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center pt-1">
                      <button
                        onClick={handleSubmit}
                        className=" h-[33px] font-medium w-[170px] rounded-lg text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                      >
                        Login
                      </button>
                      <ToastContainer closeOnClick />
                    </div>
                    <div className="text-center pt-1">
                      <button
                        onClick={handleGoogle}
                        className="flex justify-center items-center mx-auto h-[33px] w-[210px] rounded-lg mt-4 font-semibold text-white bg-gray-700 "
                      >
                        <FcGoogle className="text-xl mr-2" />
                        Continue with Google
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xl font-medium mx-auto text-white">
                        Dont have an account?
                      </p>
                    </div>
                  </form>
                </div>

                <div>
                  <button className="text-xl text-white font-normal underline underline-offset-4 ml-[110px] mt-2">
                    <Link href="/signup">{"Register"}</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

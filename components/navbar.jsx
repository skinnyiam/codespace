import React from "react";
import { useUserAuth } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const ToastSuccess = () => {
    toast.success("User LogOut!", {
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
  const router = useRouter();
  const { user, logOut } = useUserAuth();

  const handleLogout = () => {
    logOut();
    ToastSuccess();
  };

  return (
    <div className="z-40 fixed  backdrop-filter backdrop-blur-lg bg-opacity-0 flex justify-evenly bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  w-screen h-[50px] rounded-b-lg border-b-0 border-black drop-shadow-2xl">
      <div className=" flex ">
        <img
          className="h-[30px] w-[30px] mt-[10px] mr-2"
          src="/logo.png"
          alt=""
        />
        <button className="text-2xl font-semibold hidden sm:flex">
          <Link href="/">{"<CodeSpace />"}</Link>
        </button>
      </div>
      <div>
        {user ? (
          <ul className="flex justify-content items-center mt-[13px]">
            <button className="mr-4 font-bold">
              <Link href="/">{"<Home/>"}</Link>
            </button>
            <button className="mr-4 font-bold">
              <Link href="/dashboard">{"<Dashboard/>"}</Link>
            </button>
            <button onClick={handleLogout} className="mr-4 font-bold">
              <Link href="/login">{"<Logout/>"}</Link>
              <ToastContainer closeOnClick />
            </button>

            {/* <li className='mr-4'>{renderThemeChanger()}</li> */}
          </ul>
        ) : (
          <ul className="flex justify-content items-center mt-[13px]">
            <button className="mr-4 font-bold">
              <Link href="/">{"<Home/>"}</Link>
            </button>
            <button className="mr-4 font-bold">
              <Link href="/dashboard">{"<Dashboard/>"}</Link>
            </button>
            <button className="mr-4 font-bold">
              <Link href="/login">{"<Login/>"}</Link>
            </button>

            {/* <li className='mr-4'>{renderThemeChanger()}</li> */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

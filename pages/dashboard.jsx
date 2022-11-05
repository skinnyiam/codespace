import React ,{useEffect}from "react";
import Head from "next/head";
import Link from "next/link";
import UserIsNotLogginIn from "../components/userIsNotLogginIn";

import Journal from "../components/journal";
import { useUserAuth } from '../context/authContext'




const Dashboard = () => {
  const {user} =useUserAuth();
  return (
    <>
      <Head>
        <title> Dashboard | Codespace </title>{" "}
        <link rel="icon" type="image/png" sizes="16*16" href="/Code1.png" />
      </Head>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  max-h-[2000px] h-screen pt-[70px] mx-auto ">
        {/* <h1>Dashboard</h1>  */}
        {/* when user is not log in   */}
        {!user?<UserIsNotLogginIn /> :<Journal />}
        
        
      </div>
    </>
  );
};

export default Dashboard;

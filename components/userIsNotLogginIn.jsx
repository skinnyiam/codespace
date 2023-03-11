import React from "react";
import Lottie from "react-lottie";
import Error from "../lotties/error.json";
import Link from "next/link";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Error,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const UserIsNotLogginIn = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mt-20 ">
        <h1 className="text-2xl font-medium mx-auto">
          Oops!! 😔 Please{" "}
          <span className="text-sky-900 underline underline-offset-4">
            <Link href="/login">{"Login"}</Link>
          </span>{" "}
          first to see your beautiful written Codes
        </h1>
      </div>
      <div className="">
        <Lottie options={defaultOptions} height={320} width={320} />
      </div>
    </div>
  );
};

export default UserIsNotLogginIn;

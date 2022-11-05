import React from "react";

const noredords = () => {
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-white font-bold text-2xl mt-10 text-center">
        Ooops... we dont find anything
      </h1>
      <div
        className="flex p-4 mb-4 mt-10 max-w-[600px] mx-auto text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Warning alert!---></span> 
           There is nothing to show here...
        </div>
      </div>
    </div>
  );
};

export default noredords;

import React, { useState,useEffect } from "react";


const Input = () => {

  
  const [flag,setFlag] = useState(false)
  const [input, setInput] = useState({
    
    progress: "",
    resources: "",
    outcome: "",
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const handle =()=>{
   
    console.log(input);
    buttonHandler();
   
   }

   useEffect(()=>{
    console.log(input);
   },[input])
   
   const buttonHandler = () => {
    setFlag(current => !current)
    console.log(flag) // is false 
  }
  // console.log(setInput);
  return (
    <>
      <div className="h-[980px] w-[580px] bg-slate-200 mt-14 mr-4 rounded-2xl">
        <div className="bg-gray-600 h-[30px]  rounded-t-2xl flex justify-center items-center">
          <h1 className="font-medium text-black text-xl ">{"<Input/>"}</h1>
        </div>
        <h1 className="text-xl text-blue-600 font-bold flex justify-center">
          Day 32
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-2 ml-6">
            <div className="flex justify-between">
              <h1 className="text-xl text-black font-medium">
                Did I make progress toward my goals:
              </h1>
              <input onClick={buttonHandler} className="mr-10 mt-2" type="checkbox" />
            </div>
            <div className="flex justify-between">
              <h1 className="text-xl mt-2 text-black font-medium">
                Did I share my progress:
              </h1>
              <input className="mr-10 mt-2" type="checkbox" />
            </div>
          </div>
          <h1 className="text-xl text-black font-medium ml-6 mt-4">
            Today I Learned:
          </h1>
          <textarea
            onChange={(e) => {
              // console.log(e.target.value)
              setInput({ ...input, progress: e.target.value });
            }}
            value={input.progress}
            type="text"
            className="p-4 text-xl font-bold w-[540px] h-[200px] border-2 border-black rounded-lg ml-4 mt-2"
          />

          <h1 className="text-xl text-black font-medium ml-6 mt-4">
            Resources I used:
          </h1>
          <textarea
          onChange={(e) => {
            // console.log(e.target.value)
            setInput({ ...input, resources: e.target.value });
          }}
          value={input.resources}

            type="text"
            className="p-4 text-xl font-bold w-[540px] h-[200px] border-2 border-black rounded-lg ml-4 mt-2"
          />
          <h1 className="text-xl text-black font-medium ml-6 mt-4">
            What went well:
          </h1>
          <textarea
          onChange={(e) => {
            // console.log(e.target.value)
            setInput({ ...input, outcome: e.target.value });
          }}
          value={input.outcome}

            type="text"
            className="p-4 text-xl font-bold w-[540px] h-[200px] border-2 border-black rounded-lg ml-4 mt-2"
          />
          <button
            type="submit"
            onClick={handle}
            className="h-10  m-4 w-[130px]  font-semibold text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;


import React from 'react'

const Output = ({input,input2,input3}) => {
  
  return (
    <>
     <div className="h-[980px] w-[580px] bg-black mr-4 mt-14 rounded-2xl">
              <div className="bg-gray-600 h-[30px]  rounded-t-2xl flex justify-center items-center">
                <h1 className="font-medium text-white text-xl ">
                  {"<Output/>"}
                </h1>
               
              </div>
              <h1 className='text-white'>{input}</h1>
              <h1 className='text-white'>{input2}</h1>
              <h1 className='text-white'>{input3}</h1>
            </div>
    </>
  )
}

export default Output
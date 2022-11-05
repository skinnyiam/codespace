import React from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import AiOutlineDelete from "react-icons/ai";
import useFirestore from "../hooks/useFirestore";
import { useUserAuth } from "../context/authContext";

const DayCard = ({ day, focus,id, records, setRecords }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/viewDocument/",
      query: {
        q: id,
      },
    });
  };

  const { deleteData,sort } = useFirestore();
  const { user } = useUserAuth();

  const handledelete = async () => {
    console.log(id)
    if (user) {
      setRecords(
        records.filter((doc) => {
          return doc.id != id;
        })
      );
      await deleteData(user.uid,id);
    } else {
      console.log("fuck you");
    }
  };

  const handlesort = async ()=>{
    if(user){
          sort(user.uid,id);
    }else{
      console.log("fuck")
    }
  }
  return (
    <>
        <div>
      <div className=" mt-6 mx-w-[850px] flex bg-white sm:w-full sm:h-20 h-auto w-screen rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg border-0 border-black drop-shadow-2xl">
        <div className="bg-gray-600 h-20 w-24 rounded-l-lg p-[12px] justify-between flex">
          <h1 className="text mt-2 font-semibold text-zinc-200 ">Day:</h1>
          <h1 className="text mt-2 font-semibold text-zinc-200 ">{day}</h1>
        </div>
        <div className="p-6 flex sm:w-[754px] justify-between w-auto">
          <h1 className="font-bold text-md ">{focus}</h1>

          <div className="flex">
            <Tooltip
              label="View Document"
              aria-label="A tooltip"
              placement="top"
            >
              <button onClick={handleClick} className="mb-2">
                <Link href="/viewDocument">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                  
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                  </svg>
                </Link>
              </button>
            </Tooltip>
            <div className="ml-4 ">
              <Tooltip
                label="Delete Document"
                aria-label="A tooltip"
                placement="top"
              >
                <button onClick={handledelete} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                   
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                     
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </Tooltip>
            </div>
            {/* <div>
              <button onClick={handlesort}>sort</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default DayCard;

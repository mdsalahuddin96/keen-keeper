"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { InteractionsContext } from "@/context/InteractionsContext";


const SortedButton = () => {
  const {sortby,setSortBy,interactions}=useContext(InteractionsContext)
 
  return (
    <div className="dropdown dropdown-start my-6">
      <div tabIndex={0} role="button" className="btn m-1 text-[#64748B]">
        Filter Timeline {sortby} <RiArrowDropDownLine size={30} />
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <Link href={`/timeline/text`} onClick={()=>setSortBy('By Text')}> 
            Text
          </Link>
        </li>

        <li>
          <Link href={`/timeline/call`} onClick={()=>setSortBy("By Call")}>
            Call
          </Link>
        </li>
        <li>
          <Link href={`/timeline/video`} onClick={()=>setSortBy("By Video")}>
            Video
          </Link>
        </li>
        <li>
          <Link href={"/timeline"} onClick={()=>setSortBy("")}>
            All History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SortedButton;

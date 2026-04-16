"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { useContext } from "react";
import { InteractionsContext } from "@/context/InteractionsContext";


const SortedButton = () => {
  const {sortby,setSortBy}=useContext(InteractionsContext)
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
          <Link href={`/timeline/text`}> 
            <button >Text</button>
          </Link>
        </li>

        <li>
          <Link href={`/timeline/call`}>
            <button>Call</button>
          </Link>
        </li>
        <li>
          <Link href={`/timeline/video`}>
            <button>Video</button>
          </Link>
        </li>
        <li>
          <Link href={"/timeline"}>
            <button>All History</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SortedButton;

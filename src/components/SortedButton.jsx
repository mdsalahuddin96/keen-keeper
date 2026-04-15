'use client'
import { InteractionsContext } from "@/context/InteractionsContext";
import Link from "next/link";
import React, { useContext } from "react";

const SortedButton = () => {
   const {interactions,setInteractions}=useContext(InteractionsContext)
   const interactionArr=[...interactions]
   const handleSort=(e)=>{
    const sortby=e.target.dataset.name
    if(sortby==="Call"){
        const callData=interactionArr.filter(interaction=>interaction.interactionType===sortby)
        console.log(callData, 'call data')
    }
    // else if(sortby==="Text"){
    //   const callData=interactionArr.filter(interaction=>interaction.interactionType===sortby)
    //     console.log(callData, 'call data')
    // }
   }
  return (
    <div className="dropdown dropdown-start">
      <div tabIndex={0} role="button" className="btn m-1">
        Click ⬇️
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
         <Link href={'/timeline/sortedbytext'}> <a onClick={handleSort} data-name='Call'>Text</a></Link>
        </li>

        <li>
          <Link href={'/timeline/sortedbycall'}><a onClick={handleSort} data-name='Text'>Call</a></Link>
        </li>
        <li>
          <Link href={'/timeline/sortedbyvideo'}><a onClick={handleSort} data-name='Text'>Video</a></Link>
        </li>
      </ul>
    </div>
  );
};

export default SortedButton;

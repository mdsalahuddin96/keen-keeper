'use client'
import React, { useContext, useState } from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import { toast } from 'react-toastify';
import { InteractionsContext } from '@/context/InteractionsContext';
const CheckIn = ({selectedFriend}) => {
    const {interactions,setInteractions}=useContext(InteractionsContext)
    const handleInteraction=(e)=>{
        const currDate=new Date().toLocaleDateString("en-US", {weekday:'short', month: "short",day: "numeric",year: "numeric",});
        const interaction=e.currentTarget.dataset.name;
        const newInteraction={
            name:selectedFriend.name,
            date:currDate,
            interactionType:interaction
        }
        setInteractions([...interactions,newInteraction])
        toast.success(`${interaction} with ${selectedFriend.name}`)
    }

    return (
        <div className='grid grid-cols-3 gap-4 mt-10'>
            <div onClick={handleInteraction}  data-name="Call" className="flex flex-col justify-center items-center gap-1 cursor-pointer bg-[#f8fafc] rounded-lg p-8 border border-gray-100">
                <BiSolidPhoneCall size={30} />
                <p className="text-lg text-[#1f2937]">Call</p>
            </div>
            <div onClick={handleInteraction} data-name="Text" className="flex flex-col justify-center items-center gap-1 cursor-pointer bg-[#f8fafc] rounded-lg p-8 border border-gray-100">
                <MdOutlineTextsms size={30} />
                <p className="text-lg text-[#1f2937]">Text</p>
            </div>
            <div onClick={handleInteraction} data-name="Video" className="flex flex-col justify-center items-center gap-1 cursor-pointer bg-[#f8fafc] rounded-lg p-8 border border-gray-100">
                <IoIosVideocam size={30} />
                <p className="text-lg text-[#1f2937]">Video</p>
            </div>
        </div>
    );
};

export default CheckIn;
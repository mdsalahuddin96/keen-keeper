'use client'

import InteractionCard from "@/components/timlinesdata/InteractionCard";
import { InteractionsContext } from "@/context/InteractionsContext";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const SortedPage =  () => {
    const { interactions } = useContext(InteractionsContext);
    const {type}=useParams()
    const filteredData = interactions.filter(
    (item) => item.interactionType.toLowerCase() === type
  );
    if(filteredData.length==0){
        return<div className='border border-[#e9e9e9] rounded-xl bg-white min-h-screen flex flex-col gap-4 justify-center items-center text-center'>
                        <FaRegFileAlt color='#244D3F' size={80} />
                        <p className='text-5xl font-bold text-[#244D3F]'>No Data Available</p>
                    </div>
    }
    return (
        <div className='space-y-4'>
            {filteredData.map((interaction,ind)=>
            <InteractionCard key={ind} interaction={interaction}></InteractionCard>)}
        </div>
    );
};

export default SortedPage;
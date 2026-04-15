'use client'
import { InteractionsContext } from '@/context/InteractionsContext';
import { FaRegFileAlt } from "react-icons/fa";
import React, { useContext } from 'react';
import InteractionCard from './InteractionCard';

const TimelinesData = () => {
    const {interactions,setInteractions}=useContext(InteractionsContext)
    
        if(interactions.length===0){
            return<div className='border border-[#e9e9e9] rounded-xl bg-white min-h-screen flex flex-col gap-4 justify-center items-center text-center'>
                <FaRegFileAlt color='#244D3F' size={80} />
                <p className='text-5xl font-bold text-[#244D3F]'>No Data Available</p>
            </div>
        }
    return (
        <div className='space-y-4'>
            {interactions.map((interaction,ind)=>
            <InteractionCard key={ind} interaction={interaction}></InteractionCard>)}
        </div>
    );
};

export default TimelinesData;
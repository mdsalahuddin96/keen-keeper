'use client'
import { InteractionsContext } from '@/context/InteractionsContext';
import React, { useContext } from 'react';
import InteractionCard from './InteractionCard';

const TimelinesData = () => {
    const {interactions,setInteractions}=useContext(InteractionsContext)
    
    return (
        <div className='space-y-4'>
            {interactions.map((interaction,ind)=>
            <InteractionCard key={ind} interaction={interaction}></InteractionCard>)}
        </div>
    );
};

export default TimelinesData;
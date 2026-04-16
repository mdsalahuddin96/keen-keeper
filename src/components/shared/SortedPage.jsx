'use client'
import InteractionCard from '@/components/timlinesdata/InteractionCard';
import { InteractionsContext } from '@/context/InteractionsContext';
import React, { useContext, useEffect } from 'react';

const SortedPage = () => {
    const { interactions } = useContext(InteractionsContext);
    const { sortedData, setSortedData } = useContext(InteractionsContext);
    const { sortby } = useContext(InteractionsContext);
    useEffect(() => {
    const filtered = [...interactions].filter(
      (interaction) => interaction.interactionType === sortby,
    );
    setSortedData(filtered);
  }, [sortby,interactions]);
    return (
        <div className='space-y-4'>
            {sortedData.map((interaction,ind)=>
            <InteractionCard key={ind} interaction={interaction}></InteractionCard>)}
        </div>
    );
};

export default SortedPage;
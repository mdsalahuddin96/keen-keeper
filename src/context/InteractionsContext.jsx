'use client'

import { createContext, useState } from "react";

export const InteractionsContext=createContext()
const InteractionsContextProvider = ({children}) => {
    const [interactions,setInteractions]=useState([])
    const [sortedCall,setSortedCall]=useState([])
    const data={
        interactions,
        setInteractions,
        sortedCall,
        setSortedCall
    }
    return (
        <InteractionsContext.Provider value={data}>
            {children}
        </InteractionsContext.Provider>
    );
};

export default InteractionsContextProvider;
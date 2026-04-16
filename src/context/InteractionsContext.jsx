'use client'

import { createContext, useState } from "react";

export const InteractionsContext=createContext()
const InteractionsContextProvider = ({children}) => {
    const [interactions,setInteractions]=useState([])
    const [sortby,setSortBy]=useState('')
    const data={
        interactions,
        setInteractions,
        sortby,
        setSortBy
    }
    return (
        <InteractionsContext.Provider value={data}>
            {children}
        </InteractionsContext.Provider>
    );
};

export default InteractionsContextProvider;
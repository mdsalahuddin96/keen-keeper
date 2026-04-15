import InteractionsContextProvider from '@/context/InteractionsContext';
import React from 'react';

const Providers = ({children}) => {
    return (
        <InteractionsContextProvider>
            {children}
        </InteractionsContextProvider>
    );
};

export default Providers;
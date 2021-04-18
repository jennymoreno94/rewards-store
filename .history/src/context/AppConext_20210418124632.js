import React, { useState } from 'react';
export const AppContext = React.createContext();


export function AppProvider({ children }) {


    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}
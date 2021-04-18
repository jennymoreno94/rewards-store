import React, { useState } from 'react';
import Products from '../context/data'
export const AppContext = React.createContext(Products);




export function AppProvider({ children }) {

    const [productsList] = useState(Products);

    return (
        <AppContext.Provider
        value={{
            productsList
          }}>
            {children}
        </AppContext.Provider>
    )
}
import React, { useState } from 'react';
import listProducts from '../context/data'
export const AppContext = React.createContext(listProducts);




export function AppProvider({ children }) {

    const [listProducts] = useState(listProducts);

    return (
        <AppContext.Provider
        value={{
            listProducts
          }}>
            {children}
        </AppContext.Provider>
    )
}
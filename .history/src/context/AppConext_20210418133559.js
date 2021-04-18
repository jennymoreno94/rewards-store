import React, { useState } from 'react';
import listProducts from '../context/data'
export const AppContext = React.createContext(listProducts);




export function AppProvider({ children }) {

    const [Products] = useState(listProducts);

    return (
        <AppContext.Provider
        value={{
            Products
          }}>
            {children}
        </AppContext.Provider>
    )
}
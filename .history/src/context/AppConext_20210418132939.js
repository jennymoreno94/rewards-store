import React, { useState } from 'react';
export const AppContext = React.createContext();
import {listProducts} from './data.js'



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
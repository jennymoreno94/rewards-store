import React, { useState } from 'react';
import {hotelsData} from '../context/data.js'
export const AppContext = React.createContext(hotelsData);




export function AppProvider({ children }) {

    const [hotelsData] = useState(hotelsData);

    return (
        <AppContext.Provider
        value={{
            hotelsData
          }}>
            {children}
        </AppContext.Provider>
    )
}
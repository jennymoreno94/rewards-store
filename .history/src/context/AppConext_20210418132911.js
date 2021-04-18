import React, { useState } from 'react';
export const AppContext = React.createContext();
import {listProducts} from './data.js'



export function AppProvider({ children }) {


    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}
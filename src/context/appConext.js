import React, { useEffect, useState } from 'react';
import getData from '../utils/getMethods';

export const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [productsList, setProductsList] = useState([]);
    const [user, setUser] = useState([]);
  
    useEffect(() => {
        return getData.getProducts()
            .then(response => setProductsList(response));
    }, [productsList, setProductsList])

    useEffect(() => {
        return getData.getUser()
            .then(response => {
                setUser(response);
            });
    }, [user, setUser])


    return (
        <AppContext.Provider
            value={{
                productsList,
                user,
                setUser
            }}>
            {children}
        </AppContext.Provider>
    )
}
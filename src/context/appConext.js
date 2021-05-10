import React, { useEffect, useState } from 'react';
import getData from '../utils/getMethods';
import usePagination from '../hooks/paginationHook'
import { LIMIT,ConstFilter } from '../utils/constants'
export const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [productsList, setProductsList] = useState([]);
    const [filtersList, setFiltersList] = useState([]);
    const [history, setHistory] = useState([]);
    const [isHistory, setIsHistory] = useState(false);
    const [user, setUser] = useState([]);
    const pagination = usePagination(isHistory ? history :
        Object.entries(filtersList).length === 0 ? productsList : filtersList, LIMIT
    )

    const [filters, setFilters] = useState({
        category: ConstFilter.allCategories,
        order: 0
    });

    useEffect(() => {
        return getData.getProducts()
            .then(response => {
                setProductsList(response)
            });
    }, [productsList === []])

    useEffect(() => {
        return getData.getUser()
            .then(response => {
                setUser(response);
            });
    }, [user === []])

    useEffect(() => {
        return getData.getHistory()
            .then(response => {
                setHistory(response);
            });
    }, [isHistory])
    
    return (
        <AppContext.Provider
            value={{
                productsList,
                user,
                setUser,
                history,
                isHistory,
                setIsHistory,
                setProductsList,
                filtersList,
                setFiltersList,
                filters,
                setFilters,
                pagination
            }}>
            {children}
        </AppContext.Provider>
    )
}
import React, { useEffect, useState } from 'react';
import getData from '../utils/getMethods';

export const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [productsList, setProductsList] = useState([]);
    const [history, setHistory] = useState([]);
    const [isHistory, setIsHistory] = useState(false);
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

    useEffect(() => {
        return getData.getHistory()
            .then(response => {
                var agruparProductos = response.reduce(function (accumulator, currentValue, index) {
                    let resultado = accumulator.findIndex((element) => element !== undefined ?  element.productId === currentValue.productId : null);
                    if (resultado !== -1) {
                        index = resultado;
                    }
                    accumulator[index] = (accumulator[index] || {...currentValue, cost: 0}) 
                    accumulator[index].cost += currentValue.cost
                    return accumulator;
                }, []);

                setHistory(agruparProductos);
            });
    }, [history, setHistory])



    return (
        <AppContext.Provider
            value={{
                productsList,
                user,
                setUser,
                history,
                isHistory,
                setIsHistory
            }}>
            {children}
        </AppContext.Provider>
    )
}
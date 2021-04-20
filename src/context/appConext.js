import React, { useEffect, useState } from 'react';
import getData from '../utils/getMethods';

export const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [productsList, setProductsList] = useState([]);
    const [history, setHistory] = useState([]);
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
                const agregarProductos = [];
                const agruparProductos = response.reduce((accumulator, currentValue) => {
                    let resultado = agregarProductos.findIndex(element => element.productId === currentValue.productId);
                    if (resultado != -1) {
                        currentValue.cost += agregarProductos[resultado].cost
                        agregarProductos.splice(resultado,1)
                    }
                    agregarProductos.push(currentValue)
                    return agregarProductos
                });  
                setHistory(agruparProductos);
                //console.table(agrupar)
            });
    }, [history, setHistory])



    return (
        <AppContext.Provider
            value={{
                productsList,
                user,
                setUser,
                history
            }}>
            {children}
        </AppContext.Provider>
    )
}
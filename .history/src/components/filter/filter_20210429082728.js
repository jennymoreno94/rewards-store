import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appConext';
import {
    FilterWrapper,
    FilterBody,
    FilterLine,
    FilterTittle,
    FilterVerticalLine,
    FilterGray,
    FilterButton,
    ImagePaginacion,
    ContentPagination,
    FilterSelect
} from '../filter/filterStyled'
import { Button } from '../transversal/buttonComponent/button'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import { Pagination } from '../transversal/paginationComponent/pagination'

export function Filter() {
    const { productsList, isHistory, setFiltersList, filters, setFilters,pagination } = useContext(AppContext);
    const [initialState] = useState(filters);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });
    

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
            let matches = e.matches;
            setQueryMatch({ ...queryMatch, matches })
        })
    });

    useEffect(() => {
        var lista = productsList
        switch (filters.order) {
            case 1:
                lista = productsList.sort((a, b) => a.cost - b.cost);
                break;
            case 2:
                lista = productsList.sort((a, b) => b.cost - a.cost);
                break;
            default:
                break;
        }

        lista = lista.filter(
            (data) => ((filters.category !== "todos" && data.category === filters.category) ||
                filters.category === "todos")
        );

        setFiltersList(lista);
        

    }, [filters,setFiltersList]);
 
    const handleChange = (filter, e) => {
        const value = e.target === undefined ? e : e.target.value 
        setFilters((filters) => {
            return {
                ...filters,
                [filter]: value
            };
        });
    };

    const propsButton = {
        height: queryMatch.matches ? "30%" : "auto",
        width: queryMatch.matches ? "15%" : "100%",
        backgroundColor: "#ededed",
        padding: "0 2.5rem",
        borderRadius: "2rem",
        margin: "0.3rem 1rem 0.3rem 0",
        cursor: "pointer",
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: "18px",
        color: "#616161",
        marginText: queryMatch.matches ? "1.2rem 0 1.2rem 1rem" : "1.5rem 0 1.5rem 4rem"
        //paddingText: queryMatch.matches ?  null : "1.5rem 0 1.5rem 0.5rem",
    }

    const propsButtonPagination = {
        height: queryMatch.matches ? "40px" : "25px",
        width: queryMatch.matches ? "40px" : "25px",
        backgroundColor: "#ffffff",
        padding: "0",
        borderRadius: "100%",
        margin: "1rem"

        //paddingText: queryMatch.matches ?  null : "1.5rem 0 1.5rem 0.5rem",
    }

    return (

        <FilterWrapper>
            {isHistory ? null :
                <FilterBody>
                    <FilterTittle>{`${pagination.currentPage} of ${pagination.maxPage}`} <FilterVerticalLine /> <FilterGray>Sort by: </FilterGray></FilterTittle>
                    <FilterSelect
                        name="category"
                        value={filters.category}
                        onChange={(e) => handleChange(e.target.name, e)}
                    >
                        <option value="todos">Todos los Productos</option>
                        {[...new Set(productsList.map((item) => item.category))].map(
                            (element) => (
                                <option key={element}>{element}</option>
                            )
                        )}
                    </FilterSelect>
                    <Button onClick={() => {
                        setFilters(initialState);
                    }} propsButton={propsButton} tittle={"Most recent"} />
                    <Button onClick={() => {
                        handleChange("order", 1)
                    }} propsButton={propsButton} tittle={"Lowest price"} />
                    <Button onClick={() => {
                        handleChange("order", 2)
                    }} propsButton={propsButton} tittle={"Highest price"} />
                    <Pagination/>
                    {/*<ContentPagination>
                        <Button disabled={pagination.currentPage <= 1} onClick={() => {pagination.prevPage()}} propsButton={propsButtonPagination}>
                            <ImagePaginacion src={arrowLeft} alt="arrowLeft" />
                        </Button>
                        <Button disabled={pagination.currentPage >= pagination.maxPage} onClick={() => {pagination.nextPage()}} propsButton={propsButtonPagination}>
                            <ImagePaginacion src={arrowRight} alt="arrowRight" />
                        </Button>
                    </ContentPagination>*/}
                </FilterBody>}
            <FilterLine />
        </FilterWrapper >
    )
}
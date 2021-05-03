import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appConext';
import {
    FilterWrapper,
    FilterBody,
    FilterLine,
    FilterTittle,
    FilterVerticalLine,
    FilterGray,
    FilterSelect,
    propsButton
} from '../filter/filterStyled'
import { Button } from '../transversal/buttonComponent/button'
import { Pagination } from '../transversal/paginationComponent/pagination'
import { LIMIT,ConstFilter,MediaQuery } from '../../utils/constants'

export function Filter() {
    const { productsList, setFiltersList, filters, setFilters, pagination } = useContext(AppContext);
    const [initialState] = useState(filters);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });


    useEffect(() => {
        window.matchMedia(MediaQuery.tablet).addEventListener("change", (e) => {
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
            (data) => ((filters.category !== ConstFilter.allCategories && data.category === filters.category) ||
                filters.category === ConstFilter.allCategories)
        );

        setFiltersList(lista);
        if (lista.length <= LIMIT) {
            pagination.setCurrentPage(1)
        }
    }, [filters, setFiltersList]);

    const handleChange = (filter, e) => {
        const value = e.target === undefined ? e : e.target.value
        setFilters((filters) => {
            return {
                ...filters,
                [filter]: value
            };
        });
    };

    return (
        <section>
            <FilterWrapper>
                <FilterBody>
                    <FilterTittle>{`Page ${pagination.currentPage} of ${pagination.maxPage}`} <FilterVerticalLine /> <FilterGray>{ConstFilter.sort} </FilterGray></FilterTittle>
                    <FilterSelect
                        name="category"
                        value={filters.category}
                        onChange={(e) => handleChange(e.target.name, e)}
                    >
                        <option value={ConstFilter.allCategories}>Todos los Productos</option>
                        {[...new Set(productsList.map((item) => item.category))].map(
                            (element) => (
                                <option key={element}>{element}</option>
                            )
                        )}
                    </FilterSelect>
                    <Button onClick={() => {
                        setFilters(initialState);
                    }} propsButton={propsButton(queryMatch.matches)} tittle={ConstFilter.allProducts} />
                    <Button onClick={() => {
                        handleChange(ConstFilter.order, 1)
                    }} propsButton={propsButton(queryMatch.matches)} tittle={ConstFilter.lowest} />
                    <Button onClick={() => {
                        handleChange(ConstFilter.order, 2)
                    }} propsButton={propsButton(queryMatch.matches)} tittle={ConstFilter.highest} />
                    <Pagination />
                </FilterBody>
                <FilterLine />
            </FilterWrapper >
        </section>
    )
}
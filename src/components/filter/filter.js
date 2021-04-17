import React, { useState, useEffect } from 'react';
import {
    FilterWrapper,
    FilterBody,
    FilterLine,
    FilterTittle,
    FilterVerticalLine,
    FilterGray,
    FilterButton,
    ImagePaginacion,
    ContentPagination
} from '../filter/filterStyled'
import { Button } from '../transversal/buttonComponent/button'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'


export function Filter() {

    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });
    const handleFilters = () => {
        alert("filtro")
    };

    const handlePagination = () => {
        alert("paginación")
    };
    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
            let matches = e.matches;
            setQueryMatch({ ...queryMatch, matches })
        })
    });

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
        marginText: queryMatch.matches ? "1.2rem 0 1.2rem 1rem" : "1.5rem 0 1.5rem 3.5rem"
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
            <FilterBody>
                <FilterTittle>16 of 32 Products <FilterVerticalLine /> <FilterGray>Sort by: </FilterGray></FilterTittle>
                {/*<FilterButton>Most recent</FilterButton>
                <FilterButton>Lowest price</FilterButton>
                <FilterButton>Highest price</FilterButton>*/}

                <Button onClick={handleFilters} propsButton={propsButton} tittle={"Most recent"} />
                <Button onClick={handleFilters} propsButton={propsButton} tittle={"Lowest price"} />
                <Button onClick={handleFilters} propsButton={propsButton} tittle={"Highest price"} />
                <ContentPagination>
                    <Button onClick={handlePagination} propsButton={propsButtonPagination}>
                        <ImagePaginacion src={arrowLeft} alt="arrowLeft" />
                    </Button>
                    <Button onClick={handlePagination} propsButton={propsButtonPagination}>
                        <ImagePaginacion src={arrowRight} alt="arrowRight" />
                    </Button>
                </ContentPagination>
            </FilterBody>
            <FilterLine />
        </FilterWrapper >

    )
}
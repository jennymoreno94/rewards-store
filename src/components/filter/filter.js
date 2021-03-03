import React from 'react';
import { FilterWrapper,
        FilterBody,
        FilterLine,
        FilterTittle,
        FilterVerticalLine,
        FilterGray,
        FilterButton } from '../filter/filterStyled'

export function Filter() {
    return (
        <FilterWrapper>
            <FilterBody>
                    <FilterTittle>16 of 32 Products <FilterVerticalLine/> <FilterGray>Sort by: </FilterGray></FilterTittle>
                    <FilterButton>Most recent</FilterButton>
                    <FilterButton>Lowest price</FilterButton>
                    <FilterButton>Highest price</FilterButton>
            </FilterBody>
            <FilterLine/>
        </FilterWrapper>

    )
}
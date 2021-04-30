import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appConext';
import {
    FooterWrapper,
    FooterTittle,
    FooterVerticalLine,

    FooterBody,
    FooterDivTittle
} from '../footer/footerStyled'
import { Pagination } from '../transversal/paginationComponent/pagination'


export function Footer() {
    const { pagination } = useContext(AppContext);

    return (

        <FooterWrapper>
            <FooterBody>
                <FooterDivTittle>
                    <FooterTittle>{`Page ${pagination.currentPage} of ${pagination.maxPage}`} <FooterVerticalLine /></FooterTittle>
                </FooterDivTittle>
                <Pagination />
            </FooterBody>
        </FooterWrapper >
    )
}
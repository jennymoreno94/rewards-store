import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appConext';
import {
    FooterWrapper,
    FooterTittle,
    FooterBody,
    FooterDivTittle
} from '../footer/footerStyled'
import { Pagination } from '../transversal/paginationComponent/pagination'


export function Footer() {
    const { pagination } = useContext(AppContext);

    return (
        <section>
            <FooterWrapper>
                <FooterBody>
                    <FooterDivTittle>
                        <FooterTittle>{`Page ${pagination.currentPage} of ${pagination.maxPage}`}</FooterTittle>
                    </FooterDivTittle>
                    <Pagination />
                </FooterBody>
            </FooterWrapper >
        </section>
    )
}
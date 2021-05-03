
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from '../../../context/appConext';
import {
    ContentPagination,
    ImagePaginacion,
    propsGeneralButton
} from '../paginationComponent/paginationStyled'
import { Button } from '../buttonComponent/button'
import arrowLeft from '../../../assets/arrow-left.svg'
import arrowRight from '../../../assets/arrow-right.svg'

export function Pagination(props) {

    const { pagination } = useContext(AppContext);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
            let matches = e.matches;
            setQueryMatch({ ...queryMatch, matches })
        })
    });

    const propsButtonPagination = propsGeneralButton(queryMatch.matches)
    return (
        <section>
            <ContentPagination>
                <Button disabled={pagination.currentPage <= 1} onClick={() => { pagination.prevPage() }} propsButton={propsButtonPagination}>
                    <ImagePaginacion src={arrowLeft} alt="arrowLeft" />
                </Button>
                <Button disabled={pagination.currentPage >= pagination.maxPage} onClick={() => { pagination.nextPage() }} propsButton={propsButtonPagination}>
                    <ImagePaginacion src={arrowRight} alt="arrowRight" />
                </Button>
            </ContentPagination>
        </section>
    );
}



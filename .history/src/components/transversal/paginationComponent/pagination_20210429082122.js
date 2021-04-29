
import React,{useContext} from "react";
import { AppContext } from '../../../context/appConext';
import {
    ContentPagination,
    ImagePaginacion
} from '../paginationComponent/paginationStyled'
import { Button } from '../buttonComponent/button'
import arrowLeft from '../../../assets/arrow-left.svg'
import arrowRight from '../../../assets/arrow-right.svg'

export function Pagination(props) {

    const {pagination} = useContext(AppContext);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });

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
        <ContentPagination>
            <Button disabled={pagination.currentPage <= 1} onClick={() => { pagination.prevPage() }} propsButton={propsButtonPagination}>
                <ImagePaginacion src={arrowLeft} alt="arrowLeft" />
            </Button>
            <Button disabled={pagination.currentPage >= pagination.maxPage} onClick={() => { pagination.nextPage() }} propsButton={propsButtonPagination}>
                <ImagePaginacion src={arrowRight} alt="arrowRight" />
            </Button>
        </ContentPagination>

    );
}



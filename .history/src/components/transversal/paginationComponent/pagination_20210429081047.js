
import React from "react";
import {
    ContentPagination
} from '../buttonComponent/buttonStyled'
import { Button } from '../transversal/buttonComponent/button'

<ContentPagination>
    <Button disabled={pagination.currentPage <= 1} onClick={() => { pagination.prevPage() }} propsButton={propsButtonPagination}>
        <ImagePaginacion src={arrowLeft} alt="arrowLeft" />
    </Button>
    <Button disabled={pagination.currentPage >= pagination.maxPage} onClick={() => { pagination.nextPage() }} propsButton={propsButtonPagination}>
        <ImagePaginacion src={arrowRight} alt="arrowRight" />
    </Button>
</ContentPagination>
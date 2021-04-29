import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
 
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const jumpTo = (page) => {
        setCurrentPage(page)
    }
    return {
        currentData,
        currentPage,
        maxPage,
        nextPage,
        prevPage,
        jumpTo
    }
}

export default usePagination;
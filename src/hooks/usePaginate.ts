import { useState } from "react";

export const usePaginate = () => {
    const [actualPage, setPage] = useState(1);

    const nextPage = () => {
        setPage(actualPage + 1);
    };

    const previousPage = () => {
        setPage(actualPage - 1);
    };

    return { previousPage, nextPage, actualPage }
};

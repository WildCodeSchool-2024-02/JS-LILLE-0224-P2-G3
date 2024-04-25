import  { createContext, useContext, useMemo, useState, useCallback } from "react";
import PropTypes from 'prop-types';

const PageContext = createContext();


export function PageProvider({ children }) {
    const [page, setPage] = useState(1);

PageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

    const NexthandleClick = useCallback(() => {
        setPage(page + 1);
    }, [page]);

    const PrevioushandleClick = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const CurrentPage = useMemo(() => ({ page, setPage, NexthandleClick, PrevioushandleClick }), [page, NexthandleClick, PrevioushandleClick]);

    return (
        <PageContext.Provider value={CurrentPage}>
            {children}
        </PageContext.Provider>
    );
}

export const usePage = () => useContext(PageContext);

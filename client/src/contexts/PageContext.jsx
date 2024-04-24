import {
    createContext, useContext, useState,
} from "react";

const PageContext = createContext();

export function PageProvider({
    // eslint-disable-next-line react/prop-types
    children
}) {
    const [page, setPage] = useState(1);
    const NexthandleClick = () => {
        setPage(page + 1)
    }
    const PrevioushandleClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    return (
        <PageContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{ page, setPage, NexthandleClick, PrevioushandleClick }}
        >
            {children}
        </PageContext.Provider>
    );
}
export const usePage =
    () => useContext(PageContext);
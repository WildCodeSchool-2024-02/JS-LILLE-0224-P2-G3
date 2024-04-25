import {
    createContext, useContext, useMemo, useState, useCallback
  } from "react";

  const PageContext = createContext ();

  export function PageProvider ({
    // eslint-disable-next-line react/prop-types
    children
  }) {
    const [page, setPage] = useState(1);
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
        <PageContext.Provider
          
          value={CurrentPage}
        >
         {children}
       </PageContext.Provider>
     );
  }
  export const usePage =
    () => useContext(PageContext);
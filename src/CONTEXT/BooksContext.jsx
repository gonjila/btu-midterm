import { createContext } from 'react';

export const BooksContext = createContext(null);

const BooksProviderComponent = ({ children }) => {
    return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
};

export default BooksProviderComponent;

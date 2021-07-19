import { createContext, useEffect, useState } from 'react';

import BooksApi from '../SERVICES/BooksApi';

export const BooksContext = createContext(null);

const BooksProviderComponent = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [reverseSorted, setReverseSorted] = useState(false);

    const initialValue = {
        isbn: Math.random(),
        image: null,
        title: null,
        author: null,
        genre: null,
        description: null,
        published: null,
    };

    const LoadBooks = async () => {
        const booksList = await BooksApi({ quantity: 10, characters: 500 });
        setBooks(booksList);
    };

    useEffect(() => {
        LoadBooks();
    }, []);

    return (
        <BooksContext.Provider value={{ books, setBooks, reverseSorted, setReverseSorted, initialValue }}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProviderComponent;

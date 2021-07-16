import styled from 'styled-components';
import { useEffect } from 'react';

import Navigation from './Navigation';
import BooksApi from '../SERVICES/BooksApi';

const Books = () => {
    const LoadBooks = async () => {
        const booksList = await BooksApi({ quantity: 10, characters: 500 });
    };

    useEffect(() => {
        LoadBooks();
    }, []);

    return (
        <Container>
            <Navigation />
            <Page>Books</Page>
        </Container>
    );
};

export default Books;

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Page = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Navigation from './Navigation';
import BooksApi from '../SERVICES/BooksApi';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [reverseSorted, setReverseSorted] = useState(false);

    const LoadBooks = async () => {
        const booksList = await BooksApi({ quantity: 10, characters: 500 });
        setBooks(booksList);
    };

    useEffect(() => {
        LoadBooks();
    }, []);

    const sortingToTheOld = () => {
        setReverseSorted(false);
    };
    const sortingToTheNew = () => {
        setReverseSorted(true);
    };
    const jumpIntoBookAddingPage = () => {};

    return (
        <Container>
            <Navigation />
            <Page>
                <div id='buttonWrapper'>
                    <button onClick={sortingToTheOld}>Sorting To The Older</button>
                    <button onClick={sortingToTheNew}>Sorting To The Newer</button>
                    <button onClick={jumpIntoBookAddingPage}>Add New Book</button>
                </div>
                <BooksListItems>
                    {books
                        .sort((a, b) =>
                            reverseSorted
                                ? a.published > b.published
                                    ? 1
                                    : -1
                                : a.published > b.published
                                ? -1
                                : 1
                        )
                        .map(item => {
                            return (
                                <BookWrapper key={item.isbn}>
                                    <img alt={item.title} src={item.image} />
                                    <h2>{item.title}</h2>
                                    <h4>{item.author}</h4>
                                    <h6>{item.genre}</h6>
                                    <p>{item.description}</p>
                                    <p>{item.published}</p>
                                </BookWrapper>
                            );
                        })}
                </BooksListItems>
            </Page>
        </Container>
    );
};

export default Books;

const Container = styled.div`
    height: 100vh;
    display: flex;
`;

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    #buttonWrapper {
        margin: 10px 0;

        button {
            color: white;
            background-color: #0d6efd;
            margin: 0 10px;
            padding: 10px 15px;
            border-radius: 5px;
            border: none;

            &:active {
                box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 5px 0px inset;
            }
        }
    }
`;

const BooksListItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    overflow-y: scroll;
`;

const BookWrapper = styled.div`
    width: 330px;
    height: auto;
    padding: 5px;
    margin: 5px 10px;
    color: white;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 100%;
        height: 400px;
    }
    h2 {
        margin: 10px 0 5px;
    }
    h4 {
        margin: 10px 0;
    }
    h6 {
        margin: 5px 0;
    }
`;

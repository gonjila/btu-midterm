import { useContext } from 'react';
import styled from 'styled-components';

import { BooksContext } from '../../CONTEXT/BooksContext';

const SingleBook = ({ item }) => {
    const { books, setBooks } = useContext(BooksContext);

    const onButtonClick = itemId => {
        const itemIndex = books.findIndex(i => i.isbn === itemId);

        const newBooksList = [...books.slice(0, itemIndex), ...books.slice(itemIndex + 1)];

        setBooks(newBooksList);
    };

    return (
        <BookWrapper>
            <img alt={item.title} src={item.image} />
            <h2>{item.title}</h2>
            <h4>{item.author}</h4>
            <h6>{item.genre}</h6>
            <p>{item.description}</p>
            <p>{item.published}</p>
            <button onClick={() => onButtonClick(item.isbn)}>remove</button>
        </BookWrapper>
    );
};

export default SingleBook;

const BookWrapper = styled.div`
    width: 330px;
    height: 703px;
    padding: 5px;
    margin: 5px 10px;
    color: white;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;

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
    button {
        position: absolute;
        bottom: 14px;
        right: 5px;
    }
`;

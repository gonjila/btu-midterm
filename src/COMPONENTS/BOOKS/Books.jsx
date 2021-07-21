import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../Navigation';
import { BooksContext } from '../../CONTEXT/BooksContext';
import SingleBook from './SingleBook';

const Books = () => {
    const history = useHistory();
    const { books, reverseSorted, setReverseSorted } = useContext(BooksContext);

    const sortingToTheOld = () => {
        setReverseSorted(false);
    };
    const sortingToTheNew = () => {
        setReverseSorted(true);
    };
    const jumpIntoBookAddingPage = () => {
        history.push('/add-book');
    };

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
                            return <SingleBook key={item.isbn} item={item} />;
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
            margin: 0 10px;
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

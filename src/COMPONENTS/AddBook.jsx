import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './Navigation';
import { BooksContext } from '../CONTEXT/BooksContext';

const AddBook = () => {
    const history = useHistory();
    const { books, setBooks, initialValue } = useContext(BooksContext);

    const onFormSubmit = event => {
        event.preventDefault();
        const newList = [...books, initialValue];
        setBooks(newList);
        history.push('/books');
    };

    const onChange = ({ target }) => {
        initialValue[target.name] = target.value;
    };

    return (
        <Container>
            <Navigation />
            <Page onSubmit={onFormSubmit}>
                <div>
                    <label>Image source:</label>
                    <input type='url' name='image' onChange={onChange} required />
                </div>
                <div>
                    <label>Title:</label>
                    <input type='text' name='title' onChange={onChange} required />
                </div>
                <div>
                    <label>Author:</label>
                    <input type='text' name='author' onChange={onChange} required />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type='text' name='genre' onChange={onChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <input type='text' name='description' onChange={onChange} required />
                </div>
                <div>
                    <label>Published:</label>
                    <input type='date' name='published' onChange={onChange} required />
                </div>

                <button type='submit'>Add Book</button>
            </Page>
        </Container>
    );
};

export default AddBook;

const Container = styled.div`
    display: flex;
`;

const Page = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        width: 40%;
        display: flex;
        flex-direction: column;

        label {
        }
        input {
            height: 20px;
        }
    }

    button {
        margin: 15px 10px;
    }
`;

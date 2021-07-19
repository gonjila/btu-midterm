import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import withAuthProtection from '../../HOC/withAuthProtection';
import Navigation from '../Navigation';
import { BooksContext } from '../../CONTEXT/BooksContext';

const AddBook = () => {
    const history = useHistory();
    const { books, setBooks, initialValue } = useContext(BooksContext);

    const onFormSubmit = event => {
        event.preventDefault();
        const newList = [...books, initialValue];
        setBooks(newList);
        history.push('/books');
        console.log('target', event.target);
    };

    const onChange = ({ target }) => {
        initialValue[target.name] = target.value;
    };

    return (
        <Container>
            <Navigation />
            <Page onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor='image'>Image source:</label>
                    <input id='image' type='url' name='image' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input id='title' type='text' name='title' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='author'>Author:</label>
                    <input id='author' type='text' name='author' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='genre'>Genre:</label>
                    <input id='genre' type='text' name='genre' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <input id='description' type='text' name='description' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='published'>Published:</label>
                    <input id='published' type='date' name='published' onChange={onChange} />
                </div>

                <button type='submit'>Add Book</button>
            </Page>
        </Container>
    );
};

export default withAuthProtection(AddBook);

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

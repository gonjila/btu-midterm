import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import UsersProviderComponent from './CONTEXT/UsersContext';
import Addresses from './COMPONENTS/ADDRESSES/Addresses';
import AddAddress from './COMPONENTS/ADDRESSES/AddAddress';
import Books from './COMPONENTS/BOOKS/Books';
import AddBook from './COMPONENTS/BOOKS/AddBook';
import SignIn from './COMPONENTS/SignIn';
import AddressProviderComponent from './CONTEXT/AddressContext.jsx';
import BooksProviderComponent from './CONTEXT/BooksContext.jsx';

function App() {
    return (
        <Container>
            <UsersProviderComponent>
                <AddressProviderComponent>
                    <BooksProviderComponent>
                        <Switch>
                            <Route path='/addresses'>
                                <Addresses />
                            </Route>

                            <Route path='/add-address'>
                                <AddAddress />
                            </Route>

                            <Route path='/books'>
                                <Books />
                            </Route>

                            <Route path='/add-book'>
                                <AddBook />
                            </Route>

                            <Route exact={true} path='/'>
                                <SignIn />
                            </Route>
                        </Switch>
                    </BooksProviderComponent>
                </AddressProviderComponent>
            </UsersProviderComponent>
        </Container>
    );
}

export default App;

const Container = styled.div`
    button {
        color: white;
        background-color: #0d6efd;
        /* margin: 15px 10px; */
        padding: 10px 15px;
        border-radius: 5px;
        border: none;

        &:active {
            box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 5px 0px inset;
        }
    }
`;

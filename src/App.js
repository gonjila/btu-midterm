import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import UsersProviderComponent from './CONTEXT/UsersContext';
import AddressProviderComponent from './CONTEXT/AddressContext.jsx';
import BooksProviderComponent from './CONTEXT/BooksContext.jsx';
import SignIn from './COMPONENTS/SignIn';

const Addresses = React.lazy(() => import('./COMPONENTS/ADDRESSES/Addresses'));
const AddAddress = React.lazy(() => import('./COMPONENTS/ADDRESSES/AddAddress'));
const Books = React.lazy(() => import('./COMPONENTS/BOOKS/Books'));
const AddBook = React.lazy(() => import('./COMPONENTS/BOOKS/AddBook'));
const Registration = React.lazy(() => import('./COMPONENTS/Registration'));

function App() {
    return (
        <Container>
            <UsersProviderComponent>
                <AddressProviderComponent>
                    <BooksProviderComponent>
                        <Suspense fallback={<div>page is loading...</div>}>
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

                                <Route exact path='/'>
                                    <SignIn />
                                </Route>

                                <Route exact path='/registration'>
                                    <Registration />
                                </Route>
                            </Switch>
                        </Suspense>
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
        padding: 10px 15px;
        border-radius: 5px;
        border: none;

        &:active {
            box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 5px 0px inset;
        }
    }
`;

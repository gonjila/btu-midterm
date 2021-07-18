import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import UsersProviderComponent from './CONTEXT/UsersContext';
import Addresses from './COMPONENTS/Addresses';
import AddAddress from './COMPONENTS/AddAddress';
import Books from './COMPONENTS/Books';
import AddBook from './COMPONENTS/AddBook';
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

const Container = styled.div``;

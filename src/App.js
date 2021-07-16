import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import UsersProviderComponent from './CONTEXT/UsersContext';
import Home from './COMPONENTS/Home';
import Addresses from './COMPONENTS/Addresses';
import Books from './COMPONENTS/Books';
import SignIn from './COMPONENTS/SignIn';
import Profile from './COMPONENTS/Profile';

function App() {
    return (
        <Container>
            <UsersProviderComponent>
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>

                    <Route path='/address'>
                        <Addresses />
                    </Route>

                    <Route path='/books'>
                        <Books />
                    </Route>

                    <Route exact={true} path='/'>
                        <SignIn />
                    </Route>

                    <Route path='/profile'>
                        <Profile />
                    </Route>
                </Switch>
            </UsersProviderComponent>
        </Container>
    );
}

export default App;

const Container = styled.div``;

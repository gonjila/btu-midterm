import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './COMPONENTS/Home';
import SignIn from './COMPONENTS/SignIn';
import UsersProviderComponent from './CONTEXT/UsersContext';
import Profile from './COMPONENTS/Profile';

function App() {
    return (
        <Container>
            <UsersProviderComponent>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/signin'>
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

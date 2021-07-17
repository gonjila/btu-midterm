import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import UsersProviderComponent from './CONTEXT/UsersContext';
import Addresses from './COMPONENTS/Addresses';
import Books from './COMPONENTS/Books';
import SignIn from './COMPONENTS/SignIn';

function App() {
    return (
        <Container>
            <UsersProviderComponent>
                <Switch>
                    <Route path='/address'>
                        <Addresses />
                    </Route>

                    <Route path='/books'>
                        <Books />
                    </Route>

                    <Route exact={true} path='/'>
                        <SignIn />
                    </Route>
                </Switch>
            </UsersProviderComponent>
        </Container>
    );
}

export default App;

const Container = styled.div``;

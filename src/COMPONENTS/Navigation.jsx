import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Container>
            <Link exact to='/'>
                Home
            </Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/signin'>SignIn</Link>
        </Container>
    );
};

export default Navigation;

const Container = styled.div`
    min-height: 70px;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: black;
        font-weight: bold;
        font-size: 1.2em;
        margin: 10px;

        text-decoration: none;
    }
`;

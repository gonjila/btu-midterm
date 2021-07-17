import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import { FaRegAddressBook, FaSignInAlt } from 'react-icons/fa';

const Navigation = () => {
    return (
        <Container id='navigation'>
            <h2>
                <img alt='react logo' src='favicon.ico' />
                Sidebar
            </h2>
            <hr />
            <NavLink to='/address'>
                <FaRegAddressBook /> Address
            </NavLink>
            <NavLink to='/books'>
                <ImBooks /> Books
            </NavLink>
            <NavLink exact to='/'>
                <FaSignInAlt /> SignIn
            </NavLink>
        </Container>
    );
};

export default Navigation;

const Container = styled.div`
    color: white;
    width: 280px;
    height: 100vh - 32px;
    padding: 16px;
    background-color: #212529;
    display: flex;
    flex-direction: column;

    h2 {
        margin-top: 0;
        display: flex;
        align-items: center;

        img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
    }

    hr {
        width: 100%;
    }

    a {
        padding: 8px 16px;
        color: white;
        font-weight: bold;
        font-size: 1.1em;
        margin: 10px;
        border-radius: 5px;
        text-decoration: none;
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
    .active {
        background-color: #0d6efd;
    }
`;

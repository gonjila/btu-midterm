import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaRegAddressBook, FaSignInAlt } from 'react-icons/fa';
import { AiFillFileAdd } from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import { BiBookAdd } from 'react-icons/bi';

const Navigation = () => {
    return (
        <Container id='navigation'>
            <h2>
                <img alt='react logo' src='favicon.ico' />
                Sidebar
            </h2>
            <hr />
            <NavLink to='/addresses'>
                <FaRegAddressBook /> Addresses
            </NavLink>

            <NavLink to='/add-address'>
                <AiFillFileAdd /> Add Address
            </NavLink>

            <NavLink to='/books'>
                <ImBooks /> Books
            </NavLink>

            <NavLink to='/add-book'>
                <BiBookAdd /> Add Book
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
    height: calc(100vh - 32px);
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

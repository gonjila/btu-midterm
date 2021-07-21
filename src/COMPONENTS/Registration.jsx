import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { userContext } from '../CONTEXT/UsersContext';

const Registration = () => {
    const history = useHistory();
    const { user, setUser, setIsVerified, initialValue } = useContext(userContext);

    function debounce(func, timeout = 500) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    const formSubmit = event => {
        event.preventDefault();
    };

    const emailWhenSubmit = debounce(event => {
        initialValue.email = event.target.value;
        // console.log(initialValue);
    }, 1000);
    const passwordWhenSubmit = debounce(event => {
        initialValue.password = event.target.value;
        // console.log(initialValue);
    }, 500);

    const onSignInClick = () => {
        history.push('/');
    };

    const onRegisterClick = () => {
        if (initialValue.email && initialValue.password) {
            setUser([...user, initialValue]);
            setIsVerified(true);
            // history.push('/addresses');

            localStorage.setItem(initialValue.email, initialValue.password);
        }
    };

    return (
        <Container onSubmit={formSubmit}>
            <div>
                <img alt='react icon' src='favicon.ico' />
            </div>
            <h2>Registration</h2>
            <div id='inputs'>
                <input id='email' type='email' placeholder='Email address' onChange={emailWhenSubmit} />
                <input id='password' type='password' placeholder='Password' onChange={passwordWhenSubmit} />
            </div>

            <div id='buttons'>
                <button type='button' onClick={onSignInClick}>
                    Sign in
                </button>
                <button type='button' id='registration' onClick={onRegisterClick}>
                    registration
                </button>
            </div>
        </Container>
    );
};

export default Registration;

const Container = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    h2 {
        font-size: 1.75rem;
        font-weight: 400;
    }

    #inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            font-size: 1rem;
            height: 25px;
            width: 275px;
            padding: 1rem 0.75rem;
        }

        #email {
            margin-bottom: -1px;
        }
        #password {
            margin-bottom: 10px;
        }

        #checkboxWrapper {
            font-size: 1rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;

            #checkbox {
                height: 15px;
                width: 15px;
            }
        }
    }

    #buttons {
        width: 20%;
        display: flex;
        justify-content: center;

        button {
            font-size: 16px;
            min-width: 100px;
            margin: 0 15px;
        }
        #registration {
            min-width: 115px;
        }
    }
`;

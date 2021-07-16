import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { userContext } from '../CONTEXT/UsersContext';

const SignIn = () => {
    const history = useHistory();

    const { user, setIsVerified, initialValue } = useContext(userContext);

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
        console.log(initialValue);
    }, 2000);
    const passwordWhenSubmit = debounce(event => {
        initialValue.password = event.target.value;
        console.log(initialValue);
    }, 500);

    const onSignInClick = () => {
        for (let i = 0; i < user.length; i++) {
            if (user[i].email === initialValue.email && user[i].password === initialValue.password) {
                setIsVerified(true);
                history.push('/home');
                break;
            } else if (i === user.length - 1) {
                alert('Email or Password is incorect!');
            }
        }
    };

    return (
        <Container onSubmit={formSubmit}>
            <div>
                <img alt='react icon' src='favicon.ico' />
            </div>
            <h2>Please sign in</h2>
            <div id='inputs'>
                <input id='email' type='email' placeholder='Email address' onChange={emailWhenSubmit} />
                <input id='password' type='password' placeholder='Password' onChange={passwordWhenSubmit} />
                <div id='checkboxWrapper'>
                    <input type='checkbox' name='Remember me' id='checkbox'></input>
                    <label htmlFor='Remember me'>Remember me</label>
                </div>
            </div>
            <button id='submitButton' type='button' onClick={onSignInClick}>
                Sign in
            </button>
        </Container>
    );
};

export default SignIn;

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

    #submitButton {
        font-size: 20px;
        height: 50px;
        width: 300px;
        color: white;
        background-color: #0d6efd;
        border: none;
    }
`;

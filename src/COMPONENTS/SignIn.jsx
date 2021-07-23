import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { userContext } from '../CONTEXT/UsersContext';

const SignIn = () => {
    const history = useHistory();
    const { user, setIsVerified, initialValue } = useContext(userContext);

    //ამაში ჩასმული ფუნქციის ცვლილება მაშინვე არ ანახლებს საიტს.
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
        //ამოწმებს თუ არის localStorageში inputებში ჩაწერილი მეილი და პაროლი.
        const checking1 = () => {
            for (let j = 0; j < localStorage.length; j++) {
                const localUserName = localStorage.key(j);
                const localUserPass = localStorage.getItem(localUserName);

                if (localUserName === initialValue.email && localUserPass === initialValue.password) {
                    return true;
                } else {
                    return false;
                }
            }
        };
        //ამოწმებს თუ არის სერვერიდან ატვირთულ ინფორმაციაში inputებში ჩაწერილი მეილი და პაროლი.
        const checking2 = () => {
            for (let i = 0; i < user.length; i++) {
                if (user[i].email === initialValue.email && user[i].password === initialValue.password) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        //თუ ერთ-ერთში არის მაშინ გადაჰყავხარ საიტზე.
        if (checking1() || checking2()) {
            setIsVerified(true);
            history.push('/addresses');
        } else {
            alert('Email or Password is incorect!');
        }
    };

    const onLaterClick = () => {
        history.push('/addresses');
    };

    const onRegisterClick = async () => {
        history.push('/registration');
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
            </div>

            <div id='buttons'>
                <button type='button' onClick={onSignInClick}>
                    Sign in
                </button>
                <button type='button' onClick={onLaterClick}>
                    Later
                </button>
            </div>
            <button type='button' id='registration' onClick={onRegisterClick}>
                registration
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

    #buttons {
        width: 20%;
        display: flex;
        justify-content: center;

        button {
            font-size: 16px;
            min-width: 100px;
            margin: 0 15px;
        }
    }
    #registration {
        font-size: 14px;
        position: absolute;
        top: 30px;
        right: 70px;
    }
`;

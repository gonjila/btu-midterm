import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { userContext } from '../CONTEXT/UsersContext';

const Registration = () => {
    const history = useHistory();
    const { user, setUser, setIsVerified } = useContext(userContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const formSubmit = data => {
        console.log(data);

        //რეგისტრაციის ღილაკზე დაჭერით, თუ emailისა და passwordის ველში ჩაწერილია რამე,
        //მაშინ userის stateს უერთებს emailითა და passwordით შექმნილ objectს.
        if (data.email && data.password) {
            setUser([...user, data]);
            setIsVerified(true);
            // history.push('/addresses');

            if (data.checkBox) {
                localStorage.setItem(data.email, data.password);
            }
        }
    };

    const onSignInClick = () => {
        history.push('/');
    };

    return (
        <Container onSubmit={handleSubmit(formSubmit)}>
            <div>
                <img alt='react icon' src='favicon.ico' />
            </div>
            <h2>Registration</h2>
            <div id='inputs'>
                <input
                    id='email'
                    type='email'
                    placeholder='Email address'
                    {...register('email', { required: 'Email is required!' })}
                />
                <input
                    id='password'
                    type='password'
                    placeholder='Password'
                    {...register('password', {
                        required: 'Password is required!',
                        maxLength: { value: 9, message: 'Please enter maximum 9 character' },
                    })}
                />
                <div id='checkboxWrapper'>
                    <input id='checkBox' type='checkbox' {...register('checkBox')} />
                    <label htmlFor='checkBox'>Save in LocalStorage</label>
                </div>

                {errors.email?.message && <p>{errors.email.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div id='buttons'>
                <button id='registration' type='submit'>
                    registration
                </button>
                <button id='signIn' type='button' onClick={onSignInClick}>
                    Sign in
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

        #checkboxWrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            input {
                width: 50px;
            }
        }

        p {
            color: red;
            font-weight: 600;

            &:not(:last-child) {
                margin: 0;
            }
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
        #signIn {
            font-size: 14px;
            position: absolute;
            top: 30px;
            left: 70px;
        }
        #registration {
            letter-spacing: 1.3px;
            min-width: 155px;
        }
    }
`;

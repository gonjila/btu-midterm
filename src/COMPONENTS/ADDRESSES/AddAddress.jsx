import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import withAuthProtection from '../../HOC/withAuthProtection';
import { AddressContext } from '../../CONTEXT/AddressContext';
import Navigation from '../Navigation';

const AddAddress = () => {
    const history = useHistory();
    const { initialValue, addresses, setAddresses } = useContext(AddressContext);

    const onSubmit = event => {
        event.preventDefault();
        const newList = [...addresses, initialValue];
        setAddresses(newList);
        history.push('/addresses');
    };

    const onInputChange = event => {
        initialValue[event.target.name] = event.target.value;
    };

    return (
        <Container>
            <Navigation />
            <Page onSubmit={onSubmit}>
                <div>
                    <label>Country:</label>
                    <input type='text' name='country' onChange={onInputChange} required />
                </div>

                <div>
                    <label>City:</label>
                    <input type='text' name='city' onChange={onInputChange} required />
                </div>

                <div>
                    <label>Street:</label>
                    <input type='text' name='street' onChange={onInputChange} required />
                </div>

                <div>
                    <label>Street Name:</label>
                    <input type='text' name='streetName' onChange={onInputChange} required />
                </div>

                <div>
                    <label>Zip Code:</label>
                    <input type='text' name='zipcode' onChange={onInputChange} required />
                </div>

                <button type='submit'>Add Address</button>
            </Page>
        </Container>
    );
};

export default withAuthProtection(AddAddress);

const Container = styled.div`
    display: flex;
`;

const Page = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 40%;
        display: flex;
        flex-direction: column;

        label {
        }
        input {
            height: 20px;
        }
    }

    button {
        margin: 15px 10px;
    }
`;

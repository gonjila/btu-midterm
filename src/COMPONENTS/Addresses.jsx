import { useContext } from 'react';
import styled from 'styled-components';

import { AddressContext } from '../CONTEXT/AddressContext';
import Navigation from './Navigation';

const Addresses = () => {
    const { addresses, setAddresses, oldAddresses, setItmsNumber } = useContext(AddressContext);

    function debounce(func, timeout = 500) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    const onSelectChange = event => {
        setItmsNumber(event.target.value);
    };

    const onSearch = debounce(({ target }) => {
        const filteredAddresses = oldAddresses.filter(
            item =>
                item.country.toLowerCase().includes(target.value.toLowerCase()) ||
                item.city.toLowerCase().includes(target.value.toLowerCase())
        );
        setAddresses(filteredAddresses);
    }, 900);

    return (
        <Container>
            <Navigation />
            <Page>
                <div id='ragac'>
                    <input type='text' placeholder='Filter for City or Country' onChange={onSearch} />
                    <select title='Quantity' onChange={onSelectChange}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>
                <AddressListItems>
                    {addresses.map(item => {
                        return (
                            <ItemWrapper key={item.zipcode}>
                                <h1>{item.country}</h1>
                                <h3>{item.city}</h3>
                                <p>{item.street}</p>
                                <p>{item.streetName}</p>
                                <p>{item.zipcode}</p>
                            </ItemWrapper>
                        );
                    })}
                </AddressListItems>
            </Page>
        </Container>
    );
};

export default Addresses;

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    #ragac {
        width: 100%;
        margin: 10px 0;
        display: flex;
        justify-content: space-around;

        input {
            width: 80%;
            height: 30px;
            text-align: center;
        }
    }
`;

const AddressListItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: baseline;
    overflow-y: scroll;
`;

const ItemWrapper = styled.div`
    min-width: 250px;
    height: 300px;
    padding: 0 10px;
    margin: 10px;
    color: white;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

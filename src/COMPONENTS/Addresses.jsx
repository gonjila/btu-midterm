import { useState } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import { AddressApi } from '../SERVICES/AddressApi';
import { useEffect } from 'react';

const Addresses = () => {
    const [itemsNumber, setItmsNumber] = useState(10);
    const [addresses, setAddresses] = useState([]);

    const onSelectChange = event => {
        setItmsNumber(event.target.value);
    };

    //elodeba monacemebis chamotvirtvas
    const loadAddresses = async () => {
        const addressList = await AddressApi({ quantity: itemsNumber });
        setAddresses(addressList);
    };

    useEffect(() => {
        loadAddresses();
    }, [itemsNumber]);

    return (
        <Container>
            <Navigation />
            <Page>
                <div id='ragac'>
                    <input type='text' placeholder='Filter for City or Country' />
                    <select onChange={onSelectChange}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>
                <ComponentWrapper>
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
                </ComponentWrapper>
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

const ComponentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
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

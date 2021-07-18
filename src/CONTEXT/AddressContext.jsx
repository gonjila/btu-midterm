import { useState, createContext, useEffect } from 'react';

import { AddressApi } from '../SERVICES/AddressApi';

export const AddressContext = createContext(null);

const AddressProviderComponent = ({ children }) => {
    const [itemsNumber, setItmsNumber] = useState(10);
    const [addresses, setAddresses] = useState([]);
    const [oldAddresses, setOldAddresses] = useState([]);

    const initialValue = { country: null, city: null, street: null, streetName: null, zipcode: null };

    //ელოდება მონაცემების ჩამოტვირთვას addressApi-დან
    const loadAddresses = async () => {
        const addressList = await AddressApi({ quantity: itemsNumber });

        //ტვირთავს მონაცემებს stateებში
        setAddresses(addressList);
        setOldAddresses(addressList);
    };

    useEffect(() => {
        loadAddresses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemsNumber]);

    return (
        <AddressContext.Provider
            value={{
                itemsNumber,
                setItmsNumber,
                addresses,
                setAddresses,
                oldAddresses,
                setOldAddresses,
                initialValue,
            }}
        >
            {children}
        </AddressContext.Provider>
    );
};

export default AddressProviderComponent;

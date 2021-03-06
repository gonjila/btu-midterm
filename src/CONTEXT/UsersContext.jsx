import { createContext, useEffect, useState } from 'react';

import UserApi from '../SERVICES/UserApi';

export const userContext = createContext([]);

const UsersProviderComponent = ({ children }) => {
    const [user, setUser] = useState([]);
    const [isVerified, setIsVerified] = useState(false);

    const loadUsers = async () => {
        const usersList = await UserApi();
        setUser(usersList);
    };

    useEffect(() => {
        loadUsers();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <userContext.Provider value={{ user, setUser, isVerified, setIsVerified }}>
            {children}
        </userContext.Provider>
    );
};

export default UsersProviderComponent;

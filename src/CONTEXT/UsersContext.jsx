import { createContext, useState } from 'react';

export const userContext = createContext([]);

const users = [
    { email: 'lasha@yahoo.com', password: 'lasha' },
    { email: 'gonjila@yahoo.com', password: 'gonjila' },
];
const UsersProviderComponent = ({ children }) => {
    const [user, setUser] = useState(users);
    const [isVerified, setIsVerified] = useState(false);

    return (
        <userContext.Provider value={{ user, setUser, isVerified, setIsVerified }}>
            {children}
        </userContext.Provider>
    );
};

export default UsersProviderComponent;

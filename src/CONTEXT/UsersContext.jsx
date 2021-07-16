import { createContext, useState } from 'react';

export const userContext = createContext([]);

const users = [
    { email: 'lasha@yahoo.com', password: 'lasha' },
    { email: 'gonjila@yahoo.com', password: 'gonjila' },
    { email: 'g@y', password: 'g' },
];
const UsersProviderComponent = ({ children }) => {
    const [user, setUser] = useState(users);
    const [isVerified, setIsVerified] = useState(false);

    const initialValue = { email: '', password: '' };

    return (
        <userContext.Provider value={{ user, setUser, isVerified, setIsVerified, initialValue }}>
            {children}
        </userContext.Provider>
    );
};

export default UsersProviderComponent;

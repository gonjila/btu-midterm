import { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { userContext } from '../CONTEXT/UsersContext';

const withAuthProtection = Component => {
    const WithAuthProtection = () => {
        const { isVerified } = useContext(userContext);

        if (!isVerified) {
            return <Redirect to='/' />;
        }

        return (
            <div>
                <Component />
            </div>
        );
    };
    return WithAuthProtection;
};

export default withAuthProtection;

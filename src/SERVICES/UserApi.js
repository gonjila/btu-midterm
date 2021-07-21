const BASE_URL = 'https://reqres.in';

const usersArray = [
    { email: 'lasha@yahoo.com', password: 'lasha' },
    { email: 'gonjila@yahoo.com', password: 'gonjila' },
    { email: 'g@y', password: 'g' },
];

const UserApi = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/login`, {
            method: 'PUT',
            body: JSON.stringify(usersArray),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json());
        // .then(result => result);

        return response;
    } catch {
        console.group('User Error');
        console.log(Error());
        console.groupEnd();
    }
};

export default UserApi;

import axios from 'axios';

const BASE_URL = 'https://fakerapi.it/api/v1/books';
const booksApi = async ({ quantity, characters }) => {
    try {
        const response = await axios.get(`${BASE_URL}?_quantity=${quantity}&_characters=${characters}`);
        console.log(response.data.data);
        return response.data.data;
    } catch {
        console.group('[Books Error]');
        console.log(Error());
        console.groupEnd();
    }
};

export default booksApi;

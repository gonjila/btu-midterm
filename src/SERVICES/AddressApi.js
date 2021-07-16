import axios from 'axios';

const BASE_URL = 'https://fakerapi.it/api/v1/addresses';
export const AddressApi = async ({ quantity }) => {
    try {
        const Response = await axios.get(`${BASE_URL}?_quantity=${quantity}`);
        // console.log(Response.data.data);
        return Response.data.data;
    } catch {
        console.group('[Address Error');
        console.log(Error());
        console.groupEnd();
    }
};

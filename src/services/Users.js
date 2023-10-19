import axios from 'axios';

const BASE_URL = 'https://60c4063c2df2cb00178ac12b.mockapi.io';
export const UsersService = {
    getUsers: async ()=>{
        return (await axios.get(BASE_URL+'/users')).data;
    }
}
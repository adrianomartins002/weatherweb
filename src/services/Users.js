import axios from 'axios';

export const UsersService = {
    getUsers: async ()=>{
        return (await axios.get(process.env.REACT_APP_BASE_URL_USER_API+'/users')).data;
    }
}
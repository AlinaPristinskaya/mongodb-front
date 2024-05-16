import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mongodb-back-4f615da3a900.herokuapp.com/'
});

export default instance;


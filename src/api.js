import axios from 'axios';





const instance = axios.create({
    baseURL: 'https://mongodb-back-ts6w.onrender.com' // или локально 'http://localhost:10000'
});



export default instance;


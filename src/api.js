import axios from 'axios';





const instance = axios.create({
    baseURL: 'https://mongodb-back-6rbl.onrender.com' // или локально 'http://localhost:10000'
});



export default instance;


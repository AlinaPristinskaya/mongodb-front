import axios from 'axios';

//const instance = axios.create({
   // baseURL: 'http://localhost:8000'
//});

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://mongodb-back-ts6w.onrender.com'  // URL для Render (поменяйте на ваш актуальный)
        : 'http://localhost:8000' // URL для локальной разработки
});



export default instance;


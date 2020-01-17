import axiox from 'axios';

const api = axiox.create({
    baseURL: 'http://localhost:7777'
})

export default api
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID a6f2d8109836df4225a2707d0257b53af8c8c6362524e7db828f19766b3b61d4'
    }
});
import axios from 'axios';
import secret from '../secrets.json';

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = secret.TMDB_API_KEY;

const tmdb = axios.create({
 baseURL: API_BASE,
 params: {
    api_key: API_KEY,
 },
});

export default tmdb;
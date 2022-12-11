import axios from 'axios';
const tmdb = (pageNum) => {
    return axios.create({
        baseURL: 'https://api.themoviedb.org/3/',
        headers: { accept: 'application/json' },
        params: { api_key: '7dbadbc7ed75adfb23d5bdd989ec0f5b', page: pageNum },
    });
};
export default tmdb;

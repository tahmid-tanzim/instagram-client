import axios from 'axios';

const headers = {'Content-Type': 'application/json'};
const routes = {
    login: 'http://127.0.0.1:8080/login',
    upload: 'http://127.0.0.1:8080/upload',
    myPhoto: 'http://127.0.0.1:8080/photos',
    followersPhoto: 'http://127.0.0.1:8080/followers/photo',
    follow: 'http://127.0.0.1:8080/follow',
    unFollow: 'http://127.0.0.1:8080/unfollow'
};

const encodeQueryData = data => {
    let ret = [];
    for (let i in data) {
        if (data[i] !== '' && data[i] !== null) {
            ret.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        }
    }
    return ret.length ? '?' + ret.join('&') : '';
};

const Http = {
    GET: (key, params = '') => {
        params = typeof params === 'object' ? encodeQueryData(params) : params;
        return axios.get(routes[key] + params, headers);
    },
    POST: (key, params) => axios.post(routes[key], params, headers),
    PUT: (key, params) => axios.put(routes[key], params, headers),
    UPLOAD: (key, {owner_id, title, file}) => {
        const form = new FormData();
        form.append('photo', file);
        form.append('owner_id', owner_id);
        form.append('title', title);

        return axios.post(routes[key], form, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }
};

export default Http;


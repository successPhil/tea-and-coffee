const base_url = import.meta.env.VITE_BASE_URL
// const API_BASE_URL = `http://${base_url}/api`;
const API_BASE_URL = `http://127.0.0.1:8000/api`;



async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
}

export async function teaFetch() {
    const userToken = localStorage.getItem('token');
    const payload = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${userToken}`,
        },
    }

    const body = await basicFetch(`${API_BASE_URL}/v1/all-teas`, payload);
    return body;
}

export async function coffeeFetch() {
    const userToken = localStorage.getItem('token');
    const payload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${userToken}`,
        },
    }

    const body = await basicFetch(`${API_BASE_URL}/v1/coffee/`, payload);
    return body;
}
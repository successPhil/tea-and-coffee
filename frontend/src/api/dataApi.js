const base_url = import.meta.env.VITE_BASE_URL
const API_BASE_URL = `http://${base_url}/api`;
const userToken = localStorage.getItem('token')

async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
}

export async function teaFetch() {
    const payload = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${userToken}`,
        },
    }

    const body = await basicFetch(`${API_BASE_URL}/v1/teas`, payload);
    return body;
}
const API_URL = 'http://jsonplaceholder.typicode.com/users';

export async function getUserData ()  {
     const res = await fetch(`${API_URL}`).then(r=>r.json());
     return res;
}
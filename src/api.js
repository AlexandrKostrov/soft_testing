const API_URL = 'http://jsonplaceholder.typicode.com/users';

export   function getUserData ()  {
      return   fetch(`${API_URL}`).then(r=>r.json());
}
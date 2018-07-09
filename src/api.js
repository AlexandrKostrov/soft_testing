const API_URL = 'http://jsonplaceholder.typicode.com/users';

export   function getUserData ()  {
    //  const res = 
      return   fetch(`${API_URL}`).then(r=>r.json());
    // return res;
}